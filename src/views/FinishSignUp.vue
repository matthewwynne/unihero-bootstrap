<template>
  <div class="FinishSignUp">
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'FinishSignUp',
  data() {
    return {
      email: '',
    };
  },
  created() {
    this.completeSignUp();
  },
  methods: {
    completeSignUp() {
      // Confirm the link is a sign-in with email link.
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        this.email = window.localStorage.getItem('emailForSignIn');
        if (!this.email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          this.email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        firebase.auth().signInWithEmailLink(this.email, window.location.href)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            console.log(result);
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>

</style>
