import {createRouter, createWebHistory} from "vue-router";
import IndexPage from "./views/Index.vue";

import AboutPage from "./views/AboutPage.vue";
import ServicePage from "./views/ServicePage.vue";
import DealsPage from "./views/DealsPage.vue";
import SignupAndLogin from "./views/SingupAndLogin.vue";
import ContactPage from "./views/ContactPage.vue";
import  DemoPage from "./components/DemoPage.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'Home',
            component: IndexPage
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        },
        {
            path: '/service',
            name: 'Service',
            component: ServicePage
        },
        {
            path: '/all-deals',
            name: 'Deals',
            component: DealsPage
        },
        {
            path: '/contact-us',
            name: 'Contact',
            component: ContactPage
        },
        {
            path: '/login',
            name:'Login',
            component: SignupAndLogin
        },
        {
            path: '/register',
            name:'Register',
            component: SignupAndLogin
        },
        {
            path: '/forgot-password',
            name:'ForgotPassword',
            component: SignupAndLogin
        }

    ]

})


export default router;
