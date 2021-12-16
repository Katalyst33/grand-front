<template>
  <div>
    <Splide :options="options">
      <SplideSlide
        v-for="(destination, index) in singleDestinationStore.destination
          .images"
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
                  v-if="singleDestinationStore.destination.images.length > 0"
                  class="h-full w-full object-cover"
                  :src="destination.path"
                />
                <h1 v-else>no images</h1>
              </div>

              <div
                class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
              >
                <h1
                  class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  <span class="block text-white lg:text-7xl big-font">{{
                    singleDestinationStore.destination.title
                  }}</span>
                </h1>
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
import { reactive } from "vue";
import { singleDestinationStore } from "../store/destinationStore";

export default {
  name: "ViewDestinationSlider",
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    imageData: [],
  },
  setup(props) {
    const options = reactive({
      gap: "1rem",
      rewind: true,
      perPage: 1,
      autoplay: 1000,
    });

    return { options, props, singleDestinationStore };
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
