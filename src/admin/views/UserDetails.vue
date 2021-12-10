<template>
  <div>
    <div v-if="isLoaded">
      <h1>User Details</h1>
      {{ user.email }}
    </div>

    <XAllProfilesComponent :all-profiles="allProfiles" :is-loaded="isLoaded" />
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import XAllProfilesComponent from "../components/XAllProfilesComponent.vue";
import { getUserDetails } from "../../http/admin.Service";

const route = useRoute();

const { fetch, isLoaded, user, allProfiles } = getUserDetails(
  route.params.userId
);

onMounted(fetch);
</script>
