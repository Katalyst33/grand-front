<template>
  <GuestNavigationMenu />

  <BannerSlider v-if="$route.name === 'Home'" />

  <ViewDestinationHero v-if="$route.name === 'ViewDestinationPage'" />

  <div class="container mx-auto">
    <router-view />
  </div>
  <FooterSection />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useWindowScroll } from "@vueuse/core";
import { getAllDestinations } from "./store/destinationStore";
import ViewDestinationHero from "./layout/ViewDestinationHero.vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import FooterSection from "./FooterSection.vue";
import HomeHeroComponent from "./views/HomeHeroComponent.vue";
import GuestNavigationMenu from "./layout/GuestNavigationMenu.vue";
import BannerSlider from "./BannerSlider.vue";

const isLoaded = ref(false);
const route = useRoute();
const { x, y } = useWindowScroll();

getAllDestinations();

useHead({
  // Can be static or computed
  title: computed(() => {
    if (route.meta.title) {
      return route.meta.title as string;
    } else {
      // return `Grand--Eagle | Destinations`;
      return `${import.meta.env.VITE_COMPANY_NAME} | Destinations`;
    }
  }),
  meta: [
    {
      name: `description`,
      content: computed(() => route.meta.description as string),
    },
  ],
});
</script>

<style lang="scss">
@import "assets/scss/input-buttons";
@import "assets/scss/Typography";

@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-yellow-50;
}

.title-2 {
  font-family: bigJohn, serif;
  @apply text-2xl font-normal text-gray-700;
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
