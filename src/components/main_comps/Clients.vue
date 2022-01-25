<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div v-for="(element, index) in clients" :key="index" class="card">
                    <img :src="getURL(element)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>

export default {
  name: "Clients",
  components: {
      
  },
  data() {
      return {
          clients: [
              "clients_partner_5-200x202.png",
              "clients_partner_6-200x202.png",
              "clients_partner_1-200x202.png",
              "clients_partner_2-200x202.png"
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

.section {
    background-color: white;
}

.container {
    border-top: 1px solid $pale_slate;
    padding: 0;
}

.row {
    justify-content: space-between;
    padding: 50px 0;
    gap: 2em;
    .card {
        flex-basis: calc(100% / 8 - 1.4em);
        border: none;
        padding: 0;
        text-align: center;
        img {
            width: 100%;
        }
    }
}


</style>