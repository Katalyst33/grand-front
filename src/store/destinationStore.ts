import { computed, reactive } from "vue";
import { $axios } from "../http/http.Service";
import { useRoute } from "vue-router";
import { DestinationType } from "../types";
// import { localStore } from "../../export";
import BrowserStorage from "@trapcode/browser-storage";

const localStore = BrowserStorage.getLocalStore();

const sort = reactive({ field: "createdAt", direction: true });

export const destinationStore = reactive({
  allDestinations: [],
  promotedDestinations: [] as DestinationType[] | DestinationType,
  pagination: {
    page: 1,
  },

  isLoaded: false,
  searchDestinationQuery: {
    search: "" as string | undefined,
  },
  sortDestination: sort,
  myDestinations: localStore.getArray("myDestinations") || [],
} as any);

export const singleDestinationStore = reactive({
  destination: {} as DestinationType,
  isLoadingDeal: false,
});

const SET_ONE_DESTINATION = (oneDestination: any) => {
  const combined = {
    ...oneDestination.deal,
    images: oneDestination.images,
  };
  singleDestinationStore.destination = combined;
  singleDestinationStore.isLoadingDeal = true;
};

const CLEAR_ONE_DESTINATION = () => {
  singleDestinationStore.destination = {
    country: {
      name: "Select one country",
      code: "NDT",
    },
    duration: {
      start: new Date(),
      end: new Date(),
    },
  } as DestinationType;
  singleDestinationStore.isLoadingDeal = true;
};

export function clearStore() {
  CLEAR_ONE_DESTINATION();
}

export function getOneDestination(destinationId: any) {
  $axios
    .get(`client/deals/${destinationId}`)
    .then((response: any) => {
      const combined = {
        ...response.deal,
        images: response.images,
      };
      singleDestinationStore.destination = combined;
      singleDestinationStore.isLoadingDeal = true;
      // localStore.setObject("oneDestination", r.data);

      singleDestinationStore.isLoadingDeal = true;
    })
    .catch((e) => e);
}

export function getOneDestinationX() {
  const route = useRoute();

  const code = computed(() => route.params.destinationId);

  $axios
    .get(`manager/deals/${code.value}`)
    .then((r: any) => {
      if (r) {
        SET_ONE_DESTINATION(r);
      }
    })
    .catch((e) => e);
}
