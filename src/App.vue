<template>
  <div id="app">
    <Header />
  </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>



<style lang="scss">
@import "./assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
</style>
