import { $axios } from "./http.Service";
import { destinationStore } from "../store/destinationStore";
import { reactive } from "vue";
import { localStore } from "../../export";

const sort = reactive({ field: "createdAt", direction: true });

export function getPromotedDestination() {
  $axios
    .get(`/client/destinations`)
    .then((res) => {
      localStore.setArray(
        "promotedDestinations",
        res.data.promotedDestinations.data
      );

      console.log(res.data.promotedDestinations.data);
    })
    .catch((err) => {
      console.log(err);
    });
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
