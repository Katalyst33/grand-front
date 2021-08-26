import { reactive, readonly } from "vue";
import { $axios } from "../http.Service";

export const dealStore = reactive({
  allDeals: {},
  promotedDeals: {},
  isLoadingDeals: false,
});

const SET_DEALS = (allDeals: any) => {
  dealStore.allDeals = allDeals.allDeals;
  dealStore.promotedDeals = allDeals.promotedDeals;
  dealStore.isLoadingDeals = true;
  console.log(allDeals);
};

export function getAllDeals() {
  return $axios
    .get("client/deals")
    .then((r) => {
      if (r.data.allDeals.data) {
        SET_DEALS(r.data);
      }
    })
    .catch((e) => e);
}
