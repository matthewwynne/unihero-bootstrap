<template>
  <div class="home">
    <!-- <myNavBar></myNavBar> -->
    <!-- <carousel class="mb-5"/> -->
    <!-- <b-container fluid="md"><jumbotron/></b-container> -->
    <b-container fluid="md" class="landing landing-nav mb-5 mt-5">
      <b-row class="mb-5">
        <b-col xs="12" class="landing-navbar">
          <div class="logo"></div>
          <router-link class="btn btn-light mb-2" to="/login">Login</router-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid="md" class="landing landing-row mb-3 mt-5">
      <b-row class="mb-5">
        <b-col xs="12" lg="6" class="landing-artwork">
          <div class="one img"></div>
        </b-col>
        <b-col xs="12" lg="6" class="landing-content">
          <h4 class="fw-7 mb-5">Helping you choose what to study</h4>
          <div class="chat">
            <div class="chat-icon"></div>
            <div class="chat-bubble">Hi, I’m Alex from Unihero!</div>
          </div>
          <div class="chat">
            <div class="chat-bubble">Let me lay out your study options in 3 simple steps!</div>
          </div>
          <div class="chat">
            <div class="chat-bubble">It’s free and will take a minute! :)</div>
          </div>
          <router-link class="btn btn-solid mb-2 btn-center" to="/getStarted">
          Get started
          </router-link>
        </b-col>
      </b-row>
      <b-row class="mt-5 mb-5 wrap-reverse">
        <b-col xs="12" lg="6" class="landing-content">
          <h3 class="fw-7">Ok, so how does Unihero work?</h3>
          <p class="x-large">1: Share your results</p>
          <p class="x-large">2: Indicate your preferences</p>
          <p class="x-large mb-5">3: Explore your options</p>
          <router-link class="btn btn-light mb-2" to="/getStarted">Get started</router-link>
        </b-col>
        <b-col xs="12" lg="6" class="landing-artwork landing-phone">
          <div class="two img"></div>
        </b-col>
      </b-row>
      <b-row class="mt-5 mb-5">
        <b-col xs="12" lg="6" class="landing-artwork">
          <div class="three img mt-3"></div>
        </b-col>
        <b-col xs="12" lg="6" class="landing-content p-lr-5">
          <h3 class="fw-7">How much does it cost?</h3>
          <h4 class="fw-7">It’s free, and theres more!</h4>
          <p class="large mb-5">As part of the Unihero community you will get discounts on all
             things study related, even your degree!</p>
          <router-link class="btn btn-light mb-2" to="">Join our community</router-link>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-container>
      <br>
      <b-row>
        <b-col xs="12" lg="4">C 2020 - 2021</b-col>
        <b-col xs="12" lg="4">Site map</b-col>
        <b-col xs="12" lg="4">
          <font-awesome-icon :icon="['fab', 'twitter-square']" size="3x"></font-awesome-icon>
          <br>
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x"></font-awesome-icon>
          <br>
          <font-awesome-icon :icon="['fab', 'instagram-square']" size="3x"></font-awesome-icon>
        </b-col>
      </b-row>
    </b-container>
    <br> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import carousel from '@/components/carousel.vue';
// import jumbotron from '@/components/jumbotron.vue';
// import myNavBar from '@/components/myNavBar.vue';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  components: {
    // jumbotron,
    // carousel,
    // myNavBar,
  },
};

</script>
