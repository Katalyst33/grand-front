import { RouteRecordRaw } from "vue-router";
import XAddAndUpdate from "./dealsX/XAddAndUpdateDeastination.vue";
const AdminLayout = () => import("./AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDestination = () => import("./dealsX/XAllDestination.vue");
const DealsLayout = () => import("./dealsX/DestinationLayout.vue");
const DealStatus = () => import("./dealsX/DealStatus.vue");

export default <RouteRecordRaw>{
  path: "/manager",
  component: AdminLayout,
  meta: { requiresAuth: true, role: "staff" },
  children: [
    {
      path: "dashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
    },
    {
      path: "/manage",

      component: DealsLayout,

      children: [
        {
          path: "/all-destination-x/",
          name: "AllDestinationX",
          component: AllDestination,
        },

        {
          path: "/add-destination/",
          name: "AddDestination",
          component: XAddAndUpdate,
        },
        {
          path: "/update-destination/:destinationId",
          name: "UpdateDestination",
          component: XAddAndUpdate,
        },
        {
          path: "/deal-status/:destinationId",
          name: "DestinationStatus",
          component: DealStatus,
        },
      ],
    },
  ],
};
