<template>
  <div class="terms">
    <myNavBar></myNavBar>
    <b-container fluid="lg">
      <b-row class="mb-5">
        <b-col xs="12" class="content">
          <h1 class="mb-5">
            Terms of use</h1>
          <h2 class="mb-3">
            The standard Lorem Ipsum passage, used since the 1500s</h2>
          <p class="mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."</p>
          <h2 class="mb-3">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h2>
          <p class="mb-4">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?"</p>
          <h2 class="mb-3">
            1914 translation by H. Rackham</h2>
          <p class="mb-4">
            "But I must explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the master-builder
            of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone who loves or pursues
            or desires to obtain pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some great pleasure. To take
            a trivial example, which of us ever undertakes laborious physical exercise, except to
            obtain some advantage</p>
        </b-col>
      </b-row>
    </b-container>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myNavBar from '@/components/myNavBar.vue';
import myFooter from '@/components/myFooter.vue';

export default {
  name: 'TermsConditions',
  data() {
    return {
    };
  },
  components: {
    myNavBar,
    myFooter,
  },
};
</script>

<style scoped lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-grey: #E0E6EC;
$fw-bold: 700;

.terms {
  padding-bottom: 8rem;
  @media (max-width: 593px) {
    padding-bottom: 18rem;
  }
  h1 {
    font-weight: $fw-bold;
    font-size: 1.5em;
  }
  h2 {
    font-weight: $fw-bold;
    font-size: 1em;
  }
}

</style>
