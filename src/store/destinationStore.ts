import { computed, reactive, readonly, ref } from "vue";
import { $axios } from "../http.Service";
import { useRoute } from "vue-router";
import { DestinationType } from "../types";

export const destinationStore = reactive({
  allDestinations: {} as {
    data: [];
    lastPage: number;
  },
  promotedDestinations: {},
  isLoadingDeals: false,
});

export const singleDestinationStore = reactive({
  destination: {} as DestinationType,
  isLoadingDeal: false,
});

const SET_DEALS = (allDeals: any) => {
  destinationStore.allDestinations = allDeals.allDeals;
  destinationStore.promotedDestinations = allDeals.promotedDeals;
  destinationStore.isLoadingDeals = true;
};

const SET_ONE_DEAL = (oneDeal: any) => {
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

export function getOneDeal() {
  const route = useRoute();

  const code = computed(() => route.params.dealId);

  return $axios
    .get(`client/deals/${code.value}`)
    .then((r) => {
      if (r) {
        SET_ONE_DEAL(r);
      }
    })
    .catch((e) => e);
}
