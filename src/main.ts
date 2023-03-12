import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import pinia from "@/pinia";
import "@/styles/_base.scss";

createApp(App).use(store).use(router).use(pinia).mount("#app");
