<template>
  <div class="dashboard pb-5">
    <!-- <myNavBar></myNavBar> -->
    <div class="logo-bar">
      <b-container fluid="lg" class="mb-3 mt-3">
        <b-row class="mt-4">
          <b-col class="pt-3 pb-3" xs="12">
            <div class="logo"></div>
        </b-col>
      </b-row>
    </b-container>
    </div>
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

    <!-- Start of hardcode content -->
    <b-container fluid="md" class="mb-5 mt-5">
      <b-row class="mt-5 mb-3">
        <b-col xs="12" class="score">
          <p class="heading">Great work! Your Unihero score is
            44.</p>
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
                type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Likelyhood of acceptance
              </button>
              <div class="dropdown-menu">
                Option 1
              </div>
            </div>
          </b-col>
        </b-row>
        <ul class="list-group">
          <li class="list-group-item">
            <div class="card">
              <figure class="figure">
                <img src="~@/assets/images/dashboard/vega-school-01.jpg"
                class="figure-img img-fluid z-depth-1">
              </figure>
              <div class="card-body">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success"
                      role="progressbar" style="width: 75%" aria-valuenow="75%"
                      aria-valuemin="0" aria-valuemax="75"></div>
                </div>
                <h5 class="card-title">BCom Brand Building &amp; Management</h5>
                <p class="university">
                  Vega School
                </p>
                <a class="btn btn-info btn-info-left">Website</a>
                <a class="btn btn-info btn-info-right">Call Me Back</a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card">
              <figure class="figure">
                <img src="~@/assets/images/dashboard/vega-school-01.jpg"
                class="figure-img img-fluid z-depth-1">
              </figure>
              <div class="card-body">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success"
                      role="progressbar" style="width: 75%" aria-valuenow="75%"
                      aria-valuemin="0" aria-valuemax="75"></div>
                </div>
                <h5 class="card-title">BCom Brand Building &amp; Management</h5>
                <p class="university">
                  Vega School
                </p>
                <a class="btn btn-info btn-info-left">Website</a>
                <a class="btn btn-info btn-info-right">Call Me Back</a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card">
              <figure class="figure">
                <img src="~@/assets/images/dashboard/vega-school-01.jpg"
                class="figure-img img-fluid z-depth-1">
              </figure>
              <div class="card-body">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success"
                      role="progressbar" style="width: 75%" aria-valuenow="75%"
                      aria-valuemin="0" aria-valuemax="75"></div>
                </div>
                <h5 class="card-title">BCom Brand Building &amp; Management</h5>
                <p class="university">
                  Vega School
                </p>
                <a class="btn btn-info btn-info-left">Website</a>
                <a class="btn btn-info btn-info-right">Call Me Back</a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card">
              <figure class="figure">
                <img src="~@/assets/images/dashboard/vega-school-01.jpg"
                class="figure-img img-fluid z-depth-1">
              </figure>
              <div class="card-body">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success"
                      role="progressbar" style="width: 75%" aria-valuenow="75%"
                      aria-valuemin="0" aria-valuemax="75"></div>
                </div>
                <h5 class="card-title">BCom Brand Building &amp; Management</h5>
                <p class="university">
                  Vega School
                </p>
                <a class="btn btn-info btn-info-left">Website</a>
                <a class="btn btn-info btn-info-right">Call Me Back</a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card">
              <figure class="figure">
                <img src="~@/assets/images/dashboard/vega-school-01.jpg"
                class="figure-img img-fluid z-depth-1">
              </figure>
              <div class="card-body">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped bg-success"
                      role="progressbar" style="width: 75%" aria-valuenow="75%"
                      aria-valuemin="0" aria-valuemax="75"></div>
                </div>
                <h5 class="card-title">BCom Brand Building &amp; Management</h5>
                <p class="university">
                  Vega School
                </p>
                <a class="btn btn-info btn-info-left">Website</a>
                <a class="btn btn-info btn-info-right">Call Me Back</a>
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
                <a class="btn btn-info btn-info-center mt-2 mb-1">Unlock more </a>
              </div>
            </div>
          </li>
        </ul>
     </div>
    </b-container>
    <!-- End of hardcode content -->
  </div>
</template>

<script>
import axios from 'axios';
import * as firebase from 'firebase/app';
import 'firebase/auth';
// import myNavBar from '@/components/myNavBar.vue';

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
    // myNavBar,
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
