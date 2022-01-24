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
                <div v-for="(element, index) in news" :key="index" class="card">
                    <img :src="getURL(element.image)" alt="">
                    <div class="title-section">
                        <h4>{{element.title}}</h4>
                        <span class="date">{{element.date}}</span>
                        <span>{{element.argument}}</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a class="btn-yellow">go to news</a>
                </div>
            </div>
        </div>
    </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>

export default {
  name: "News",
  components: {
      
  },
  data() {
      return {
          news: [
            {
                image: "blog-post-6-320x202.jpg",
                title: "why you need a SEO agency now",
                date: "November 1st, 2017",
                argument: "ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit",
            },
            {
                image: "related-service-2-320x202.jpg",
                title: "SEO tips for your startup",
                date: "November 1st, 2017",
                argument: "ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit",
            },
            {
                image: "related-service-4-320x202.jpg",
                title: "image optimization for your site",
                date: "November 1st, 2017",
                argument: "ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit",
            },
          ],
      }
  },
  methods: {
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
        background-color: transparent;
        border: none;
        padding: 0;
        text-align: center;
        align-items: center;
        img {
            width: 100%;
        }
        .title-section {
            margin-top: 2em;
            h4 {
                margin-bottom: 0.5em;
                text-transform: capitalize;
                font-weight: 800;
                color: $yellow_orange;
            }
            .date {
                font-size: 0.8em;
            }
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
