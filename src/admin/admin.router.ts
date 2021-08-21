import { RouteRecordRaw } from "vue-router";
const AdminLayout = () => import("./AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDeals = () => import("./dealsX/AllDealsX.vue");
const DealsLayout = () => import("./dealsX/DealsLayout.vue");

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
      path: "/deals",

      component: DealsLayout,

      children: [
        {
          path: "/all-deals/manage",
          name: "AllDealsX",
          component: AllDeals,
        },
      ],
    },
  ],
};
