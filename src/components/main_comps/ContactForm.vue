<template>
    <transition v-on:before-enter="SCbeforeEnter" v-on:enter="SCenter" v-on:leave="SCleave" v-bind:css="false">
        <div class="invisble-section">
          <div class="shadow-card">
            
            <form action="">
                <div class="row justify-content-center g-2">
                    <div class="col-lg-6">
                        <div class="input-group mb-3">
                            <input type="text" class="box form-control" placeholder="Full name">
                        </div>
                            
                        <div class="input-group mb-3">
                            <input type="email" class="box form-control" placeholder="Email">
                        </div>
                            
                        <div class="input-group mb-3">
                            <input type="text" class="box form-control" placeholder="Phone number">
                        </div>
                            
                        <div class="input-group">
                            <textarea class="box form-control" aria-label="With textarea" placeholder="Message"></textarea>
                        </div>
                        <div class="col-lg-4 mt-5">
                            <button type="button" class="btn-blue">Send</button>
                        </div>
                    </div>
                </div>

            </form>
            
            
            <a @click="$emit('showEvent', false)" class="close">
                <i class="fas fa-times"></i>
            </a>

          </div>
        </div>
      </transition>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import Velocity from 'velocity-animate'

export default {
  name: "News",
  components: {
      
  },
  data() {
      return {
          
      }
  },
  methods: {
      
    SCbeforeEnter: 
        function (el) 
        {
            el.style.opacity = 0
            el.style.top = '60%'
        },
    SCenter: 
        function (el, done) 
        {
            Velocity(el, { opacity: 1, top: '10%' }, { duration: 300 }, { complete: done })
        },
    SCleave: 
        function (el, done) 
        {
            Velocity(el, { top: '60%', opacity: 0}, { duration: 300 })
            Velocity(el, { display: 'none' }, { complete: done })
        },

      getURL(string)
      {
          return require(`../../assets/img/${string}`);
      }
  },
};
</script>



<style lang="scss" scoped>
@import "../../assets/scss/style.scss";

::-webkit-scrollbar {
    display: none;
}

.invisble-section {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 10%;
    left: 0;
    z-index: 9999;
    .close-div{
        height: 100%;
        width: 20vw;
    }
    .shadow-card {
        position: relative;
        height: 80vh;
        width: 40vw;
        font-size: 90%;
        left: calc(30vw - 12px);
        padding: 60px;
        background: linear-gradient($daisy_bush, $yellow_orange);
        color: white;
        border-radius: 15px;
        overflow: overlay;
        z-index: 100000;

        form > div > div > div {
            margin-top: 2em;
        }

        .box {
            color: white;
            background: transparent;
            border: 0;
            border-bottom: 1px solid white;
            border-radius: 0;
            font-size: 1.3em;
            padding: 20px 0;
        }

        textarea.box {
            height: 120px;
        }

        .box:focus {
            outline: 0;
            box-shadow: none;
        }

        ::placeholder {
            color: white;
        }

        .box:focus::-webkit-input-placeholder {
            font-size: 0.75em;
            position: relative;
            top: -25px; 
            transition: 0.2s;
        }

        .btn-blue {
            background-color: $daisy_bush;
            border: 1px solid $daisy_bush;
            &:hover, &:focus {
                color:  white;
                background-color: $daisy_bush;
            }
        }
        
        .close
        {
            position: absolute;
            top: 1%;
            right: 3.5%;
            font-size: 3.5em;
            color: white;
        }

    }
}


</style>
