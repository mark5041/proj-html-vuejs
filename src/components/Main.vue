<template>
  <main>
      <General />
      <Services />
  </main>
</template>

// import axios from 'axios'
// import Velocity from 'velocity-animate'

<script>
import General from "./main_comps/General.vue";
import Services from "./main_comps/Services.vue";

export default {
  name: "Main",
  components: {
    General,
    Services,
  },
};
</script>



<style lang="scss" scoped>
@import "../assets/scss/style.scss";

</style>
