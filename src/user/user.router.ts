import { RouteRecordRaw } from "vue-router";

const UserDashboard = () => import("./UserDashboard.vue");

export default <RouteRecordRaw>{
  path: "/user",
  component: () => import("../layout/UserLayout.vue"),
  children: [
    {
      path: "dashboard",
      name: "UserDashboard",
      component: UserDashboard,
    },
  ],
};
