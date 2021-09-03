<template>
  <MenuComponent v-if="false" />
  <GuestNavigator />
  <HomeHeroComponent v-if="$route.name === 'Home'" />
  <ViewDestinationHero v-if="$route.name === 'ViewDestinationPage'" />

  <div class="container mx-auto">
    <router-view v-if="isLoaded" />
  </div>

  <FooterSection />
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import MenuComponent from "@/components/commons/MenuComponent.vue";
import FooterSection from "@/FooterSection.vue";
import GuestNavigator from "@/GuestNavigator.vue";
import HomeHeroComponent from "@/views/HomeHeroComponent.vue";
import { getAllDestinations } from "./store/destinationStore";
import ViewDestinationHero from "./layout/ViewDestinationHero.vue";
const isLoaded = ref(false);
getAllDestinations().then(() => (isLoaded.value = true));
</script>

<style lang="scss">
@import "assets/scss/input-buttons";
@import "assets/scss/Typography";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-yellow-50;
}

.title-2 {
  @apply text-3xl font-extrabold;
}

.regular {
  @apply text-sm;
}

.regular-faded {
  @apply text-sm;
}

.big-font {
  font-family: bigJohn, serif;
}

@font-face {
  font-family: bigJohn;
  src: url("./font/BIG-JOHN.woff");
}
</style>
