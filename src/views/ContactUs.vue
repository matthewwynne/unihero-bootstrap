<template>
  <div class="contact">
    <myNavBar></myNavBar>
    <div class="container mt-4">
      <div class="wrapper mb-5">
        <h1 class="mb-3">Get in touch!</h1>
        <p class="sub-title mt-3 mb-5">We would love to hear from you.</p>
        <form @submit.prevent="pressed">
          <b-row>
            <b-col xs="12" md="6">
              <div class="form-group">
                <label for="exampleInputName1">Name</label>
                <input type="text" v-model="text" class="form-control"
                      id="exampleInputName1" aria-describedby="nameHelp">
              </div>
            </b-col>
            <b-col xs="12" md="6">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" v-model="email" class="form-control"
                      id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
            </b-col>
          </b-row>
          <b-row>
            <div class="radio-selector">
                <div class="form-group">
                  <div class="label-selector">I'm a</div>
                  <div class="form-check form-check-inline mr-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                    id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">Student</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                    id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Institution</label>
                  </div>
                </div>
            </div>
          </b-row>
          <div class="form-group">
            <label for="exampleInputRole1">Message</label>
            <textarea name="message" rows="8" cols="30"></textarea>
          </div>
          <button type="Submit" class="btn btn-info">Submit</button>
        </form>
        <p class="sub-title sub-title-note mt-2 mb-5">** Please note: We do not deal or advise
          on Nsfas funding or applications.
        </p>
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myNavBar from '@/components/myNavBar.vue';
import myFooter from '@/components/myFooter.vue';

export default {
  name: 'ContactUs',
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
$color-light-grey-border: #ced4da;
$fw-bold: 700;

.contact {
  padding-bottom: 8rem;
  @media (max-width: 593px) {
    padding-bottom: 20rem;
  }
  h1 {
    font-size: 2.3rem;
    font-weight: $fw-bold;
    @media (max-width: 593px) {
      font-size: 2rem;
    }
  }
  .sub-title {
    font-size: 1.2rem;
    font-weight: $fw-bold;
    text-align: center;
    @media (max-width: 593px) {
      font-size: 1rem;
      margin-bottom: 1.5rem !important;
      margin-top: 0 !important;
    }
    &-note {
      width: 40%;
      @media (max-width: 768px) {
        width: 65%;
      }
      @media (max-width: 593px) {
        width: 100%;
      }
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    form {
      width: 570px;
      @media (max-width: 593px) {
        width: 100%;
      }
      .form-group {
        margin-bottom: .5rem;
        label {
          display: block;
          font-weight: $fw-bold;
          font-size: .9rem;
          margin-top: .5rem;
          .label-link {
            color: $color-light-grey;
            padding: 0 6px;
          }
        }
        .form-control {
          border-width: 1.5px;
          height: calc(1.5em + 1.55rem + 2px);
        }
        textarea[name=message] {
          border: 1.5px solid $color-light-grey-border;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          width: 100%;
          resize: none;
        }
      }
      .radio-selector {
        width: 100%;
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        .label-selector {
          display: block;
          font-weight: $fw-bold;
          font-size: .9rem;
          margin-top: .5rem;
        }
        input[type="radio"] {
          display: none;
        }
        label {
          display: inline-block;
          text-align: center;
          cursor: pointer;
          border: 1.5px solid $color-light-grey-border;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          padding: .7rem 0;
          height: calc(1.5em + 1.55rem + 2px);
          width: 100%;
        }
        input[type="radio"]:checked+label {
          background-color: $color-turquoise;
        }
        .form-check-inline {
          width: 47.3%;
          margin-right: 0;
          @media (max-width: 593px) {
            width: 45%;
          }
        }
        .mr-3 {
          margin-right: 30px !important;
          @media (max-width: 320px) {
            margin-right: 25px !important;
          }
        }
      }
      .btn {
        background: $color-turquoise;
        border: 3px solid $color-turquoise;
        border-radius: 10px;
        color: $color-navy-blue;
        padding: 10px 20px;
        margin: 30px 0;
        font-size: 1em;
        font-weight: $fw-bold;
        letter-spacing: .5px;
        width: 100%;
      }
    }
    .bold {
      font-weight: $fw-bold;
      .badge-info {
        color: $color-turquoise;
        background-color:white !important;
        font-size: inherit;
        padding: 0;
      }
    }
  }
}

</style>
