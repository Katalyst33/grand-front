import { RouteRecordRaw } from "vue-router";
import XAddAndUpdate from "./dealsX/XAddAndUpdateDeastination.vue";
const AdminLayout = () => import("./AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDestination = () => import("./dealsX/XAllDestination.vue");
const DealsLayout = () => import("./dealsX/DestinationLayout.vue");
const DealStatus = () => import("./dealsX/DealStatus.vue");

export default <RouteRecordRaw>{
  path: "/admin",
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
          path: "/add-deal/",
          name: "AddDeal",
          component: XAddAndUpdate,
        },
        {
          path: "/update-deal/:dealId",
          name: "UpdateDeal",
          component: XAddAndUpdate,
        },
        {
          path: "/deal-status/:dealId",
          name: "DealStatus",
          component: DealStatus,
        },
      ],
    },
  ],
};
