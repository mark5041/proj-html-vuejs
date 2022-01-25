<template>
    <div class="section-spacing">
        <div class="container">
            <div class="row">
                <div class="title-section col-5">
                    <h2>what our clients say</h2>
                </div>
            </div>
            <div class="row">


                <transition-group v-on:before-enter="ForwCardBeforeEnter" v-on:enter="ForwCardEnter" v-on:leave="ForwCardLeave" v-bind:css="false">
                
                <div v-show="visible == index" v-for="(element, index) in reviewers" :key="index" class="card col-7">
                    <img :src="getURL(element.image)" alt="">
                    <div class="title-section">
                        <span>{{element.description}}</span>
                        <p><span>{{element.name}}</span> <span>{{element.surname}}</span>, <span>{{element.role}}</span></p>
                    </div>
                </div>

                </transition-group>


            </div>
            <div class="row">
                <div class="col-12">
                    <div @click="visible = index" v-for="(element, index) in reviewers" :key="index" class="slider-pointer">

                        <transition v-on:before-enter="pointBeforeEnter" v-on:enter="pointEnter" v-on:leave="pointLeave" v-bind:css="false">
                        <div v-show="visible == index" class="selected"></div>
                        </transition>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>

import Velocity from 'velocity-animate'

export default {
  name: "Reviews",
  components: {
      
  },
  data() {
      return {
          direction: true,
          visible: 0,
          reviewers: [
            {
                image: "testimonials-2.jpg",
                name: "luis",
                surname: "desalvo",
                role: "creo tech",
                description: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by expirience",
            },
            {
                image: "testimonials-2.jpg",
                name: "michael",
                surname: "desalvo",
                role: "creo tech",
                description: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by expirience",
            },
            {
                image: "testimonials-2.jpg",
                name: "john",
                surname: "desalvo",
                role: "creo tech",
                description: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by expirience",
            },
          ],
      }
  },
  created() {
      setInterval(() => {
        if(this.visible + 1 != this.reviewers.length)
        {
            this.visible = this.visible + 1;
        }
        else
        {
            this.visible = 0;
        }
      }, 10000);
  },
  methods: {
      
    ForwCardBeforeEnter: 
        function (el) 
        {
            if(this.direction)
            {
                el.style.opacity = 0
                el.style.left = '60%'
            }
            else
            {
                el.style.opacity = 0
                el.style.left = '-15%'
            }
        },
    ForwCardEnter: 
        function (el, done) 
        {
            Velocity(el, { opacity: 1, left: '21%' }, { duration: 400 }, { complete: done })
        },
    ForwCardLeave: 
        function (el, done) 
        {
            if(this.direction)
            {  
                Velocity(el, { left: '-15%', opacity: 0}, { duration: 400 })
            }
            else
            { 
                Velocity(el, { left: '60%', opacity: 0}, { duration: 400 })
            }
            Velocity(el, { display: 'none' }, { complete: done })
        },

    pointBeforeEnter: 
        function (el) 
        {
            el.style.width = '0%'
            el.style.height = '0%'
        },
    pointEnter: 
        function (el, done) 
        {
            Velocity(el, { width: '100%', height: '100%' }, { duration: 150 }, { complete: done })
        },
    pointLeave: 
        function (el, done) 
        {
            Velocity(el, { width: '0%', height: '0%' }, { duration: 150 }, { complete: done })
        },



      getURL(string)
      {
          return require(`../../assets/img/${string}`);
      }
  },
  watch: {
      visible:
        function(newValue, oldValue)
        {
            if(oldValue == newValue)
            {
                this.direction = false;
            }
            else    if(oldValue < newValue)
                    {
                        this.direction = true;
                    }
                    else
                    {
                        this.direction = false;
                    }
        }
  }
};
</script>



<style lang="scss" scoped>
@import "../../assets/scss/style.scss";

.container {
    padding-bottom: 0;
}

.row:nth-child(1) {
    justify-content: center;
    .title-section {
        margin-bottom: 60px;
        text-align: center;
        h2 {
            margin-bottom: 0.5em;
            text-transform: capitalize;
            font-weight: 800;
            font-size: 2.5em;
        }
    }
}

.row:nth-child(2) {
    height: 100%;
    gap: 2em;
    position: relative;
    .card {
        position: absolute;
        background-color: transparent;
        border: none;
        padding: 0;
        left: 21%;
        text-align: center;
        align-items: center;
        img {
            border-radius: 50%;
        }
        .title-section {
            margin-top: 2em;
            &>span {
                font-style: oblique;
            }
            p {
                margin-top: 2em;
            }
            span {   
                font-size: 1.2em;
            }
            p>span:nth-child(1),p>span:nth-child(2) {
                text-transform: capitalize;
                font-weight: 800;
            }
            p>span:nth-child(3) {
                text-transform: uppercase;
            }
        }
    }
}

.row:nth-child(3) {
    margin-top: 27em;
    .col-12 {
        display: flex;
        justify-content: center;
        gap: 10px;
        .slider-pointer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15px;
            height: 15px;
            border: 0.5px solid black;
            border-radius: 50%;
            .selected {
                width: 100%;
                height: 100%;
                background-color: black;
                border-radius: 50%;
            }
        }
    }
}

.quadrato {
    height: 50px;
    width: 50px;
    border: 1px solid black;
}


</style>
