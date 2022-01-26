<template>
    <div class="section-gray section-spacing">
        <div class="container">
            <div class="row">
                <div class="title-section col-5">
                    <h2>meet the new agency SEO template from tge avada team</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia placeat blanditiis! Quae numquam aliquam deleniti doloribus molestias eum nam sint ipsum iusto</span>
                </div>
            </div>
            <div class="row">
                <div v-tilt="{reverse: true, max: 20, speed: 1000, perspective: 1200}" v-for="(element, index) in works[1].image" :key="index" class="card">
                    <img :src="getURL(element)" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a class="btn-yellow">view our works</a>
                </div>
            </div>
        </div>
    </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>

export default {
  name: "Works",
  components: {
      
  },
  data() {
      return {
          works: [
              {
                  size: "small",
                  image: [
                      "case-study-gallery-1-1-200x150.jpg",
                      "case-study-gallery-2-200x150.jpg",
                      "case-study-gallery-3-1-200x150.jpg",
                      "case-study-gallery-4-1-200x150.jpg",
                      "case-study-gallery-5-1-200x150.jpg",
                      "case-study-gallery-6-1-200x150.jpg"
                  ],
              },
              {
                  size: "medium",
                  image: [
                      "case-study-gallery-1-1-400x300.jpg",
                      "case-study-gallery-2-400x300.jpg",
                      "case-study-gallery-3-1-400x300.jpg",
                      "case-study-gallery-4-1-400x300.jpg",
                      "case-study-gallery-5-1-400x300.jpg",
                      "case-study-gallery-6-1-400x300.jpg"
                  ],
              },
              {
                  size: "large",
                  image: [
                      "case-study-gallery-1-1-800x600.jpg",
                      "case-study-gallery-2-1-800x600.jpg",
                      "case-study-gallery-3-1-800x600.jpg",
                      "case-study-gallery-4-1-800x600.jpg",
                      "case-study-gallery-5-1-800x600.jpg",
                      "case-study-gallery-6-1-800x600.jpg"
                  ],
              },
          ],
      }
  },
  methods: {
//       let posX = ~((w/2-coorX)*(80/w)) /10;
//   let posY = ~~((h/2-coorY)*(80/h)) /10;


      getURL(string)
      {
          return require(`../../assets/img/${string}`);
      }
  },
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
            font-size: 1.7em;
        }
    }
}

.row:nth-child(2) {
    margin-bottom: 2em;
    gap: 2em;
    .card {
        flex-basis: calc(100% / 3 - 1.4em);
        border: none;
        padding: 0;
        text-align: center;
        align-items: center;
        box-shadow: 0 0 10px 0px;
        img {
            width: 100%;
        }
    }
}

.row:nth-child(3) {
    margin-top: 5em;
    .col-12 {
        display: flex;
        justify-content: center;
        img {
            max-width: 100%;
        }
    }
}


</style>