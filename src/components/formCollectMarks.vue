<template>
  <div class="formCollectMarks">
  <b-container>
    <form>
      <div class="form-row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name">
        </div>
      </div>
    </form>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'formCollectMarks',
  data() {
    return {
      items: [
        { text: 'Higher Grade' },
        { text: 'Literacy' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
