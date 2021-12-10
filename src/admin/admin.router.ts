import { RouteRecordRaw } from "vue-router";
const XAddAndUpdate = () => import("./views/XAddAndUpdateDestination.vue");
const AdminLayout = () => import("../layout/AdminLayout.vue");
const AdminDashboard = () => import("./AdminDashboard.vue");
const AllDestination = () => import("./views/XAllDestination.vue");
const Configuration = () => import("./views/Configuration.vue");
const AllUsers = () => import("./views/AllUsers.vue");
const UserDetails = () => import("./views/UserDetails.vue");
const UserLayout = () => import("./UserLayout.vue");
const profileDetails = () => import("./views/profileDetails.vue");
const XAllProfilesComponent = () =>
  import("./components/XAllProfilesComponent.vue");
const DealStatus = () => import("./dealsX/DealStatus.vue");
const GalleryPage = () => import("./views/GalleryPage.vue");

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
      path: "user-details/:userId",
      name: "UserDetails",
      component: UserDetails,
      meta: {
        title: "User Details",
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
      name: "GalleryPage",
      component: GalleryPage,
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
