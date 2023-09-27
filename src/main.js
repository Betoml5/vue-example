import App from "./App.vue";
import Header from "./components/Header.vue";
import router from "./routes";
import store from "./store";
import { createApp } from "vue";
import "./style.css";

const app = createApp(App);

app.component("Header", Header);

app.use(router);
app.use(store);

app.mount("#app");
