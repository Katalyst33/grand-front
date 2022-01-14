<template>
  <div
    v-if="isLoaded"
    class="relative w-screen 2xl:px-40"
    style="left: calc(-50vw + 50%)"
  >
    <Splide :options="options">
      <SplideSlide
        v-for="(destination, index) in promotedDestinations"
        :key="index"
        :data-splide-interval="2000"
        class="group flex flex-col rounded-lg shadow-lg overflow-hidden relative"
      >
        <DestinationCard :app-state="appState" :destination="destination" />
      </SplideSlide>
    </Splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { computed, defineComponent, onMounted, reactive } from "vue";
import "@splidejs/splide/dist/css/splide.min.css";
import { destinationStore } from "../store/destinationStore";
import { useRouter } from "vue-router";
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";
import { useWindowSize } from "@vueuse/core";
import { formatPrice } from "../../export";
import { getPromotedDestination } from "../http/client.Service";
import DestinationCard from "../components/DestinationCard.vue";
import { appState } from "../store/store";

export default defineComponent({
  name: "CurrentDealSlide",

  components: {
    DestinationCard,
    HumanDateTimeComponent,
    Splide,
    SplideSlide,
  },
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
    const { width, height } = useWindowSize();
    const router = useRouter();

    const responsive = computed(() => {
      if (width.value > 650) {
        return 3;
      } else if (width.value < 400) {
        return 1;
      } else {
        return 2;
      }
    });

    const options = reactive({
      gap: "1rem",
      rewind: true,
      perPage: responsive.value,
      autoplay: 1000,
    });

    function toViewDestination(destination) {
      router.push({
        name: "UpdateDestination",
        params: { destinationId: destination.uuid },
      });
    }
    return {
      options,
      width,
      height,
      destinationStore,
      toViewDestination,
      formatPrice,
      responsive,
      appState,
    };
  },
});
</script>
