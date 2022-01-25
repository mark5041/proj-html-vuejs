<template>
    <div class="section">
        <div class="filter">
            <div class="container section-spacing">
                <div class="row">
                    <div class="title-section col-5">
                        <h2>meet the new agency SEO template from tge avada team</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia placeat blanditiis! Quae numquam aliquam deleniti doloribus molestias eum nam sint ipsum iusto</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="#" class="btn-yellow">contact us now</a>
                    </div>
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

.section {
    background-image: url('../../assets/img/CTA-seo-1.jpg');
    background-size: cover;
}

.filter {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.589);
}

.container {
    color: white;
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
    .col-12 {
        display: flex;
        justify-content: center;
    }
}


</style>
