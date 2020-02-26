<template>
  <div id="app">
    <NavBar />
    <SettingPopup />
    <router-view />
  </div>
</template>


<script>
import SettingPopup from "./components/SettingPopup.vue";
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
    SettingPopup
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-size: 0.9rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
