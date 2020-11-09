<template>
  <div class="Register">
    <navBar></navBar>
    <div class="container mt-4">
    <div v-if="error" class="error">{{ error.message }}</div>
      <p>Register with UNIhero</p>
    <form @submit.prevent="pressed">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="email" class="form-control"
               id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.</small>
      </div>
<!--      <div class="form-group">-->
<!--        <label for="exampleInputPassword1">Password</label>-->
<!--        <input type="password" v-model="password" class="form-control"-->
<!--               id="exampleInputPassword1">-->
<!--      </div> -->
      <button type="Register" class="btn btn-info">Register</button>
    </form>
  </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import navBar from '@/components/myNavBar.vue';

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this URL
  // must be whitelisted in the Firebase Console.
  url: 'http://localhost:8080/#/finishsignup', // Here we redirect back to this same page.
  handleCodeInApp: true, // This must be true.
};

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
    navBar,
  },
  methods: {
    // async pressed() {
    //   try {
    //     const user = await firebase.auth()
    //       .createUserWithEmailAndPassword(this.email, this.password);
    //     console.log(user);
    //     alert('Your account has been created');
    //     this.$router.replace({ name: 'Dashboard' });
    //   } catch (err) {
    //     console.log(err);
    //     alert(`Oops...${err.message}`);
    //   }
    async pressed() {
      try {
        await firebase.auth()
          .sendSignInLinkToEmail(this.email, actionCodeSettings);
        console.log(this.email);
        alert(`An email was sent to ${this.email}. Please use the link in the email to sign-in.`);
        window.localStorage.setItem('emailForSignIn', this.email);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>

</style>
