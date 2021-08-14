import { createApp } from 'vue'

import App from './App.vue'


import './assets/tailwind.css'
import '@fortawesome/fontawesome-pro/css/all.min.css';
import router from "./router";

import './assets/css/swiper.min.css'

const app = createApp(App)

app.use(router).mount('#app')

