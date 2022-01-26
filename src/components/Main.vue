<template>
  <main>
      <General />
      <Services />
      <Works />
      <Plans />
      <News />
      <Reviews />
      <Clients />
      <Contact @show="changeVis($event)" />
  </main>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import General from "./main_comps/General.vue";
import Services from "./main_comps/Services.vue";
import Works from "./main_comps/Works.vue";
import Plans from "./main_comps/Plans.vue";
import News from "./main_comps/News.vue";
import Reviews from "./main_comps/Reviews.vue";
import Clients from "./main_comps/Clients.vue";
import Contact from "./main_comps/Contact.vue";

export default {
  name: "Main",
  components: {
    General,
    Services,
    Works,
    Plans,
    News,
    Reviews,
    Clients,
    Contact,
  },
  props: {
    show: Boolean
  },
  data() {
    return {
      visible: null,
    }
  },
  methods: {
    changeVis(string)
    {
      this.$emit('showEvent', string);
    }
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/style.scss";

</style>
