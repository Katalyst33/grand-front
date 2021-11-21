<template>
  <div id="appX">
    <div class="bg-gray-300 p-6">
      <div>

        <div class="flex items-center justify-between">
          <ul class="flex space-x-4">
            <li>
              <router-link :to="{ name: 'AllDestinationX' }"
                >All Deals</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'AddDestination' }"
                >Create Deals</router-link
              >
            </li>
          </ul>

          <button @click="clearStore" class="bg-red-500 px-4">Clear</button>
        </div>
      </div>
      <ul class="flex justify-between text-xl uppercase">
        <li>
          <router-link :to="{ name: 'AllUsers' }"> ALL User</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AllDestinationX' }"
            >Destinations</router-link
          >
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
      <router-view class="py-10 h-screen" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logOutUser } from "../store/store";
import LogOutComponent from "../components/LogOutComponent.vue";
import { getOneDestinationX } from "../store/destinationStore";

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
  @apply text-sm;
}

.form-input {
  @apply shadow-sm
  focus:ring-yellow-500 focus:border-yellow-500

  block
  w-full
  sm:text-sm
  border-gray-300
  rounded-sm;
}
</style>
