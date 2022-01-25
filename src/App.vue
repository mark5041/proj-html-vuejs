<template>
  <div id="app">

    <Header />
    <Main />
    <Footer />

  </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
};
</script>



<style lang="scss">
@import "./assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
</style>
