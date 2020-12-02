<template>
  <div class="login">
    <b-container fluid="lg" class="login-header login-header-nav mt-4">
      <b-row class="mb-5">
        <b-col xs="12" class="login-header-navbar">
          <div @click="goHome" class="logo"></div>
        </b-col>
      </b-row>
    </b-container>
    <div class="container mt-4">
      <div class="wrapper">
        <div v-if="error" class="error">{{ error.message }}</div>
        <h1 class="mb-3">Welcome back</h1>
        <form @submit.prevent="pressed">
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" v-model="email" class="form-control"
                  id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password
              <a class="label-link" @click.prevent="forgotPassword">
              forget?</a></label>
            <input type="password" v-model="password" class="form-control"
                  id="exampleInputPassword1">
          </div>
          <button type="Register" class="btn btn-info">Log in</button>
        </form>
        <p class="mt-2 bold">Don’t have a Unihero Account yet?
          <router-link class="badge badge-info text-wrap" to="/get-started">
          Create one here.</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
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
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: 'Dashboard' });
        console.log(val);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    },
    forgotPassword() {
      firebase.auth().sendPasswordResetEmail(this.email).then(() => {
        alert('Reset password link sent, please check you email');
      }).catch((error) => {
        alert(error);
      });
    },
  },
};
</script>

<style scoped lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-grey: #D0D2D3;
$fw-bold: 700;

.login {
  .login-header {
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
            color: $color-light-grey;
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
