<template>
  <div class="bg-red-500 p-10 text-white text-2xl text-center">
    <h1>{{ $route.name }}</h1>
    <br />
    <br />
    <!--    <router-link class="underline" :to="{ name: 'Home' }">Home</router-link>-->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DemoComponent",
});
</script>
