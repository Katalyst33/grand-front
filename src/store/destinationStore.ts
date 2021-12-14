import { computed, reactive, readonly, ref, watch } from "vue";
import { $axios } from "../http/http.Service";
import { useRoute, useRouter } from "vue-router";
import { DestinationType } from "../types";
// import { localStore } from "../../export";
import BrowserStorage from "@trapcode/browser-storage";
const localStore = BrowserStorage.getLocalStore();

const sort = reactive({ field: "createdAt", direction: true });
const searchQuery = ref<string | undefined>(undefined);

export const destinationStore = reactive({
  allDestinations: [],
  promotedDestinations: [] as DestinationType[] | DestinationType,
  paginationQuery: null,

  isLoadingDestinations: false,
  isLoadingSpinner: false,
  searchDestinationQuery: {
    search: searchQuery,
  },
  sortDestination: sort,
  myDestinations: localStore.getArray("myDestinations") || [],
} as any);

export const singleDestinationStore = reactive({
  images: [] as any[],
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

  console.log(combined, "?>");
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

function getAllDestinations(search?: string, sort?: any, page?: number) {
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
      destinationStore.allDestinations = r.data.allDestinations;
      destinationStore.promotedDestinations = r.data.promotedDestinations;
      destinationStore.isLoadingDestinations = true;
    })
    .catch((e) => e);
}

export function getOneDestination(destinationId: any) {
  $axios
    .get(`client/deals/${destinationId}`)
    .then((response: any) => {
      SET_ONE_DESTINATION(response);
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

export function runSort(by: string) {
  if (sort.field === by) {
    sort.direction = !sort.direction;
  } else {
    sort.field = by;
  }
  getAllDestinations(searchQuery.value, sort);
}

let timeOut: NodeJS.Timeout | number = -1;

/*
watch([searchQuery], () => {
  destinationStore.isLoadingSpinner = true;

  clearTimeout(timeOut as NodeJS.Timeout);
  timeOut = setTimeout(() => {
    destinationStore.isLoadingSpinner = false;
    getAllDestinations(searchQuery.value);
  }, 500);
});
*/
