import { RouteRecordRaw } from "vue-router";

const UserDashboard = () => import("./UserDashboard.vue");
const DocumentsUpload = () => import("./DocumentsUpload.vue");
const AllProfiles = () => import("./AllProfiles.vue");
const MyDestinations = () => import("./MyDestinations.vue");
const UpdateProfile = () => import("./UpdateProfileInformation.vue");

export default <RouteRecordRaw>{
  path: "/account",
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

    {
      path: "my-destinations",
      name: "MyDestinations",
      component: MyDestinations,
    },
    {
      path: "all-profiles",
      name: "AllProfiles",
      component: AllProfiles,
    },
    {
      path: "/update-profile/:referenceId",
      name: "UpdateProfile",
      component: UpdateProfile,
      meta: {
        title: "Update Destination",
      },
    },
  ],
};
