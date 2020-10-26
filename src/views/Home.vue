<template>
  <div class="home">
    <myNavBar></myNavBar>
    <carousel class="mb-5"/>
    <b-container fluid="md"><jumbotron/></b-container>
    <b-container class="bv-example-row mb-3">
      <b-row cols="3">
        <b-col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Odio aenean sed adipiscing diam donec adipiscing. Consequat id porta
          nibh venenatis cras.</p></b-col>
        <b-col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Odio aenean sed adipiscing diam donec adipiscing. Consequat id porta
          nibh venenatis cras.</p></b-col>
        <b-col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Odio aenean sed adipiscing diam donec adipiscing. Consequat id porta
          nibh venenatis cras.</p></b-col>
      </b-row>
    </b-container>
    <b-container >
      <br>
      <b-row cols="3">
        <b-col>C 2020 - 2021</b-col>
        <b-col>Site map</b-col>
        <b-col>
          <font-awesome-icon :icon="['fab', 'twitter-square']" size="3x"></font-awesome-icon>
          <br>
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x"></font-awesome-icon>
          <br>
          <font-awesome-icon :icon="['fab', 'instagram-square']" size="3x"></font-awesome-icon>
        </b-col>
      </b-row>
      </b-container>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/carousel.vue';
import jumbotron from '@/components/jumbotron.vue';
import myNavBar from '@/components/myNavBar.vue';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    jumbotron,
    carousel,
    myNavBar,
  },
};
</script>
