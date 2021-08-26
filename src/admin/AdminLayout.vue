<template>
  <div id="appX">
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

<style>
#appX {
  @apply bg-yellow-50;
}

.form-label {
  @apply text-lg;
}

.form-input {
  @apply shadow-sm
  focus:ring-indigo-500 focus:border-indigo-500
  block
  w-full
  sm:text-sm
  border-gray-300
  rounded-md;
}

.tileTab {
  @apply bg-white py-10 px-4 rounded-md shadow border;
}
</style>
