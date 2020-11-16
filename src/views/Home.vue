<template>
  <div class="home">
    <!-- <myNavBar></myNavBar> -->
    <!-- <carousel class="mb-5"/> -->
    <!-- <b-container fluid="md"><jumbotron/></b-container> -->
    <b-container fluid="lg" class="landing landing-nav mt-4">
      <b-row class="mb-5">
        <b-col xs="12" class="landing-navbar">
          <div class="logo"></div>
          <router-link class="btn btn-light mb-2" to="/login">Login</router-link>
        </b-col>
      </b-row>
    </b-container>
    <br>
    <b-container fluid="lg" class="landing landing-row mb-3 mt-3">
      <b-row class="mb-5">
        <b-col xs="12" lg="6" class="landing-artwork">
          <div class="one img"></div>
        </b-col>
        <b-col xs="12" lg="6" class="landing-content">
          <h2 class="fw-7 mb-5">Let’s explore your unique study options!</h2>
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
      <br>
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
             things study related, events, fashion, technology and even your degree!</p>
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

<style scoped lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$fw-light: 300;

.btn {
  border: 3px solid $color-turquoise;
  border-radius: 5px;
  color: $color-navy-blue;
  padding: 5px 20px;
  text-transform: capitalize;
  font-size: 1.8em;
  font-weight: 600;
  letter-spacing: .5px;
  @media (max-width: 768px) {
    font-size: 1.4em;
  }
  &-light {
    background: white;
  }
  &-solid {
    background: $color-turquoise;
    font-weight: 700;
  }
  &:hover {
    background: $color-turquoise;
    border-color: $color-turquoise;
    color: $color-navy-blue;
  }
  &-center {
    position: relative;
    top: 1em;
    left: 18%;
    @media (max-width: 768px) {
      top: 1em;
      left: 36.5%;
    }
    @media (max-width: 593px) {
      left: 19.5%;
    }
  }
}

.landing {
  overflow: hidden;
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
    .btn {
      display: inline-flex;
      right: 100px;
      position: absolute;
      font-size: 1.3em;
      padding: 0.1em 2em;
      top: 15px;
      @media (max-width: 768px) {
        right: 15px;
        padding: 0.1em 1em;
        top: 10px;
      }
    }
  }
  &-row {
    .row {
      @media (max-width: 768px) {
        margin-bottom: 7rem !important;
      }
    }
  }
  &-artwork {
    .img {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 480px;
    }
    .one {
      background-image: url('~@/assets/images/landing/unihero-landing-artwork-hi-01.svg');
      background-position-y: 55px;
      @media (max-width: 768px) {
        background-position-y: center !important;
      }
    }
    .two {
      background-image: url('~@/assets/images/landing/unihero-landing-artwork-phone-01.svg');
    }
    .three {
      background-image: url('~@/assets/images/landing/unihero-landing-artwork-cost-01.svg');
      background-position-y: 35px;
      @media (max-width: 768px) {
        background-position-y: center !important;
      }
    }
    @media (max-width: 768px) {
      .img {
        height: 320px;
      }
    }
  }
  &-phone {
    position: relative;
    top: -70px;

    @media (max-width: 768px) {
      top: 0;
      margin-bottom: 3rem;
    }
  }

  &-content {
    padding: 0 0 0 5em;
    position: relative;
    @media (max-width: 768px) {
      padding: 0 2em;
    }
    .fw-7 {
      font-weight: 700;
    }
    h3 {
      margin-bottom: 2em;
    }
    h4, h5 {
      margin-bottom: 1em;
    }
    .large {
      font-size: 1.3em;
      font-weight: $fw-light;
      line-height: 1.4;
    }
    .x-large {
      font-size: 1.5em;
      @media (max-width: 768px) {
        font-size: 1.2em;
      }
    }
  }

  .p-lr-5 {
    padding: 0 5em;
    @media (max-width: 768px) {
      padding: 0 2em;
    }
  }

  &-center {
    position: relative;
  }

  .chat {
    position: relative;
    left: 60px;
    &-icon {
      background-image: url('~@/assets/images/unihero-chat-icon.png');
      width: 37px;
      height: 37px;
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-flex;
      position: absolute;
      left: -50px;
      bottom: 15px;
    }
    &-bubble {
      background-color: $color-navy-blue;
      color: white;
      padding: .8em;
      margin-bottom: 15px;
      width: 60%;
      border-radius: 6px;
      border-bottom-left-radius: 0;
      display: inline-flex;
      text-align: left;
      @media (max-width: 768px) {
        width: 80%;
      }
    }
  }
  .wrap-reverse {
    @media (max-width: 768px) {
      flex-wrap: wrap-reverse !important;
    }
  }
}

</style>
