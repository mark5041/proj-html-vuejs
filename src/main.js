import Vue from "vue";
import App from "./App.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
