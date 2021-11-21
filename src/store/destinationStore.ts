import { computed, reactive, readonly, ref, watch } from "vue";
import { $axios } from "../http/http.Service";
import { useRoute, useRouter } from "vue-router";
import { DestinationType } from "../types";

import BrowserStorage from "@trapcode/browser-storage";
export const localStore = BrowserStorage.getLocalStore();

const sort = reactive({ field: "createdAt", direction: true });
const searchQuery = ref<string | undefined>(undefined);

export const destinationStore = reactive({
  allDestinations: {},
  promotedDestinations: {} as DestinationType[] | DestinationType,
  paginationQuery: null,

  isLoadingDestinations: false,
  isLoadingSpinner: false,
  searchDestinationQuery: searchQuery,
  sortDestination: sort,
} as any);

export const singleDestinationStore = reactive({
  destination: localStore.getObject("oneDestination", {
    country: {
      name: "_No Destination",
      code: "NDT",
    },
    duration: {
      start: new Date(),
      end: new Date(),
    },
  }) as DestinationType,
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

export function getAllDestinations(search?: string, sort?: any, page?: number) {
  let params = {} as any;
  if (search) {
    params.search = search;
  }
  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }
  if (page) {
    params.page = destinationStore.paginationQuery;
  }

  $axios
    .get("/client/destinations", {
      params,
    })
    .then((r: any) => {
      destinationStore.allDestinations = r.data.data.allDestinations;
      destinationStore.promotedDestinations = r.data.data.promotedDestinations;
      destinationStore.isLoadingDestinations = true;
      localStore.setObject("all_destinations", r.data);
      console.log(destinationStore.paginationQuery, "page in paginnor");
      console.log(r.data);
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
        SET_ONE_DESTINATION(r.data);
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
      if (r) {
        SET_ONE_DESTINATION(r.data);
      }
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

export function isSearching() {
  searchDestinationStore.isSearching = !searchDestinationStore.isSearching;
}

watch(searchQuery, () => {
  destinationStore.isLoadingSpinner = true;

  clearTimeout(timeOut as NodeJS.Timeout);
  timeOut = setTimeout(() => {
    destinationStore.isLoadingSpinner = false;
    getAllDestinations(searchQuery.value);
  }, 500);
});

watch(destinationStore.paginationQuery, () => {
  getAllDestinations("", "", destinationStore.paginationQuery);
});
