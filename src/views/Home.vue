<template>
  <div class="home">
    <div class="dashboard">
      <div class="dashboard__card" @click="onCardSelected" data-id="alphabets">
        <img class="dashboard__card_img" src="../assets/logo.png" />
        <div class="dashboard__card_title">Alphabets</div>
      </div>
      <div class="dashboard__card" @click="onCardSelected" data-id="numbers">
        <img class="dashboard__card_img" src="../assets/logo.png" />
        <div class="dashboard__card_title">Numbers</div>
      </div>
      <div class="dashboard__card" @click="onCardSelected" data-id="birds">
        <img class="dashboard__card_img" src="../assets/logo.png" />
        <div class="dashboard__card_title">Birds</div>
      </div>
      <div class="dashboard__card" @click="onCardSelected" data-id="body-parts">
        <img class="dashboard__card_img" src="../assets/logo.png" />
        <div class="dashboard__card_title">Body Parts</div>
      </div>
      <div class="dashboard__card" @click="onCardSelected" data-id="animals">
        <img class="dashboard__card_img" src="../assets/logo.png" />
        <div class="dashboard__card_title">Animals</div>
      </div>
      <div class="dashboard__card" @click="onCardSelected" data-id="colors">
        <img class="dashboard__card_img" src="../assets/logo.png" />
        <div class="dashboard__card_title">Colors</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: ()=>{
    return {
      selectedView:""
    }
  },
  methods: {
    onCardSelected(evt) {
      const linkId = evt.currentTarget.getAttribute("data-id");
      this.$router.push(`view/${linkId}`);
    },
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style lang="scss">
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;
    &__card {
      min-width: 20rem;
      max-width: 25rem;
      margin: 1rem;
      text-align: center;
      width: 40%;
      box-shadow: 0px 0px 5px 0px #cccccc;
      &_img {
        width: 10rem;
      }
      &_title{
        font-size: 2rem;
        line-height: 2rem;
        padding: 1rem;
      }
    }
  }
  @media screen and (max-width:440px){
    .dashboard {
      &__card {
        margin: 0;
        width: 100%;
      }
    }
    
  }
</style>
