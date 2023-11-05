import { createRouter, createWebHistory } from "vue-router";
const BrowserStore = vueLocalStorage();
const BrowserSession = BrowserStorage.getSessionStore();

import BrowserStorage from "@trapcode/browser-storage";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import AdminRoutes from "../admin/admin.router";
import { appState } from "../store/store";
import UserRoutes from "../user/user.router";

const IndexPage = () => import("../views/Index.vue");

const AboutPage = () => import("../views/AboutPage.vue");
const ServicePage = () => import("../views/ServicePage.vue");
const ViewDestinationPage = () => import("../Pages/ViewDestinationPage.vue");

const DestinationsPage = () => import("../Pages/AllDestinationsPage.vue");
const SignupAndLogin = () => import("../views/SignupAndLogin.vue");
const ContactPage = () => import("../views/ContactPage.vue");
const TermsCondition = () => import("../views/TermsCondition.vue");
const PrivacyPolicy = () => import("../views/PrivacyPolicy.vue");

const appName = import.meta.env.VITE_COMPANY_NAME;

const NotFound = () => import("../views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../App.vue"),
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
          path: "/all-destinations",
          name: "Destinations",
          component: DestinationsPage,
          meta: {
            title: `${appName}| All Destinations`,
            description: `Find your next destination`,
          },
        },
        {
          path: "/destination/:destinationId",
          name: "ViewDestinationPage",
          component: ViewDestinationPage,
          meta: {
            title: `${appName}| View Destination`,
          },
        },
        {
          path: "/contact-us",
          name: "Contact",
          component: ContactPage,
        },
        {
          path: "/login",
          name: "Login",
          component: SignupAndLogin,
        },
        {
          path: "/terms-condition",
          name: "TermsCondition",
          component: TermsCondition,
        },
        {
          path: "/terms-condition",
          name: "PrivacyPolicy",
          component: PrivacyPolicy,
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
      ],
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
    AdminRoutes,
    UserRoutes,
  ],
  scrollBehavior() {
    const App = document.getElementById("app");
    App!.scrollIntoView();
  },
});

router.beforeEach((to, from, next) => {
  appState.sidebarOpen = false;
  appState.showMobileMenu = false;
  appState.showCart = false;
  appState.popMenuState = false;

  const isAuthenticated = BrowserSession.getBoolean("isAuth");

  const userRole = BrowserStore.get("user_role");
  const authMetas = ["staff", "admin"];
  const authPages = ["Login", "Register", "ForgotPassword"];
  if (isAuthenticated && authPages.includes(<string>to.name)) {
    next({
      name: "Home",
    });
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
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

//
