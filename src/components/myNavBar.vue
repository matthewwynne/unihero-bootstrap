<template>
  <div>
    <b-navbar toggleable="true" type="dark" variant="info" sticky=sticky>
      <b-navbar-brand href="#">UNIHERO</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="book-fill" font-scale="1.5"></b-icon>
          <b-icon v-else icon="book" font-scale="1.5"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'myNavBar',
  data() {
    return {
      sticky: true,
    };
  },
};
</script>

<style scoped>

</style>
