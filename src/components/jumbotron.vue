<template>
  <div>
    <b-jumbotron bg-variant="info" text-variant="white" container-fluid="true">
      <template v-slot:header>UNIHERO</template>
      <template v-slot:lead>Helping you understand whats possible</template>
      <hr class="my-4">
      <p>
        Use our unique scoring metric to better understand which courses work for you
      </p>
      <router-link class="btn btn-light mb-2" to="/getStarted">GET STARTED</router-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'jumbotron',
};
</script>
