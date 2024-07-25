import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoSettings,
  FaSearch,
  MdLogout,
  RiChatVoiceFill,
} from "oh-vue-icons/icons";

const app = createApp(App);

addIcons(CoSettings, FaSearch, MdLogout, RiChatVoiceFill);

app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
