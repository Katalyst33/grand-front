<template>
  <div class="mx-10 h-screen">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="tab">
        <h1 class="text-2xl">Destinations {{ total.allDestinations }}</h1>
      </div>
      <div class="tab">
        <h1>Users {{ total.allUser }}</h1>
        <h1>Profiles {{ total.allProfiles }}</h1>
      </div>
      <div class="tab">Files</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { $axios } from "../http/http.Service";
const total = ref({
  allDestinations: 0,
  allUser: 0,
  allProfiles: 0,
});

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
