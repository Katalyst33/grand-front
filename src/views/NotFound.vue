<template>
  <div class="">
    <div class="">
      <div class="flex h-screen justify-center items-center">
        <div>
          <img src="/hero/404-not-found.png" alt="404 not found" />
          <div class="text-center text-gray-600">
            <h1 class="lg:text-3xl">
              Its seem you have missed your Destination
            </h1>
            <h2>Page not found</h2>
            <div class="my-8">
              <router-link
                class="primary-button-regular"
                :to="{ name: 'Home' }"
              >
                Go to Home
              </router-link>
              <router-link
                class="ml-4 underline decoration-4 decoration-yellow-500"
                :to="{ name: 'Destinations' }"
                >Go To All destination <i class="fad fa-arrow-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DemoComponent from "./DemoComponent.vue";
import FooterSection from "../FooterSection.vue";

export default defineComponent({
  name: "ComponentName",
  components: { FooterSection, DemoComponent },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.turn-1 {
  @apply text-yellow-500;
  /*float: left;*/

  transform: rotate(0deg);
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.turn-2 {
  /*float: left;*/
}

@keyframes example {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
