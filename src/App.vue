<template>
  <div id="app">

    <Header @showEvent="showContact($event)"/>
    <Main @showEvent="showContact($event)" :show="visibleContact" />
    <Footer />
    <Backtop v-show="!visibleBtn" />
    <ContactForm v-show="visibleContact" @showEvent="showContact($event)"/>
  </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Backtop from "./components/Backtop.vue";
import ContactForm from "./components/main_comps/ContactForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    Backtop,
    ContactForm
  },
  data() {
    return {
      visibleBtn: false,
      visibleContact: false,
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
          this.visibleBtn = false;
        }
        else
        {
          this.visibleBtn = true;
        }
    },
    showContact(string)
    {
      this.visibleContact = string;
    }
  }
};
</script>



<style lang="scss">
@import "./assets/scss/style.scss";
@import "~bootstrap/scss/bootstrap";
</style>
