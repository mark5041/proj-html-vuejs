<template>
  <div id="app">

    <Header />
    <Main />
    <Footer />
    
    <Backtop v-show="!visible" />
  </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Backtop from "./components/Backtop.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    Backtop
  },
  data() {
    return {
      visible: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollTop);
  },
  methods: {
    scrollTop() 
    {
        if(window.pageYOffset > 700)
        {
          this.visible = false;
        }
        else
        {
          this.visible = true;
        }
    }
  }
};
</script>



<style lang="scss">
@import "./assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
</style>
