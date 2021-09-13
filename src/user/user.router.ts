import { RouteRecordRaw } from "vue-router";

const UserDashboard = () => import("./UserDashboard.vue");
const DocumentsUpload = () => import("./DocumentsUpload.vue");

export default <RouteRecordRaw>{
  path: "/user",
  component: () => import("../layout/UserLayout.vue"),
  meta: {
    requiresAuth: true,
    role: "user",
  },
  children: [
    {
      path: "dashboard",
      name: "UserDashboard",
      component: UserDashboard,
    },
    {
      path: "documents-upload",
      name: "DocumentsUpload",
      component: DocumentsUpload,
    },
  ],
};
