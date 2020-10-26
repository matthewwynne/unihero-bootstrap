<template>
  <div class="Login">
    <myNavBar></myNavBar>
    <div class="container mt-4">
      <div v-if="error" class="error">{{ error.message }}</div>
      <p>Login with UNIhero</p>
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
        <button type="Register" class="btn btn-info">Login</button>
      </form>
      <p class="mt-2">You dont have an account? You can
        <router-link class="badge badge-info text-wrap" to="/register">create one</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import myNavBar from '@/components/myNavBar.vue';

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
    myNavBar,
  },
  methods: {
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
  },
};
</script>

<style scoped>

</style>
