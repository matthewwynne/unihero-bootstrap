<template>
  <div class="Dashboard">
    <myNavBar></myNavBar>
    <br>
<!--    <h1>Well Done {{ person['fields']['name'] }}</h1>-->
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <b-btn @click="signOut">Sign Out</b-btn>
    <div v-if=loggedIn class="container">
      <div>
        <p>Great Work! {{ name }} Your UNIHero score is
          {{ uniheroStudent['fields']['APS_score'] }}</p>
        <p>These results could get you into the following</p>

     </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in items" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ item['fields']['University'] }}</h5>
              <h5 class="card-title">{{ item['fields']['Faculties'] }}</h5>
              <h5 class="card-title">{{ item['fields']['Qualification'] }}</h5>
              <h5 class="card-title">NBT required? {{ item['fields']['NBT required?'] }}</h5>
              <p>
                {{ item['fields']['Requirements Comments'] }}
              </p>
              <a v-bind:href="item['fields']['Prospectus']"
                 class="btn btn-info">Prospectus</a>
              <a v-bind:href="item['fields']['Application']"
                 class="btn btn-info">Application</a>
              <hr class="my-4">
              <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success"
                     role="progressbar" style="width: 100%" aria-valuenow="100%"
                     aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import myNavBar from '@/components/myNavBar.vue';

export default {
  name: 'Home',
  data() {
    return {
      items: [],
      name: '',
      email: '',
      emailVerified: false,
      loggedIn: false,
      airtableRecordID: '',
      uniheroStudent: [],
    };
  },
  components: {
    myNavBar,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
    this.getUserProfile();
    this.loadPersonATID();
  },
  mounted() {
    this.loadItemsFromAT();
  },
  methods: {
    getUserProfile() {
      const user = firebase.auth().currentUser;
      if (user != null) {
        this.name = user.displayName;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
      }
    },
    loadPersonATID() {
      // Init variables
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      const encodedUserEmail = encodeURIComponent(this.email);
      const atURLEmail = `https://api.airtable.com/v0/${appId}/person?fields%5B%5D=airtable_id&filterByFormula=search(%22${encodedUserEmail}%22%2C+email)`;
      const atURLPerson = `https://api.airtable.com/v0/${appId}/person/`;
      const atConfig = { headers: { Authorization: `Bearer ${appKey}` } };
      this.person = [];
      this.persontwo = [];
      axios.get(atURLEmail, atConfig).then((response) => {
        this.person = response.data.records;
        console.log(this.person);
        this.airtableRecordID = this.person[0].id;
        const atURLPersonNew = atURLPerson.concat(this.person[0].id);
        console.log(atURLPersonNew);
        axios.get(atURLPersonNew, atConfig).then((responsetwo) => {
          this.persontwo = responsetwo.data;
          this.uniheroStudent = responsetwo.data;
          console.log(this.uniheroStudent);
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });
    },
    loadPersonDetailsFromAT() {
      // Init variables
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      this.person = [];
      console.log(`start of loadPersonDetailsFromAT method + ${this.airtableRecordID}`);
      axios.get(
        `https://api.airtable.com/v0/${appId}/person/${this.airtableRecordID}`,
        {
          headers: { Authorization: `Bearer ${appKey}` },
        },
      ).then((response) => {
        this.person = response.data.records;
        console.log(this.person);
      }).catch((error) => {
        console.log(error);
      });
    },
    loadItemsFromAT() {
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      const atURL = `https://api.airtable.com/v0/${appId}/university`;
      const atConfig = { headers: { Authorization: `Bearer ${appKey}` } };
      this.items = [];
      axios.get(atURL, atConfig).then((response) => {
        this.items = response.data.records;
      }).catch((error) => {
        console.log(error);
      });
    },
    async signOut() {
      try {
        const data = firebase.auth().signOut();
        console.log(data);
        await this.$router.replace({ name: 'Login' });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>

</style>
