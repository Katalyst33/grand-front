import { $axios } from "./http.Service";
import { ref } from "vue";
import BrowserStorage from "@trapcode/browser-storage";
export const localStore = BrowserStorage.getLocalStore();

export function getAllDestinations2(search?: string, sort?: any) {
  const all_destinations = ref(localStore.getObject("all_destinations"));
  let params = {} as any;
  if (search) {
    params.search = search;
  }
  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }
  $axios
    .get("/client/destinations", {
      params,
    })
    .then((r: any) => {
      localStore.setObject("all_destinations", r.data.data);
      Object.assign("all_destinations", r.data.data);
    })

    .catch((err) => err);
}
