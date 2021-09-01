import { computed, reactive, readonly, ref, watch } from "vue";
import { $axios } from "../http.Service";
import { useRoute } from "vue-router";
import { DestinationType } from "../types";

const sort = reactive({ field: "createdAt", direction: true });
const searchQuery = ref<string | undefined>(undefined);

export const destinationStore = reactive({
  allDestinations: {} as {
    data: [] | DestinationType;
    lastPage: number;
  },
  promotedDestinations: {},
  isLoadingDestinations: false,
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

const SET_DEALS = (allDeals: any) => {
  destinationStore.allDestinations = allDeals.allDeals;
  destinationStore.promotedDestinations = allDeals.promotedDeals;
  destinationStore.isLoadingDestinations = true;
};

const SET_ONE_DESTINATION = (oneDeal: any) => {
  singleDestinationStore.destination = oneDeal;
  singleDestinationStore.isLoadingDeal = true;
};

export function getAllDestinations(search?: string, sort?: any) {
  let params = {} as any;
  if (search) {
    params.search = search;
  }

  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }
  return $axios
    .get("client/deals", {
      params,
    })
    .then((r) => {
      if (r.data.allDeals.data) {
        SET_DEALS(r.data);
      }
    })
    .catch((e) => e);
}

export function getOneDestination() {
  const route = useRoute();

  const code = computed(() => route.params.dealId);

  return $axios
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

  const code = computed(() => route.params.dealId);

  return $axios
    .get(`manager/deals/${code.value}`)
    .then((r: any) => {
      SET_ONE_DESTINATION(r);
    })
    .catch((e) => e);
}
export function runSort(by: string) {
  if (sort.field === by) {
    sort.direction = !sort.direction;
  } else {
    sort.field = by;
  }
  getAllDestinations(searchQuery.value, sort)
    .then((r) => r)
    .catch((e) => e);
}

let timeOut: NodeJS.Timeout | number = -1;

function searchDestinations(searchQuery: string) {
  getAllDestinations(searchQuery)
    .then((r) => r)
    .catch((e) => e);
}

watch(searchQuery, () => {
  clearTimeout(timeOut as NodeJS.Timeout);
  timeOut = setTimeout(() => {
    searchDestinations(searchQuery.value!);
  }, 500);
});
