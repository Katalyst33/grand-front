<template>
  <GuestNavigationMenu />
  <div class="container mx-auto h-auto">
    <router-view v-slot="{ Component, route }">
      <transition name="route" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
  <FooterSection />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useWindowScroll } from "@vueuse/core";

import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import FooterSection from "./FooterSection.vue";
import HomeHeroComponent from "./views/HomeHeroComponent.vue";
import GuestNavigationMenu from "./layout/GuestNavigationMenu.vue";
import BannerSlider from "./components/BannerSlider.vue";
import { $axios } from "./http/http.Service";
import { localStore } from "../export";
import { getPromotedDestination } from "./http/client.Service";
import { appState } from "./store/store";
const isLoaded = ref(false);
const route = useRoute();
const { x, y } = useWindowScroll();

getPromotedDestination();
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

.big-john-font {
  font-family: bigJohn, serif;
}

.regular {
  @apply text-sm;
}

.big-font {
  font-family: bigJohn, serif;
}

@font-face {
  font-family: bigJohn;
  src: url("./font/BIG-JOHN.woff");
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
