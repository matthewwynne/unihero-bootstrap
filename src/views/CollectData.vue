<template>
<div class="CollectData">
  <b-container>
    <form-wizard/>
  </b-container>
</div>
</template>

<script>

import formWizard from '@/components/formWizard.vue';

export default {
  name: 'CollectData',
  components: {
    formWizard,
  },
};
</script>

<style scoped>

</style>
