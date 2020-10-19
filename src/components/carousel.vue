<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0 0 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    ><b-carousel-slide
      img-src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
    ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://images.unsplash.com/photo-1518548235008-15c2e3a4fdd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
};
</script>

<style scoped>

</style>
