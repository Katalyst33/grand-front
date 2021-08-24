<template>
  <div>
    <div class="bg-green-500 p-10 text-white">
      <h1>User Dashboard</h1>

      <ul class="flex justify-between py-4">
        <li>Profile</li>
        <li>Item</li>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>

        <LogOutComponent />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logOutUser } from "../store/store";
import LogOutComponent from "../components/LogOutComponent.vue";

export default defineComponent({
  name: "UserDashboard",
  components: { LogOutComponent },
  setup() {
    return { logOutUser };
  },
});
</script>
