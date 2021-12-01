import { RouteRecordRaw } from "vue-router";
const XAddAndUpdate = () => import("./views/XAddAndUpdateDestination.vue");
const AdminLayout = () => import("../layout/AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDestination = () => import("./views/XAllDestination.vue");
const Configuration = () => import("./views/Configuration.vue");
const AllUsers = () => import("./views/AllUsers.vue");
const DealStatus = () => import("./dealsX/DealStatus.vue");
const GalleryFiles = () => import("./views/GalleryFiles.vue");

export default <RouteRecordRaw>{
  path: "/manager",
  component: AdminLayout,
  meta: { requiresAuth: true, role: "staff" },
  children: [
    {
      path: "dashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
      meta: {
        title: "Admin Dashboard",
      },
    },
    {
      path: "all-destination-x",
      name: "AllDestinationX",
      component: AllDestination,
      meta: {
        title: "All Destinations",
      },
    },
    {
      path: "all-users",
      name: "AllUsers",
      component: AllUsers,
      meta: {
        title: "All Users",
      },
    },

    {
      path: "/add-destination",
      name: "AddDestination",
      component: XAddAndUpdate,
      meta: {
        title: "Add Destination",
      },
    },

    {
      path: "/Gallery",
      name: "GalleryFiles",
      component: GalleryFiles,
      meta: {
        title: "Gallery",
      },
    },
    {
      path: "/update-destination/:destinationId",
      name: "UpdateDestination",
      component: XAddAndUpdate,
      meta: {
        title: "Update Destination",
      },
    },
    {
      path: "/deal-status/:destinationId",
      name: "DestinationStatus",
      component: DealStatus,
    },
    {
      path: "Configuration",
      name: "Configuration",
      component: Configuration,
      meta: {
        title: "Configuration",
      },
    },
  ],
};
