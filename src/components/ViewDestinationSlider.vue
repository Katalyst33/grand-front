<template>
  <div>
    <div
      v-show="!showImage"
      class="relative w-screen bg-gray-300 h-96 lg:h-[600px] w-full object-cover bg-cover placeholder-img"
      style="left: calc(-50vw + 50%)"
    ></div>
    <transition name="fade">
      <div v-show="showImage">
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
                      @load="imageLoaded"
                      v-if="
                        singleDestinationStore.destination.images.length > 0
                      "
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
    </transition>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reactive } from "vue";
import { singleDestinationStore } from "../store/destinationStore";
import { ref } from "vue";

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
    const showImage = ref(false);

    function imageLoaded() {
      showImage.value = true;
    }
    const options = reactive({
      gap: "1rem",
      rewind: true,
      perPage: 1,
      autoplay: 1000,
    });

    return { options, props, singleDestinationStore, showImage, imageLoaded };
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

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.placeholder-img {
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #e0ded1 10%, #fefbeb 18%, #e0ded1 33%);
  background-size: 1000px 104px;

  padding: 0.5em 0.5em 0.5em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
