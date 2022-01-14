<script setup lang="ts">
import Glide from "@glidejs/glide";

import {
  Images,
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";
import { onMounted, ref } from "vue";
import { destinationStore } from "../store/destinationStore";
import { appState } from "../store/store";
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";
import { DestinationType } from "../types";
import { useRouter } from "vue-router";
import { formatPrice } from "../../export";
import { getPromotedDestination } from "../http/client.Service";

const sliderIndex = ref(0);
let slider: any;
const { fetch, isLoaded, promotedDestinations } = getPromotedDestination();
onMounted(fetch);
const router = useRouter();

setTimeout(() => {
  slider = new Glide(".techie", {
    type: "carousel",
    autoplay: 4000,
    hoverpause: false,
    perView: 3,
    focusAt: "center",
    startAt: 0,
    breakpoints: {
      1024: {
        perView: 2,
      },
      768: {
        startAt: 0,
        perView: 1,
        dragThreshold: 120,
      },
    },
  });
  slider.on("run.after", () => {
    sliderIndex.value = slider.index;
  });
  slider.mount({ Images, Controls, Breakpoints });
});
function slideNext() {
  slider.go(">");
}
function slidePrev() {
  slider.go("<");
}
function updateSliderIndex($index: number) {
  slider.index = $index;
}

function toViewDestination(destination: DestinationType) {
  console.log("navigation", destination.uuid);

  router.push({
    name: "UpdateDestination",
    params: { destinationId: destination.uuid },
  });
}

const testData = ref([
  { name: "test" },
  { name: "test2" },
  { name: "test3" },
  { name: "test4" },
]);
</script>

<template>
  <div class="techie relative">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides h-screen-80">
        <div
          v-for="(item, index) in testData"
          :key="index"
          class="glide__slide group flex flex-col rounded-lg shadow-md overflow-hidden relative"
        >
          {{ item.name }}

          <div
            class="bg-white border-yellow-400 border-t-4 rounded-full p-2 absolute top-40 left-4 mt-2 flex items-center space-x-2 text-xl font-semibold text-gray-900"
          ></div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between"></div>
        </div>
      </ul>
    </div>
  </div>
</template>

<style>
.glide {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.glide * {
  box-sizing: inherit;
}
.glide__track {
  overflow: hidden;
}
.glide__slides {
  position: relative;
  width: 100%;
  list-style: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  touch-action: pan-Y;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}
.glide__slides--dragging {
  user-select: none;
}
.glide__slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  white-space: normal;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
.glide__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.glide__arrows {
  -webkit-touch-callout: none;
  user-select: none;
}
.glide__bullets {
  -webkit-touch-callout: none;
  user-select: none;
}
.glide--rtl {
  direction: rtl;
}
</style>
