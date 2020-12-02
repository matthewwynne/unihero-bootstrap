<template>
  <div class="CollectResults">
  </div>
</template>

<script>

import axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'CollectResults',
  data() {
    return {
      email: '',
      uniheroStudent: [],
    };
  },
  created() {
    this.getUserProfile();
    this.getRecordId();
  },
  mounted() {
  },
  components: {
  },
  methods: {
    landbot() {
      this.$loadScript('https://static.landbot.io/landbot-3/landbot-3.0.0.js')
        .then(() => {
          // Script is loaded, do something
          const bot = document.createElement('script');
          bot.innerHTML = `var myLandbot = new Landbot.Fullpage({ configUrl: 'https://chats.landbot.io/v3/H-752321-0G1I596JSS4G6FF1/index.json', customData: { recordid: '${this.uniheroStudent.fields.airtable_id}', },});`;
          bot.async = true;
          document.body.appendChild(bot);
        })
        .catch(() => {
          // Failed to fetch script
          console.log('failed to load script');
        });
    },
    getUserProfile() {
      const user = firebase.auth().currentUser;
      if (user != null) {
        this.name = user.displayName;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
      }
    },
    getRecordId() {
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      const airtableConfig = { headers: { Authorization: `Bearer ${appKey}` } };
      // Logged in users email address collected from Firebase
      const encodedUserEmail = encodeURIComponent(this.email);
      // URLS for the AT person and university
      const atURLEmail = `https://api.airtable.com/v0/${appId}/person?fields%5B%5D=airtable_id&filterByFormula=search(%22${encodedUserEmail}%22%2C+email)`;
      const atURLPerson = `https://api.airtable.com/v0/${appId}/person/`;
      // UserATID is used for the record id
      this.items = [];
      axios
        .get(atURLEmail, airtableConfig)
        .then(({ data }) => {
          const atURLPersonNew = atURLPerson.concat(data.records[0].id);
          return axios.get(atURLPersonNew, airtableConfig);
        }).then(({ data }) => {
          this.uniheroStudent = data;
          this.landbot();
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
