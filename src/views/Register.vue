<template>
  <div class="register">
    <b-container fluid="lg" class="register-header register-header-nav mt-4">
      <b-row class="mb-5">
        <b-col xs="12" class="register-header-navbar">
          <div @click="goHome" class="logo"></div>
        </b-col>
      </b-row>
    </b-container>
    <div class="container mt-4">
      <div class="wrapper">
        <div v-if="error" class="error">{{ error.message }}</div>
        <h1 class="mb-3">Welcome</h1>
        <form @submit.prevent="pressed">
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" v-model="email" class="form-control"
                   id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password
              <router-link class="label-link" to="/register">
                secure!</router-link></label>
            <input type="password" v-model="password" class="form-control"
                   id="exampleInputPassword1">
          </div>
          <button type="Register" class="btn btn-info">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

// const actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this URL
//   // must be whitelisted in the Firebase Console.
//   url: 'http://localhost:8080/#/finishsignup', // Here we redirect back to this same page.
//   handleCodeInApp: true, // This must be true.
// };

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  components: {
  },
  methods: {
    goHome() {
      this.$router.replace({ name: 'Home' });
    },
    async pressed() {
      try {
        const user = await firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        window.alert('Your account has been created');
        this.$router.replace({ name: 'Dashboard' });
      } catch (err) {
        console.log(err);
        window.alert(`Oops...${err.message}`);
      }
    },
    // async pressed() {
    //   try {
    //     await firebase.auth()
    //       .sendSignInLinkToEmail(this.email, actionCodeSettings);
    //     console.log(this.email);
    //     window.alert(`An email was sent to ${this.email}.
    //     Please use the link in the email to sign-in.`);
    //     window.localStorage.setItem('emailForSignIn', this.email);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-gray: #D0D2D3;
$fw-bold: 700;

.register {
  .register-header {
    &-nav {
      @media (max-width: 768px) {
        margin-top: 1rem !important;
      }
    }
    &-navbar {
      position: relative;
      .logo {
        background-image: url('~@/assets/images/unihero-logo-01.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 65px;
        width: 220px;
        display: inline-flex;
        @media (max-width: 768px) {
          width: 180px;
        }
      }
    }
  }
  h1 {
    font-size: 2.3rem;
    font-weight: $fw-bold;
  }
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    form {
      width: 520px;
      @media (max-width: 593px) {
        width: 100%;
      }
      .form-group {
        margin-bottom: .5rem;
        label {
          font-weight: $fw-bold;
          font-size: .9rem;
          .label-link {
            color: $color-light-gray;
            padding: 0 6px;
          }
        }
        .form-control {
          border-width: 2px;
          height: calc(1.5em + 1.55rem + 2px);
        }
      }
      .btn {
        background: $color-turquoise;
        border: 3px solid $color-turquoise;
        border-radius: 10px;
        color: $color-navy-blue;
        padding: 10px 20px;
        margin: 30px 0;
        font-size: 1em;
        font-weight: $fw-bold;
        letter-spacing: .5px;
        width: 100%;
      }
    }
    .bold {
      font-weight: $fw-bold;
      .badge-info {
        color: $color-turquoise;
        background-color:white !important;
        font-size: inherit;
        padding: 0;
      }
    }
  }
}

</style>
