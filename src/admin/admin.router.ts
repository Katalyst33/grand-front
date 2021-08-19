import { RouteRecordRaw } from "vue-router";

const AdminDashboard = () => import("./AdminDashboard.vue");

export default <RouteRecordRaw>{
  path: "/admin",
  component: () => import("./AdminLayout.vue"),
  meta: { requiresAuth: true, role: "staff" },
  children: [
    {
      path: "dashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
    },
  ],
};
