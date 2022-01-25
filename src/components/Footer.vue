<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="title-section col-8">
                    <img class="spacing" src="../assets/img/logo_seo_1x.png" alt="">
                    <ul class="navigation-list">
                        <li class="nav-item">
                            <a class="nav-link">home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">who we are</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">what we do</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">what we work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-2">careers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">news</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                get in tuch now
                            </a>
                        </li>
                    </ul>
                    <p><span class="divider">©Copyright 2012-2020</span><span class="ps-3">Avada Theme by </span><span class="bolder-text divider">ThemeFusion</span><span class="divider ps-3">All Rights Reserved</span><span class="ps-3">Powered by </span><span class="bolder-text">WordPress</span></p>
                    <div class="icon-container">
                        <a><i class="fab fa-google"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
                        <a><i class="fab fa-youtube"></i></a>
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
  name: "Footer",
  components: {
      
  },
  data() {
      return {
          
      }
  },
  methods: {
      getURL(string)
      {
          return require(`../assets/img/${string}`);
      }
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/style.scss";


.container {
    color: black;
}

.spacing {
    padding: 60px 0;
}

.divider {
    padding-right: 12px;
    border-right: 1px solid gray;
}

.bolder-text {
    font-weight: 800;
}

.row:nth-child(1) {
    justify-content: center;
    .title-section {        
        text-align: center;
        .navigation-list {
            list-style: none;
            margin-bottom: 60px;
            li {
                display: inline-block;
                a {
                    padding: 8px 20px;
                    text-transform: capitalize;
                    color: black;
                    &:hover, &:focus {
                        color: $di_serria;
                    }
                }
            }
        }
        p {
            margin-bottom: 3em;
        }
        .icon-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1em;
            font-size: 2em;
            a {
                padding: 15px;
                color: $regent_gray;
            }
        }
    }
}




</style>
