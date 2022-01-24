<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main
  },
};
</script>



<style lang="scss">
@import "./assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
</style>
