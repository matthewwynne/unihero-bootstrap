<template>
  <div class="dashboard pb-5">
    <div class="logo-bar">
      <b-container fluid="lg" class="mb-3 mt-3">
        <b-row class="mt-4">
          <b-col class="pt-3 pb-3" xs="12">
            <div @click="goHome" class="logo"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-if="!loading">
    <div v-if=loggedIn class="container">
    <b-container fluid="md" class="mb-5 mt-5">
      <b-row class="mt-5 mb-3">
        <b-col xs="12" class="score">
          <p class="heading">Great work!
            Your Unihero score is {{ uniheroStudent['fields']['UNIHeroScore'] }}.</p>
        </b-col>
      </b-row>
      <div class="list-board">
        <b-row class="mb-5">
          <b-col xs="12" class="chat">
            <div class="chat-icon"></div>
            <div class="chat-bubble">Here are some incredible degrees that
              match your preferences &amp; marks!</div>
          </b-col>
        </b-row>
        <b-row class="filter mt-3">
          <b-col xs="12" lg="6">
            <h5 class="fw-bold">Recommended degrees:</h5>
          </b-col>
          <b-col xs="12" lg="6" class="align-right">
            <label for="colFormLabelSm" class="col-form-label col-form-label-sm">
              Sort by:</label>
            <div class="btn-group">
              <button class="btn btn-secondary btn-sm dropdown-toggle"
                      type="button" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                Likelyhood of acceptance
              </button>
              <div class="dropdown-menu">
                Option 1
              </div>
            </div>
          </b-col>
        </b-row>
        <ul v-if="!isFetching" class="list-group">
          <li class="list-group-item" v-for="(item, index) in items" :key="index">
            <div class="card">
              <figure class="figure">
                <img v-bind:src="item.fields.uni_image"
                     class="figure-img img-fluid z-depth-1">
              </figure>
              <div class="card-body">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success"
                       role="progressbar" v-bind:style="'width:'
                       + ((uniheroStudent.fields.UNIHeroScore - item.fields.APS_Equivalent)
                       /(49 - item.fields.APS_Equivalent)) * 100 + '%'"
                       v-bind:aria-valuenow="((uniheroStudent.fields.UNIHeroScore
                       - item.fields.APS_Equivalent)
                       /(49 - item.fields.APS_Equivalent)) * 100"
                       aria-valuemin="0"
                       v-bind:aria-valuemax="(49 - item.fields.APS_Equivalent)">
                  </div>
                </div>
                <h5 class="card-title">{{ item['fields']['Qualification'] }}</h5>
                <p class="university">
                  {{ item['fields']['University'] }}
                </p>
                <a class="btn btn-info btn-info-left" v-bind:href="item['fields']['Prospectus']">
                  Website</a>
                <a v-show="item['fields']['callback']" class="btn btn-info btn-info-right">
                  Call Me Back
                </a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card">
              <figure class="figure">
                <div class="text">Want to unlock<br>
                  more suggestions?</div>
              </figure>
              <div class="card-body text-center">
                <p class="info mt-2">Enter your marks so that we<br>
                  can better suggest more institutions
                  we believe will work for you!</p>
                <a @click=loadItemsFromAT() class="btn btn-info btn-info-center mt-2 mb-1">
                  Unlock more
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </b-container>
    </div>>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'dashboard',
  data() {
    return {
      items: [],
      name: '',
      email: '',
      emailVerified: false,
      loggedIn: false,
      uniheroStudent: [],
      isFetching: true,
      uniheroStudentLocations: [],
      uniheroStudentIndustry: [],
      loading: true,
    };
  },
  components: {
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
    this.getUserProfile();
  },
  mounted() {
    this.orderedLoadItemsFromAT();
  },
  methods: {
    goHome() {
      this.$router.replace({ name: 'Home' });
    },
    getUserProfile() {
      const user = firebase.auth().currentUser;
      if (user != null) {
        this.name = user.displayName;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
      }
    },
    orderedLoadItemsFromAT() {
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
          const atUniURL = `https://api.airtable.com/v0/appStZ5HUKWw7DEVw/university?filterByFormula=IF(AND({APS_Equivalent}<=${this.uniheroStudent.fields.UNIHeroScore},{Industry}="${this.uniheroStudent.fields.industry.trim()}",{Province}="${this.uniheroStudent.fields.location.trim()}"),"true")&maxRecords=5"`;
          // this.uniheroStudentLocations = data.fields.location.split(',');
          // this.uniheroStudentIndustry = data.fields.industry.split(',');
          // for (let i = 0; i < this.uniheroStudentIndustry.length; i += 1) {
          //   const str = `{Industry}="${this.uniheroStudentIndustry[i].trim()}",`;
          //   atUniURL = atUniURL.concat(str);
          // }
          // atUniURL = atUniURL.concat('OR(');
          // for (let i = 0; i < this.uniheroStudentLocations.length; i += 1) {
          //   const str = `{Province}="${this.uniheroStudentLocations[i].trim()}",`;
          //   atUniURL = atUniURL.concat(str);
          // }
          // atUniURL = atUniURL.slice(0, -1);
          // atUniURL = atUniURL.concat(')),"true")&maxRecords=5');
          encodeURI(atUniURL);
          return axios.get(atUniURL, airtableConfig);
        }).then((response) => {
          this.items = response.data.records;
          this.isFetching = false;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => { this.loading = false; });
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

<style scoped lang="scss">
$color-navy-blue: #0B0754;
$color-navy-blue-light: #3b3875;
$color-turquoise: #00F7C1;
$shadow-color: #c5cfd7;
$fw-bold: 700;

@mixin box-shadow($value) {
  -webkit-box-shadow: $value;
  -moz-box-shadow: $value;
  box-shadow: $value;
}

.logo-bar {
  background-color: white;
  .logo {
    background-image: url('~@/assets/images/unihero-logo-01.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 45px;
    width: 190px;
    display: inline-flex;
    @media (max-width: 768px) {
      width: 180px;
    }
  }
}

.dashboard {
  background-color: #E0E6EC;

  .score {
    .heading {
      font-size: 3em;
      font-weight: $fw-bold;
      @media (max-width: 593px) {
        font-size: 1.7em;
      }
    }
  }

  .list-board {
    background-color: white;
    border: 4px solid #c5cfd7;
    padding: 3em 4em;
    overflow: hidden;
    @media (max-width: 593px) {
      padding: 3em 2em;
    }
    .chat {
      position: relative;
      left: 80px;
      &-icon {
        background-image: url('~@/assets/images/unihero-chat-icon.png');
        width: 45px;
        height: 45px;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-flex;
        position: absolute;
        left: -60px;
        bottom: 15px;
      }
      &-bubble {
        background-color: $color-navy-blue;
        color: white;
        padding: .7em .9em;
        margin-bottom: 15px;
        width: 77%;
        border-radius: 6px;
        border-bottom-left-radius: 0;
        display: inline-flex;
        text-align: left;
        font-size: 1.25em;
        @media (max-width: 768px) {
          width: 80%;
        }
        @media (max-width: 593px) {
          font-size: .8em;
          width: 68%;
        }
      }
    }
    .filter {
      @media (max-width: 991px) {
        text-align: center;
        .align-right{
          text-align: center !important;
        }
      }
      .align-right{
        text-align: right;
      }
      h5 {
        font-weight: $fw-bold;
        font-size: 1.5rem;
        @media (max-width: 593px) {
          font-size: 1.2rem;
        }
      }
      .col-form-label {
        margin-right: .8rem !important;
      }
      .dropdown-toggle{
        color: $color-navy-blue;
        background-color: white;
        border: 2px solid $color-navy-blue;
        padding: 0.15rem 0.5rem;
        border-radius: 5px;
        &:after {
          display: none !important;
        }
      }
    }
    .list-group {
      display: inline;
      &-item {
        border: none;
        display: inline-block;
        padding: 1.5rem 0;
        width: 28%;
        margin-right: 75px;
        &:nth-child(3n) {
          margin-right: 0;
        }
        @media (max-width: 1195px) {
          width: 45%;
          &:nth-child(2n) {
            margin-right: 0 !important;
          }
          &:nth-child(3n) {
            margin-right: 75px;
          }
          .text {
            left: 21% !important;
          }
        }
        @media (max-width: 991px) {
          width: 60%;
          position: relative;
          left: 20%;
        }
        @media (max-width: 593px) {
          width: 100%;
          position: relative;
          left: 0;
          .text {
            left: 13% !important;
          }
        }
      }

      .card {
        @include box-shadow(0 0 .25em .25em rgba($shadow-color, .3));
        border: none;
        .figure {
          background-color: $color-navy-blue;
          overflow: hidden;
          height: 135px;
          position: relative;
          margin-bottom: 0;
          border-top-left-radius: 0.20rem;
          border-top-right-radius: 0.20rem;
          &-img {
            max-width: 130%;
            position: absolute;
            left: -15%;
            top: -22%;
          }
          .text {
            font-weight: $fw-bold;
            font-size: 1.3em;
            line-height: 1.3;
            text-align: center;
            color: white;
            position: absolute;
            top: 28%;
            left: 13%;
          }
        }
        &-body {
          padding: .9rem;
          .progress {
            background-color: white;
            border: 1px solid $color-turquoise;
            height: .65rem;
            border-radius: 0.15rem;
            margin-bottom: 0.75rem;
            &-bar {
              background-color: $color-turquoise !important;
              background-image: none;
            }
          }
          .university {
            font-size: .8em;
            font-weight: $fw-bold;
          }
          .info {
            font-size: .8em;
            font-weight: $fw-bold;
            text-align: center;
            line-height: 1.57;
          }
          .btn-info-center {
            font-size: 1rem !important;
            font-weight: $fw-bold;
          }
          .btn-info {
            background-color: $color-navy-blue;
            border-color: $color-navy-blue;
            border-radius: .30rem;
            padding: 0rem 1.5rem .1rem;
            font-size: .7rem;
            line-height: 1.7;
            &-left {
              float: left;
            }
            &-right {
              float: right;
            }
            &:hover {
              background-color: $color-navy-blue-light;
              border-color: $color-navy-blue-light;
            }
          }
        }
        &-title {
          font-weight: $fw-bold;
          line-height: 1;
          margin-bottom: 0.45rem;
        }
      }
    }
  }
}
</style>
