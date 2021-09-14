<template>
  <div>
    <div>
      <div class="bg-yellow-50 text-white">
        <ul class="flex justify-between py-4 text-gray-500 px-10">
          <li>
            <router-link :to="{ name: 'UserInformation' }"
              >User Information</router-link
            >
          </li>

          <li>
            <router-link :to="{ name: 'UserDashboard' }">Dashboard</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'DocumentsUpload' }">Uploads</router-link>
          </li>
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>

          <LogOutComponent />
        </ul>
      </div>
    </div>
    <div v-if="isLoaded">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LogOutComponent from "../components/LogOutComponent.vue";
import { getProfile } from "../store/profileStore";
import { appState } from "../store/store";
import { ref } from "vue";

const isLoaded = ref(false);

getProfile().then(() => (isLoaded.value = true));
</script>

<style scoped></style>
