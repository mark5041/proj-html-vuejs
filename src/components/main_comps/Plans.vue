<template>
    <div class="section" id="plan-section">
        <div class="container section-spacing">
            <div class="row">
                <div class="title-section col-5">
                    <h2>our plans</h2>
                    <span>Send ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
                </div>
            </div>
            <div class="row">
                <div v-for="(element, index) in plans" :key="index" class="card col">
                    <h3>{{element.title}}</h3>
                    <div class="price">
                        <span class="value">$</span>
                        <span class="integer">{{getPrice(element.price, "integer")}}</span>
                        <span class="decimal">{{getPrice(20.99, "decimal")}}</span>
                        <span class="payment">monthly</span>
                    </div>
                    <span v-for="(text, index) in element.addOn" :key="index">{{text}}</span>
                    <span>Unlimited Users</span>
                    <a class="btn-black">start today</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
  name: "Plans",
  components: {
      
  },
  data() {
      return {
          plans: [
              {
                  title: "Standard",
                  price: 19.99,
                  addOn: [
                      "5 Project",
                      "5 GB Storage",
                  ]
              },
              {
                  title: "Premium",
                  price: 29.99,
                  addOn: [
                      "10 Project",
                      "15 GB Storage",
                  ]
              },
              {
                  title: "Professional",
                  price: 39.99,
                  addOn: [
                      "15 Project",
                      "30 GB Storage",
                  ]
              },
              {
                  title: "Extreme",
                  price: 59.99,
                  addOn: [
                      "Unlimited Project",
                      "Unlimited Storage",
                  ]
              },
          ],
      }
  },
  methods: {
      getPrice(float, type)
      {
          float = String(float);
          float = float.split(".");
          if(type == "decimal")
          {
              return float[1];
          }
          else
          {
              return float[0];
          }
      }
  }
};
</script>



<style lang="scss" scoped>
@import "../../assets/scss/style.scss";

.section {
    background-color: $deep_cove;
    background-image: url('../../assets/img/background1.jpg');
    background-size: cover;
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
    margin-bottom: 2em;
    gap: 1em;
    .card {
        border: none;
        padding: 40px 45px;
        text-align: center;
        align-items: center;
        color: black;
        background-color: white;
        .price {
            position: relative;
            font-weight: 900;
            .value {
                position: relative;
                top: -17.5%;
                font-size: 1.7em;
            }
            .integer {
                font-size: 3.5em;
                color: $science_blue;
            }
            .decimal {
                position: relative;
                top: -21%;
                font-size: 1.5em;
                color: $science_blue;
            }
            .payment {
                position: relative;
                left: -15%;
                font-size: 0.9em;
                font-weight: 600;
                font-style: oblique;
                color: $regent_gray
            }
        }
        h3 {
            text-transform: capitalize;
            margin:0.5em 0;
            font-weight: 800;
        }
        span, div span {
            line-height: 2em;
            font-size: 1.1em;
            margin: 1em 0;
        }
        .btn-black {
            margin-top: 2em;
            color: black;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 800;
            padding: 9px 19px;
            border: 1px solid black;
            border-radius: 50px;
            &:hover, &:focus {
                color:  white;
                background-color: $Tulip_Tree_LightVibrant;
                border: 1px solid $Tulip_Tree_LightVibrant;
            }
        }
    }
}


</style>
