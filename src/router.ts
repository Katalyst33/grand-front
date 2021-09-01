import { createRouter, createWebHistory } from "vue-router";
const BrowserStore = vueLocalStorage();

import IndexPage from "./views/Index.vue";

import AdminRoutes from "./admin/admin.router";
import UserRoutes from "./user/user.router";

const AboutPage = () => import("./views/AboutPage.vue");
const ServicePage = () => import("./views/ServicePage.vue");
const ViewDealPage = () => import("./Pages/ViewDealPage.vue");
// const componentName = () => import("./componentName.vue");
// const componentName = () => import("./componentName.vue");

import DealsPage from "./Pages/AllDestinationsPage.vue";
import SignupAndLogin from "./views/SingupAndLogin.vue";
import ContactPage from "./views/ContactPage.vue";
import DemoPage from "./components/DemoPage.vue";
import { appState, closeMenu } from "./store/store";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";

// const componentName = () => import("./componentName.vue");
const NotFound = () => import("./views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./App.vue"),
      children: [
        {
          path: "/",
          name: "Home",
          component: IndexPage,
        },
        {
          path: "/about",
          name: "About",
          component: AboutPage,
        },
        {
          path: "/service",
          name: "Service",
          component: ServicePage,
        },
        {
          path: "/all-deals",
          name: "Deals",
          component: DealsPage,
        },
        {
          path: "/deal/:dealId",
          name: "ViewDealPage",
          component: ViewDealPage,
        },
        {
          path: "/contact-us",
          name: "Contact",
          component: ContactPage,
        },
      ],
    },
    AdminRoutes,
    UserRoutes,
    {
      path: "/login",
      name: "Login",
      component: SignupAndLogin,
    },
    {
      path: "/register",
      name: "Register",
      component: SignupAndLogin,
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: SignupAndLogin,
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      meta: {
        title: "NotFound",
        description: ` Get in touch with us`,
        img: "/img/hero/contact.jpg",
        parent: {
          name: "Home",
          title: "Home",
        },
      },
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = BrowserStore.has("ge_jwt");
  const userRole = BrowserStore.get("user_role");
  const authMetas = ["staff", "admin"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        name: "Login",
      });
    } else if (
      to.meta.role === "staff" &&
      isAuthenticated &&
      !authMetas.includes(userRole)
    ) {
      next({
        name: "UserDashboard",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
