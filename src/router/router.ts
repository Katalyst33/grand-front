import { createRouter, createWebHistory } from "vue-router";
const BrowserStore = vueLocalStorage();

import AdminRoutes from "../admin/admin.router";
import UserRoutes from "../user/user.router";

const IndexPage = () => import("../views/Index.vue");

const AboutPage = () => import("../views/AboutPage.vue");
const ServicePage = () => import("../views/ServicePage.vue");
const ViewDestinationPage = () => import("../Pages/ViewDestinationPage.vue");

const DestinationsPage = () => import("../Pages/AllDestinationsPage.vue");
const SignupAndLogin = () => import("../views/SingupAndLogin.vue");
const ContactPage = () => import("../views/ContactPage.vue");
import DemoPage from "../components/DemoPage.vue";
import { appState, closeMenu } from "../store/store";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";

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
            description: `vieeee`,
          },
        },
        {
          path: "/contact-us",
          name: "Contact",
          component: ContactPage,
        },
      ],
    },

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
    AdminRoutes,
    UserRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  appState.sidebarOpen = false;
  appState.showMobileMenu = false;
  appState.showCart = false;

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
