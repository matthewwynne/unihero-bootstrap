<template>
  <div class="GetStarted">
    <b-container>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'GetStarted',
  components: {
  },
  methods: {
    landbot() {
      this.$loadScript('https://static.landbot.io/landbot-3/landbot-3.0.0.js')
        .then(() => {
          // Script is loaded, do something
          const bot = document.createElement('script');
          bot.innerHTML = 'var myLandbot = new Landbot.Fullpage'
            // + 'container: \'#myLandbot\','
            + '({ configUrl: \'https://chats.landbot.io/v3/H-727482-ANXZ2Q61U8GNRRKX/index.json\''
            + ',});';
          bot.async = true;
          document.body.appendChild(bot);
        })
        .catch(() => {
          // Failed to fetch script
          console.log('failed to load script');
        });
    },
  },
  mounted() {
    this.landbot();
  },
};
</script>

<style scoped>

</style>
