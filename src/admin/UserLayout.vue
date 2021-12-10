<template>
  <div>
    <div v-if="isLoaded">
      <h1>User Details</h1>
      {{ user.email }}

      <div class="my-4" v-for="(item, index) in allProfiles">
        {{ item }}
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import XAllProfilesComponent from "../components/XAllProfilesComponent.vue";
import { getUserDetails } from "../http/admin.Service";

const route = useRoute();

const { fetch, isLoaded, user, allProfiles } = getUserDetails(
  route.params.userId
);

onMounted(fetch);
</script>
