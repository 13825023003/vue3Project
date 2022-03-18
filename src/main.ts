import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import naiveui from "./plugins/naiveui";

createApp(App).use(router).use(store).use(naiveui).mount("#app");
