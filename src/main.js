import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import vClickOutside from "v-click-outside";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(vClickOutside);

const app = new Vue({
  el: "#app",
  router
});
