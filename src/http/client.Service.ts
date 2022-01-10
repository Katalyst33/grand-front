import { $axios } from "./http.Service";
import { destinationStore } from "../store/destinationStore";
import { reactive, ref } from "vue";
import { localStore } from "../../export";
import { appState } from "../store/store";
import { DestinationType } from "../types";

const sort = reactive({ field: "createdAt", direction: true });

export function getPromotedDestination() {
  const promotedDestinations = ref<DestinationType[]>([]);
  const isLoaded = ref(false);

  const fetch = () => {
    $axios
      .get(`/client/destinations`)
      .then((res) => {
        localStore.setArray(
          "promotedDestinations",
          res.data.promotedDestinations.data
        );
        appState.pageReady = true;
        isLoaded.value = true;
        promotedDestinations.value = res.data.promotedDestinations.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { fetch, isLoaded, promotedDestinations };
}

export function getOneDestination(destinationId: any) {
  const isLoaded = ref(false),
    singleDestination = ref<DestinationType>();
  const fetch = () => {
    $axios
      .get(`client/deals/${destinationId}`)
      .then((response: any) => {
        singleDestination.value = {
          ...response.deal,
          images: response.images,
        };

        isLoaded.value = true;
        console.log("got here");
      })
      .catch((e) => e);
  };

  return { fetch, isLoaded, singleDestination };
}

export function getAllDestinations(search?: string, sort?: any, page?: number) {
  destinationStore.isLoaded = false;
  let params = {} as any;
  if (search) {
    params.search = search;
  } else {
    params.page = destinationStore.pagination.page;
  }
  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }

  $axios
    .get("/client/destinations", {
      params,
    })
    .then((r: any) => {
      destinationStore.allDestinations = r.data.allDestinations;
      destinationStore.promotedDestinations = r.data.promotedDestinations;
      destinationStore.isLoaded = true;
    })
    .catch((e) => e);
}

export function runSort(by: string) {
  if (sort.field === by) {
    sort.direction = !sort.direction;
  } else {
    sort.field = by;
  }
  getAllDestinations(destinationStore.searchDestinationQuery.search, sort);
}
