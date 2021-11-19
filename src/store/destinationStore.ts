import { computed, reactive, readonly, ref, watch } from "vue";
import { $axios } from "../http/http.Service";
import { useRoute, useRouter } from "vue-router";
import { DestinationType } from "../types";

import BrowserStorage from "@trapcode/browser-storage";

// const router = useRouter();

const sort = reactive({ field: "createdAt", direction: true });
const searchQuery = ref<string | undefined>(undefined);

export const destinationStore = reactive({
  allDestinations: {} as {
    data: DestinationType[] | DestinationType;
    lastPage: number;
  },
  promotedDestinations: {} as any,
  isLoadingDestinations: false,
  isLoadingSpinner: false,
  searchDestinationQuery: searchQuery,
  sortDestination: sort,
});

export const singleDestinationStore = reactive({
  destination: {
    country: {
      name: "_No Destination",
      code: "NDT",
    },
    duration: {
      start: new Date(),
      end: new Date(),
    },
  } as DestinationType,
  isLoadingDeal: false,
});

export const searchDestinationStore = reactive({
  isSearching: false,
});

const SET_ONE_DESTINATION = (oneDeal: any) => {
  singleDestinationStore.destination = oneDeal;
  singleDestinationStore.isLoadingDeal = true;
};

const CLEAR_ONE_DESTINATION = () => {
  singleDestinationStore.destination = {
    country: {
      name: "_No Destination",
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

const SET_DESTINATIONS = (destination: any) => {
  destinationStore.allDestinations = destination.data;
  // destinationStore.isLoadingDestinations = destination.proceed;
};
export function getAllDestinations(search?: string, sort?: any) {
  let params = {} as any;
  if (search) {
    params.search = search;
  }
  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }
  $axios
    .get("/client/deals", {
      params,
    })
    .then((r) => {
      SET_DESTINATIONS(r.data);
      // destinationStore.allDestinations = r.data;
      // destinationStore.promotedDestinations = r.data.data.promotedDestinations;
      // destinationStore.isLoadingDestinations = true;
      console.log(r.data.data, "destinationsss");
      return r;
    })
    .catch((e) => e);
}

export function getOneDestination() {
  const route = useRoute();

  const code = computed(() => route.params.destinationId);

  $axios
    .get(`client/deals/${code.value}`)
    .then((r) => {
      if (r) {
        SET_ONE_DESTINATION(r);
      }
    })
    .catch((e) => e);
}

export function getOneDestinationX() {
  const route = useRoute();

  const code = computed(() => route.params.destinationId);

  $axios
    .get(`manager/deals/${code.value}`)
    .then((r: any) => {
      SET_ONE_DESTINATION(r!.data);
    })
    .catch((e) => e);
}

export function runSort(by: string) {
  if (sort.field === by) {
    sort.direction = !sort.direction;
  } else {
    sort.field = by;
  }
  getAllDestinations(searchQuery.value, sort);
}

let timeOut: NodeJS.Timeout | number = -1;

function searchDestinations(searchQuery: string) {
  getAllDestinations(searchQuery);
}

export function isSearching() {
  searchDestinationStore.isSearching = !searchDestinationStore.isSearching;
}

watch(searchQuery, () => {
  destinationStore.isLoadingSpinner = true;

  clearTimeout(timeOut as NodeJS.Timeout);
  timeOut = setTimeout(() => {
    destinationStore.isLoadingSpinner = false;

    searchDestinations(searchQuery.value!);
  }, 500);
});
