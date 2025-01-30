import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fontsource/abril-fatface";
import router from "./config/routes";
import { VLazyImagePlugin } from "v-lazy-image";

const app = createApp(App);

app.use(router);
app.use(VLazyImagePlugin);
app.mount("#app");
