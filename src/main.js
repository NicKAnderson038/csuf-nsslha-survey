// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";

import VueQriously from "vue-qriously";
import VueClipboards from "vue-clipboards";

import App from "./App";
import router from "./router";

Vue.use(Vuetify);
Vue.use(VueQriously);
Vue.use(VueClipboards);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
