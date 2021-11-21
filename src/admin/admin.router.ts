import { RouteRecordRaw } from "vue-router";
import XAddAndUpdate from "./dealsX/XAddAndUpdateDestination.vue";
const AdminLayout = () => import("./AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDestination = () => import("./views/XAllDestination.vue");
const AllUsers = () => import("./views/AllUsers.vue");
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
      path: "/all-destination-x/",
      name: "AllDestinationX",
      component: AllDestination,
    },
    {
      path: "/all-users/",
      name: "AllUsers",
      component: AllUsers,
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
};
