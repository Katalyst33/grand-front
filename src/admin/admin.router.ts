import { RouteRecordRaw } from "vue-router";
import AddAndUpdate from "./dealsX/AddAndUpdateDealX.vue";
const AdminLayout = () => import("./AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDealsX = () => import("./dealsX/AllDealsX.vue");
const DealsLayout = () => import("./dealsX/DealsLayout.vue");
const ViewDealPageX = () => import("./dealsX/ViewDealPageX.vue");
const AddAndUpdateDealX = () => import("./dealsX/AddAndUpdateDealX.vue");
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
          path: "/all-dealsx/",
          name: "AllDealsX",
          component: AllDealsX,
        },

        {
          path: "/add-deal/",
          name: "AddDeal",
          component: AddAndUpdateDealX,
        },
        {
          path: "/update-deal/:dealId",
          name: "UpdateDeal",
          component: AddAndUpdateDealX,
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
