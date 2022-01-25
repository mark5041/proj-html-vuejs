<template>
    <transition v-on:before-enter="BeforeEnter" v-on:enter="Enter" v-on:leave="Leave" v-bind:css="false">
    <a href="#">
        <i class="fas fa-chevron-up"></i>
    </a>
    </transition>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Velocity from 'velocity-animate'

export default {
  name: "Backtop",
  components: {
    
  },
  methods: {
    BeforeEnter: 
        function (el) 
        {
            el.style.bottom = '-10%'
            
        },
    Enter: 
        function (el, done) 
        {
            Velocity(el, { bottom: '0%' }, { duration: 300 }, { complete: done })
        },
    Leave: 
        function (el, done) 
        {
            Velocity(el, { bottom: '-10%' }, { complete: done })
        },
  }
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/style.scss";

a {
    position: fixed;
    bottom: 0;
    right: 50px;
    padding: 10px 20px;
    background-color: $S_Muted;
    border: 1px solid $S_Muted;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    i {
        color: white;
    }
}

</style>
