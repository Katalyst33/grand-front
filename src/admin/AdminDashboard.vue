<template>
  <div>
    <div>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div class="absolute bg-yellow-500 rounded-md p-3">
              <i
                class="fal fa-users text-white p-1 rounded-lg bg-yellow-500"
              ></i>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">
              Destinations
            </p>
          </dt>
          <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
              {{ total.allDestinations }}
            </p>

            <div
              class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6"
            >
              <div class="text-sm">
                <router-link
                  :to="{ name: 'AllDestinationX' }"
                  href="#"
                  class="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  View all</router-link
                >
              </div>
            </div>
          </dd>
        </div>
        <div
          class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div class="absolute bg-yellow-500 rounded-md p-3">
              <i
                class="fal fa-users text-white p-1 rounded-lg bg-yellow-500"
              ></i>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">
              Users
            </p>
          </dt>
          <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
              {{ total.allUser }}
            </p>

            <div
              class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6"
            >
              <div class="text-sm">
                <router-link
                  :to="{ name: 'AllUsers' }"
                  class="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  View all</router-link
                >
              </div>
            </div>
          </dd>
        </div>
        <div
          class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div class="absolute bg-yellow-500 rounded-md p-3">
              <i
                class="fal fa-users text-white p-1 rounded-lg bg-yellow-500"
              ></i>
            </div>
            <p class="ml-16 text-sm font-medium text-gray-500 truncate">
              Profiles
            </p>
          </dt>
          <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">
              {{ total.allProfiles }}
            </p>

            <div
              class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6"
            ></div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from "@heroicons/vue/outline";
import { defineComponent, ref } from "vue";
import { $axios } from "../http/http.Service";
const total = ref({
  allDestinations: 0,
  allUser: 0,
  allProfiles: 0,
});
const stats = [
  {
    id: 1,
    name: "Destination",
    stat: "71,897",
    icon: UsersIcon,
  },
  {
    id: 2,
    name: "users",
    stat: "58.16%",
    icon: MailOpenIcon,
  },
  {
    id: 3,
    name: "Files",
    stat: "24.57%",
    icon: CursorClickIcon,
  },
];

function getAllDestinations() {
  $axios
    .all([
      $axios.get("/client/destinations"),
      $axios.get("/manager/users"),
      $axios.get("/profile/every-profile"),
    ])
    .then(
      $axios.spread((destinations: any, users: any, profile) => {
        total.value.allDestinations = destinations.data.everyDestination;
        total.value.allUser = users.total;
        total.value.allProfiles = profile.everyProfile;
      })
    );
}

getAllDestinations();
</script>

<style scoped>
.tab {
  @apply bg-white border border-yellow-200 shadow-md rounded-md h-36  font-normal p-4 shadow-sm;
}
</style>
