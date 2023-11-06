import {createApp} from "vue";
import Main from "./Main.vue";
import {DatePicker} from "v-calendar";
import "@popperjs/core";
import "./assets/tailwind.css";
import "@fortawesome/fontawesome-pro/css/all.min.css";
import router from "./router/router";
import "./assets/css/swiper.min.css";
import {createHead} from "@vueuse/head";
import VeeValidatePlugin from "./plugins/VeeValidatePlugin";
import {useDebugPlugin} from 'vue-json-debug/src/plugin';
import 'vue-json-debug/src/debug.css';

const head = createHead();
const app = createApp(Main).component("DatePicker", DatePicker);

app.use(router);
app.use(head);
app.use(VeeValidatePlugin)

useDebugPlugin(app, {
    enableIf: () => true,

    // Register the `<debug>` component globally
    registerDebugComponent: true,
});

app.mount("#app");
