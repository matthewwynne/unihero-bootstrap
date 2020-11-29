<template>
  <div class="register">
    <!-- <myNavBar></myNavBar> -->
    <b-container fluid="lg" class="register-header register-header-nav mt-4">
      <b-row class="mb-5">
        <b-col xs="12" class="register-header-navbar">
          <div class="logo"></div>
        </b-col>
      </b-row>
    </b-container>
    <div class="container mt-4">
      <div class="wrapper">
        <div v-if="error" class="error">{{ error.message }}</div>
          <h1 class="mb-3">Register with Unihero</h1>
        <form @submit.prevent="pressed">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="email" class="form-control"
                  id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
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
// import navBar from '@/components/myNavBar.vue';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  components: {
    // navBar,
  },
  methods: {
    async pressed() {
      try {
        const user = await firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        alert('Your account has been created');
        this.$router.replace({ name: 'Dashboard' });
      } catch (err) {
        console.log(err);
        alert(`Oops...${err.message}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-grey: #D0D2D3;
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
