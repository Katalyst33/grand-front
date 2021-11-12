<script setup lang="ts">
import Glide from "@glidejs/glide";

import {
  Images,
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";
import { ref } from "vue";
import { destinationStore } from "../store/destinationStore";
import { appState } from "../store/store";
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";
import { DestinationType } from "../types";
import { useRouter } from "vue-router";
import { formatPrice } from "../lib/util";
const sliderIndex = ref(0);
let slider: any;

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
        startAt: 0,
        perView: 2,
        dragThreshold: 120,
      },
      600: {
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
</script>

<template>
  <div class="techie relative">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides h-screen-80">
        <div
          v-for="(destination, index) in destinationStore.promotedDestinations"
          :key="index"
          class="
            glide__slide
            group
            flex flex-col
            rounded-lg
            shadow-md
            overflow-hidden
            relative
          "
        >
          <div class="relative flex-shrink-0">
            <button
              v-if="appState.user.role === 'staff'"
              @click="toViewDestination(destination)"
              class="bg-red-500 p-4 absolute top-0 opacity-50"
            >
              <i class="far fa-eye"></i>
            </button>

            <router-link
              :to="{
                name: 'ViewDestinationPage',
                params: { destinationId: destination.uuid },
              }"
            >
              <img
                class="
                  h-48
                  w-full
                  object-cover
                  group-hover:border-yellow-400
                  transition
                  duration-500
                  ease-in-out
                  border-yellow-50 border-2
                  rounded-lg
                "
                :src="destination.image"
                alt=""
              />
            </router-link>
          </div>
          <div
            class="
              bg-white
              border-yellow-400 border-t-4
              rounded-full
              p-2
              absolute
              top-40
              left-4
              mt-2
              flex
              items-center
              space-x-2
              text-xl
              font-semibold
              text-gray-900
            "
          >
            <img
              class="flex-shrink-0 h-6 w-6 rounded-name"
              :src="`/country_flags/${destination.country.code}.svg`"
              alt="countryflag"
            />
            <p>{{ destination.country.name }}</p>
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a class="block mt-2">
                <p class="mt-3 text-base text-gray-700">
                  {{ destination.title }}, {{ destination.title }}...
                </p>
              </a>
              <p class="mt-3 text-base text-yellow-600 text-2xl">
                $ {{ formatPrice(destination.price) }}
              </p>
              <div class="text-sm font-medium text-gray-400 pt-4 uppercase">
                <span
                  class="
                    inline-flex
                    items-center
                    px-2
                    py-0.5
                    rounded-full
                    text-xs
                    font-medium
                    bg-[#44BDEB]
                    text-[#18424C]
                  "
                >
                  <svg
                    class="mr-1.5 h-2 w-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {{ destination.activity }}
                </span>
              </div>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0"></div>
              <div class="flex space-x-2">
                <p class="text-sm font-medium text-gray-900">
                  <i class="fal fa-clock"></i>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <HumanDateTimeComponent
                    :raw-time="destination.duration.start"
                  />
                  -
                  <HumanDateTimeComponent
                    :raw-time="destination.duration.end"
                  />
                </div>
              </div>
            </div>
          </div>
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
