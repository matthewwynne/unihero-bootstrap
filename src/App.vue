<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,400;1,700&display=swap');

$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-grey: #E0E6EC;

#app {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-navy-blue;
}

</style>
