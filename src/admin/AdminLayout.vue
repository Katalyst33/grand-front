<template>
  <div class="bg-gray-300 p-6">
    <ul class="flex justify-between text-xl uppercase">
      <li>User</li>
      <li>
        <router-link :to="{ name: 'AllDealsX' }">Deals</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'UserDashboard' }">
          UserDashboard</router-link
        >
      </li>
    </ul>
    <LogOutComponent />
  </div>

  <div class="container mx-auto">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logOutUser } from "../store/store";
import LogOutComponent from "../components/LogOutComponent.vue";

export default defineComponent({
  name: "AdminLayout",
  components: { LogOutComponent },
  setup() {
    return { logOutUser };
  },
});
</script>

<style scoped></style>
