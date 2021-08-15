import { createApp } from 'vue'

import Main from './Main.vue'


import './assets/tailwind.css'
import '@fortawesome/fontawesome-pro/css/all.min.css';
import router from "./router";

import './assets/css/swiper.min.css'

const app = createApp(Main)

app.use(router).mount('#app')

