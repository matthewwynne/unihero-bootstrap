<template>
  <!-- <div>
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
  </div> -->
  <b-container fluid="lg" class="pre-nav mt-4">
    <b-row class="mb-5">
      <b-col xs="12" class="pre-navbar">
        <div class="logo"></div>
        <router-link class="btn btn-solid mb-2" to="/getStarted">Start</router-link>
        <router-link class="btn btn-light mb-2" to="/login">Login</router-link>
      </b-col>
    </b-row>
  </b-container>
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

<style lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-grey: #E0E6EC;

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

.pre {
  &-nav {
    @media (max-width: 768px) {
      margin-top: 1rem !important;
    }
    @media (max-width: 593px) {
      margin-bottom: 5rem;
    }
  }
  &-navbar {
    position: relative;
    @media (max-width: 593px) {
      text-align: center;
    }
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
      @media (max-width: 593px) {
        top: 75px;
        width: 130px;
        display: inline;
        font-size: 1.1em;
        right: 50px;
        padding: 0;
      }
      @media (max-width: 320px) {
        right: 25px;
      }
      &-solid {
        right: 275px;
        @media (max-width: 768px) {
          right: 145px;
        }
        @media (max-width: 593px) {
          right: 200px;
        }
        @media (max-width: 320px) {
          right: 165px;
        }
      }
    }
  }
}

</style>
