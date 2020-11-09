<template>
  <div class="Dashboard">
    <myNavBar></myNavBar>
    <br>
    <div class="container" v-if=loggedIn>
      <div class="row">
        <div class="col-sm-8">
          <h1>Great Work! Your UNIHero score is
            {{ uniheroStudent['fields']['UNIHero_score'] }}</h1>
        </div>
        <div class="col-sm-2">
          <b-dropdown size="sm" class="m-md-2 dropdown"
                      id="dropdown-1" text="UNIHero Fit">
            <b-dropdown-item>Location</b-dropdown-item>
            <b-dropdown-item>Degree</b-dropdown-item>
            <b-dropdown-item>xxx</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="col-sm-2">
          <b-btn size="sm" class="m-md-2" @click="signOut">Sign Out</b-btn>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="mt-5 col" v-for="(item, index) in items" :key="index">
          <div id="card" class="card h-100" style="width: 18rem;">
            <img src="../assets/images/university/UWC/UWC_3.jpg"
                 class="card-img-top"
                 alt=""/>
            <div class="card-body">
              <h6 class="card-title"><b>{{ item['fields']['Qualification'] }}</b></h6>
              <h6 class="card-title">{{ item['fields']['University'] }}</h6>
              <div class="mt-1 progress">
                <div class="progress-bar progress-bar-striped bg-success"
                     role="progressbar" style="width: 100%" aria-valuenow="100%"
                     aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div>
                <a v-bind:href="item['fields']['Application']"
                   class="btn btn-info btn-sm">Website</a>
                <a v-bind:href="item['fields']['Application']"
                   class="m-2 btn btn-info btn-sm">Call Me Back</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 col">
        <b-card
          title="See more"
          img-src="https://www.mindsightcollective.com/wp-content/uploads/2019/04/more-pics-button-1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 18rem;"
          class="mb-2 h-100"
        >
          <b-card-text>
            If you'd like to see more options, we need s few more details.
          </b-card-text>

          <b-button href="#" class="m-2 btn btn-info btn-sm">View More</b-button>
        </b-card>
      </div>
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
      uniheroStudent: [],
      image: '../assets/images/university/UWC/UWC_3.jpg',
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
    getImgUrl(item) {
      return (`../assets/images/university/${item}`);
    },
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
      const airtableConfig = { headers: { Authorization: `Bearer ${appKey}` } };
      // Logged in users email address collected from Firebase
      const encodedUserEmail = encodeURIComponent(this.email);
      // URLS for the AT person and university
      const atURLEmail = `https://api.airtable.com/v0/${appId}/person?fields%5B%5D=airtable_id&filterByFormula=search(%22${encodedUserEmail}%22%2C+email)`;
      const atURLPerson = `https://api.airtable.com/v0/${appId}/person/`;
      // UserATID is used for the record id
      this.userATID = [];
      // Get request to find the AT ID
      axios.get(atURLEmail, airtableConfig).then((responseID) => {
        this.userATID = responseID.data.records;
        // Person url updated with record ID
        const atURLPersonNew = atURLPerson.concat(this.userATID[0].id);
        // Get Users details from AT
        axios.get(atURLPersonNew, airtableConfig).then((responseUserDetails) => {
          this.uniheroStudent = responseUserDetails.data;
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });
    },
    loadItemsFromAT() {
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      const atURL = `https://api.airtable.com/v0/${appId}/university?maxRecords=3`;
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
.card {
  float: none;
  margin: 0 auto 10px;
}
</style>
