<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo() {
    return {
      title: 'Unihero - Helping you decide',
      meta: [
        { name: 'description', content: 'Unihero helps you decide on qualifications that suit your location and industry preferences. If you are not sure on a qualification just yet, we\'ll show you whats out there.' },
        { property: 'og:title', content: 'Unihero - Helping you decide' },
        { property: 'og:image', content: 'https://www.unihero.co.za/unihero-hi.svg' },
        { property: 'og:image:secure_url', content: 'https://www.unihero.co.za/unihero-hi.svg' },
        { property: 'og:site_name', content: 'Unihero' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
      ],
    };
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
  position: relative;
  min-height: 100vh;
}
</style>
