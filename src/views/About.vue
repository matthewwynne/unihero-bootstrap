<template>
  <div class="about">
    <myNavBar></myNavBar>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import myNavBar from '@/components/myNavBar.vue';

export default {
  name: 'About',
  data() {
    return {
    };
  },
  components: {
    myNavBar,
  },
};
</script>
