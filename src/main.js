import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/plugins/vuetify";
import "@/css/tailwind.base.css";
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCOR1zNT57F3dS3ikRLTMFOOptrEa0wMPM",
  },
});
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
