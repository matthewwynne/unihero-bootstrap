<template>
  <footer class="page-footer">
    <b-container class="footer pt-3 pb-4">
      <br>
      <b-row>
        <b-col xs="12" lg="5" md="4">
          <h5 class="mb-4">Legal</h5>
          <router-link class="link-btn" to="/terms-of-service">
            Terms of Service</router-link>
        </b-col>
        <b-col xs="12" lg="5" md="4">
          <h5 class="mb-4">Help</h5>
          <router-link class="link-btn" to="/contact">Contact us</router-link>
        </b-col>
        <b-col xs="12" lg="2" md="3">
          <h5 class="mb-3">Socials</h5>
          <a class="link-social fab-instagram mr-2" href="https://www.instagram.com/unihero.co.za/"></a>
          <a class="link-social fab-facebook mr-2" href="https://www.facebook.com/Unihero-104884521343951/"></a>
          <a class="link-social fab-linkedin" href="https://www.linkedin.com/company/unihero/"></a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'myFooter',
};
</script>

<style lang="scss">
$color-navy-blue: #0B0754;
$color-turquoise: #00F7C1;
$color-light-grey: #E0E6EC;

.page-footer {
  background-color: $color-light-grey;
  position: absolute;
  bottom: -18px;
  width: 100%;
  .footer{
    .col-md-4 {
      @media (max-width: 768px) {
        margin-bottom: 3em;
      }
    }
    h5 {
      font-weight: 600;
      @media (max-width: 768px) {
        margin-bottom: .5rem !important;
      }
    }
    .link-btn {
      color: $color-navy-blue;
      font-weight: 300;
    }
    .link-social {
      display: inline-block;
      width: 36px;
      height: 36px;
    }
    .mr-2 {
      margin-right: .7em !important;
    }
    .fab-instagram {
      background-image: url('~@/assets/images/icons/instagram-icon.svg');
    }
    .fab-facebook {
      background-image: url('~@/assets/images/icons/facebook-icon.svg');
    }
    .fab-linkedin {
      background-image: url('~@/assets/images/icons/linkedin-icon.svg');
    }
  }
}

</style>
