import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fontsource/abril-fatface";
import router from "./config/routes";

const app = createApp(App);

app.use(router);
app.mount("#app");
