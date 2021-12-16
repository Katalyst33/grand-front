<template>
  <div class="relative w-screen" style="left: calc(-50vw + 50%)">
    <Splide :options="options">
      <SplideSlide
        v-for="(destination, index) in promotedDestination"
        :key="index"
        :data-splide-interval="3000"
        class="group flex flex-col shadow-lg overflow-hidden relative"
      >
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div class="">
            <div class="relative shadow-xl sm:overflow-hidden py-24">
              <div class="absolute inset-0">
                <div
                  class="absolute inset-0 bg-gray-400 mix-blend-multiply"
                ></div>

                <img
                  v-if="destination.images"
                  class="h-full w-full object-cover"
                  :src="destination.images[0].path"
                />
                <img
                  v-else
                  class="h-full w-full object-cover"
                  src="public/hero/destinations/no-destination.jpeg"
                />
              </div>

              <div
                class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
              >
                <h1
                  class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  <span class="block text-white lg:text-7xl big-font">{{
                    destination.title
                  }}</span>
                </h1>
                <p
                  class="mt-6 max-w-lg mx-auto text-center text-xl text-yellow-200 sm:max-w-3xl"
                >
                  {{ destination.text }}
                </p>
                <div
                  class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
                >
                  <router-link
                    :to="{ name: 'Destinations' }"
                    class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-700 bg-white hover:bg-yellow-50 sm:px-8"
                  >
                    View More Destinations
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reactive, ref } from "vue";
import { localStore } from "../../export";

export default {
  name: "BannerSlider",
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = reactive({
      gap: "1rem",
      rewind: true,
      perPage: 1,
      autoplay: 1000,
    });

    return {
      options,
      promotedDestination: localStore.getArray("promotedDestinations"),
    };
  },
};
</script>
<style lang="scss">
@import "../assets/scss/input-buttons";
@import "../assets/scss/Typography";

@import "../../node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "../../node_modules/@glidejs/glide/src/assets/sass/glide.theme";

@font-face {
  font-family: bigJohn;
  src: url("../font/BIG-JOHN.woff");
}
</style>
