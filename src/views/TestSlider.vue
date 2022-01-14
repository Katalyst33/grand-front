<script lang="ts">
import Glide from "@glidejs/glide";

import {
  Images,
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";
import { defineComponent, onMounted, ref } from "vue";
import { appState } from "../store/store";

import DestinationCard from "../components/DestinationCard.vue";

export default defineComponent({
  components: { DestinationCard },
  props: {
    promotedDestinations: {
      type: Array,
      default: () => [],
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const testData = ref([
      {
        uuid: "d7b2d9ea-cba6-4884-98df-c6283af2993c",
        title: "Travel to Italy This Easter",
        description:
          "<p>Have an Adventure in Italy this easter, a package designed to give you a thrilling tour in the beautiful city of Italy.</p>",
        country: {
          name: "Italy",
          code: "IT",
        },
        duration: {
          start: "2022-03-10T23:27:41.881Z",
          end: "2022-03-31T22:27:41.881Z",
        },
        thumbnail: "destinations/no-destination.jpeg",
        images: ["b43b7ec1-4ed5-47c5-9c8c-1f05babf39e2"],
        price: 200000,
        enabled: false,
        promoted: true,
        activity: "sight seeing",
        included:
          "<ul>\n<li>Launch in the holy City</li>\n<li>Open roof Bus ride around the Vatican City</li>\n<li>A visit to the great cathdral&nbsp;</li>\n</ul>",
        thumbnails: [
          {
            path: "/uploads/destination/opt_plane_rTkHR.jpeg",
            crop: {
              "100": "/uploads/destination/100/plane_rTkHR.jpeg",
              "500": "/uploads/destination/500/plane_rTkHR.jpeg",
            },
          },
        ],
      },
      {
        uuid: "f203e0fd-3d90-44c1-8952-cc832995cb8a",
        title: "Travel to Dubai this Easter",
        description:
          "<p>Have a&nbsp; fun filled adventure in the beautiful city of Dubai</p>\n<p>You will have a wonderful time as you explore top tourist destinations in the high rising city of Dubai.</p>",
        country: {
          name: "United Arab Emirates",
          code: "AE",
        },
        duration: {
          start: "2022-01-14T16:09:21.641Z",
          end: "2022-01-14T16:09:21.641Z",
        },
        thumbnail: "destinations/no-destination.jpeg",
        images: ["3db8e531-3262-4bd5-811e-f0c137488ab6"],
        price: 400000,
        enabled: false,
        promoted: true,
        activity: "Vacation",
        included:
          "<ul>\n<li>Launch in the holy City</li>\n<li>Open roof Bus ride around the Vatican City</li>\n<li>A visit to the great cathdral&nbsp;</li>\n</ul>",
        thumbnails: [
          {
            path: "/uploads/destination/opt_duba-fireworks_MZuEm.jpeg",
            crop: {
              "100": "/uploads/destination/100/duba-fireworks_MZuEm.jpeg",
              "500": "/uploads/destination/500/duba-fireworks_MZuEm.jpeg",
            },
          },
        ],
      },
      {
        uuid: "f203e0fd-3d90-44c1-8952-cc832995cb8a",
        title: "3Travel to Dubai this Easter",
        description:
          "<p>Have a&nbsp; fun filled adventure in the beautiful city of Dubai</p>\n<p>You will have a wonderful time as you explore top tourist destinations in the high rising city of Dubai.</p>",
        country: {
          name: "United Arab Emirates",
          code: "AE",
        },
        duration: {
          start: "2022-01-14T16:09:21.641Z",
          end: "2022-01-14T16:09:21.641Z",
        },
        thumbnail: "destinations/no-destination.jpeg",
        images: ["3db8e531-3262-4bd5-811e-f0c137488ab6"],
        price: 400000,
        enabled: false,
        promoted: true,
        activity: "Vacation",
        included:
          "<ul>\n<li>Launch in the holy City</li>\n<li>Open roof Bus ride around the Vatican City</li>\n<li>A visit to the great cathdral&nbsp;</li>\n</ul>",
        thumbnails: [
          {
            path: "/uploads/destination/opt_duba-fireworks_MZuEm.jpeg",
            crop: {
              "100": "/uploads/destination/100/duba-fireworks_MZuEm.jpeg",
              "500": "/uploads/destination/500/duba-fireworks_MZuEm.jpeg",
            },
          },
        ],
      },
    ]);

    const sliderIndex = ref(0);
    let slider: any;

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

    return {
      testData,
      appState,
    };
  },
});
</script>

<template>
  <div>
    <div v-if="isLoaded">
      <div class="techie relative">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <div
              v-for="(item, index) in testData"
              :key="index"
              class="glide__slide group flex flex-col rounded-lg shadow-md overflow-hidden relative"
            >
              <div class="bg-red-500">
                {{ item.title }}
                <!--                <DestinationCard :app-state="appState" :destination="item" />-->
              </div>
            </div>
          </ul>
        </div>
      </div>
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
