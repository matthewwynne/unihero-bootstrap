<template>
  <div>
    <b-container class="mt-3">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Odio aenean sed adipiscing diam donec adipiscing.
      Consequat id porta nibh venenatis cras.</p>
    <!-- Actions -->
    <b-progress :value="progress" variant=info animated=animated
    striped="striped" class="mt-3" height="1.5rem" show-progress></b-progress>
      <br>
      <form-collect-marks v-if="currentStepNumber === 1"/>
    <form-collect-location v-if="currentStepNumber === 2"/>
    <form-collect-user-details v-if="currentStepNumber === 3"/>
      <b-button-group class="mt-3">
      <b-btn
        @click="goBack"
        v-if="currentStepNumber > 1"
      >Back
      </b-btn>
      <b-btn
        variant="info"
        @click="goNext"
        class="btn"
      >Next</b-btn>
      </b-button-group>
    </b-container>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import FormCollectMarks from '@/components/formCollectMarks.vue';
import FormCollectLocation from '@/components/formCollectLocation.vue';
import FormCollectUserDetails from '@/components/formCollectUserDetails.vue';

export default {
  name: 'formWizard',
  components: {
    FormCollectUserDetails,
    FormCollectLocation,
    FormCollectMarks,
  },
  data() {
    return {
      currentStepNumber: 1,
      currentStepPercentage: 50,
      length: 4,
      animated: true,
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        subjects: [],
      },
    };
  },
  computed: {
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },
  },
  methods: {
    goBack() {
      this.currentStepNumber -= 1;
    },
    goNext() {
      this.currentStepNumber += 1;
    },
  },
};
</script>
