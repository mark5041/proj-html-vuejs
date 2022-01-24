<template>
  <main>
      <General />
      <Services />
      <Works />
      <Plans />
      <News />
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

export default {
  name: "Main",
  components: {
    General,
    Services,
    Works,
    Plans,
    News,
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/style.scss";

</style>
