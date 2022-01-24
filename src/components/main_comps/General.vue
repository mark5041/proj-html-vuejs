<template>
    <div class="section-gray">
        <div class="container section-spacing">
            <div class="row">
                <div class="title-section col-5">
                    <h2>meet the new agency SEO template from tge avada team</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia placeat blanditiis! Quae numquam aliquam deleniti doloribus molestias eum nam sint ipsum iusto</span>
                </div>
            </div>
            <div class="row">
                <div v-for="(element, index) in services" :key="index" class="card col">
                    <div v-html="element.image" class="card-icons"></div>
                    <h3 v-html="element.title"></h3>
                    <span v-html="element.text"></span>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <img src="../../assets/img/agency-seo-desk-front-1200x570.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>

export default {
  name: "Main",
  components: {
      
  },
  data() {
      return {
          services: [
              {
                  image: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="road" class="svg-inline--fa fa-road " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"></path>
                    </svg>`,
                  title: `Establish Goals`,
                  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga similique facilis consequatur beatae magni esse suscipit`,
              },
              {
                  image: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" class="svg-inline--fa fa-video " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"></path>
                    </svg>`,
                  title: `Work With a Team`,
                  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga similique facilis consequatur beatae magni esse suscipit`,
              },
              {
                  image: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" class="svg-inline--fa fa-building " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z"></path>
                    </svg>`,
                  title: `Get Results`,
                  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga similique facilis consequatur beatae magni esse suscipit`,
              }
          ],
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
            font-size: 1.7em;
        }
    }
}

.row:nth-child(2) {
    margin-bottom: 2em;
    gap: 3em;
    .card {
        border: none;
        padding: 40px 45px;
        text-align: center;
        align-items: center;
        .card-icons {
            width: 40px;
            height: 40px;
            color: $yellow_orange;
        }
        h3 {
            margin: 1em 0 0.5em 0;
            font-weight: 800;
        }
        span {
            line-height: 2em;
            font-size: 1.1em;
        }
    }
}

.row:nth-child(3) {
    .col-12 {
        display: flex;
        justify-content: center;
        img {
            max-width: 100%;
        }
    }
}


</style>
