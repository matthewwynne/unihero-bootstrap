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
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$fw-light: 300;

#app {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-navy-blue;
}

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
    top: 1.5em;
    left: 19%;
    @media (max-width: 768px) {
      top: 1em;
      left: 15%;
    }
  }
}

.landing {
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
    }
    .two {
      background-image: url('~@/assets/images/landing/unihero-landing-artwork-phone-01.svg');
    }
    .three {
      background-image: url('~@/assets/images/landing/unihero-landing-artwork-cost-01.svg');
    }
    @media (max-width: 768px) {
      .img {
        height: 250px;
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
    padding: 0 3em;
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
      font-size: 1.4em;
      font-weight: $fw-light;
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
