import { RouteRecordRaw } from "vue-router";

const AdminDashboard = () => import("./AdminDashboard.vue");





export default <RouteRecordRaw>{
    path: "/admin",
    component: () => import("./AdminDashboard.vue"),
    children: [

        {
            path: 'dashboard',
            name: 'AdminDashboard',
            component: AdminDashboard
        },




    ],


};
