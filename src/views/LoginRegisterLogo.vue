<template>
  <router-link :to="{ name: 'Home' }">
    <img class="w-auto h-20 mx-auto" src="/png/teal-logo.png" alt="Workflow" />
    <p class="text-center">Go home</p>
  </router-link>
</template>
<script lang="ts">
export default {
  name: "LoginRegisterLogo",
};
</script>
