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
import { computed, ref, watch } from "vue";
import { useWindowScroll } from "@vueuse/core";
import MenuComponent from "@/components/commons/MenuComponent.vue";
import FooterSection from "@/FooterSection.vue";
import GuestNavigator from "@/GuestNavigator.vue";
import HomeHeroComponent from "@/views/HomeHeroComponent.vue";
import { getAllDestinations } from "./store/destinationStore";
import ViewDestinationHero from "./layout/ViewDestinationHero.vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
const isLoaded = ref(false);
getAllDestinations().then(() => (isLoaded.value = true));

const route = useRoute();
const { x, y } = useWindowScroll();

console.log(x, y);

const hasMeta = computed(() => {
  if (route.meta.title) {
    console.log("has meta");
  } else {
    console.log("mo meta");
  }
});

watch(route, () => console.log(hasMeta.value));

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-yellow-50;
}

.title-2 {
  @apply text-3xl font-medium;
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
