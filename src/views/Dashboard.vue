<template>
  <div class="Dashboard">
    <br>
<!--    <h1>Well Done {{ person['fields']['name'] }}</h1>-->
    <div class ="container">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in items" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ item['fields']['University'] }}</h5>
              <h5 class="card-title">{{ item['fields']['Faculties'] }}</h5>
              <h5 class="card-title">{{ item['fields']['Qualification'] }}</h5>
              <h5 class="card-title">NBT required? {{ item['fields']['NBT required?'] }}</h5>
              <p>
                {{ item['fields']['Requirements Comments'] }}
              </p>
              <a v-bind:href="item['fields']['Prospectus']"
                 class="btn btn-primary">Prospectus</a>
              <a v-bind:href="item['fields']['Application']"
                 class="btn btn-primary">Application</a>
              <hr class="my-4">
              <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success"
                     role="progressbar" style="width: 50%" aria-valuenow="50"
                     aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      items: [],
      person: [],
    };
  },
  mounted() {
    this.loadItems();
    this.loadPerson();
  },
  methods: {
    loadItems() {
      // Init variables
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      this.items = [];
      axios.get(
        `https://api.airtable.com/v0/${appId}/university`,
        {
          headers: { Authorization: `Bearer ${appKey}` },
        },
      ).then((response) => {
        this.items = response.data.records;
      }).catch((error) => {
        console.log(error);
      });
    },
    loadPerson() {
      // Init variables
      const appId = 'appStZ5HUKWw7DEVw';
      const appKey = 'keyA8c9MG96tCi522';
      this.person = [];
      axios.get(
        `https://api.airtable.com/v0/${appId}/person`,
        {
          headers: { Authorization: `Bearer ${appKey}` },
        },
      ).then((response) => {
        this.person = response.data.records;
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
<style scoped>

</style>
