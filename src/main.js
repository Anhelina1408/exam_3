import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcase,
  faClockFour,
  faStar,
  faHeart,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBriefcase,
  faClockFour,
  faStar,
  faHeart,
  faAngleRight,
  faAngleLeft,
  faFacebookF,
  faTwitter,
  faGoogle,
  faTelegram,
  faInstagram
);
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
