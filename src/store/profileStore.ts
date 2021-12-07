import { reactive, watch } from "vue";
import { $axios } from "../http/http.Service";
import { localStore } from "../../export";
import { profileTypes } from "../types";

export const profileStore = reactive({
  profile: {
    personalInformation: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      birthName: "",
      birth_day: "",
      place_of_birth: "",
      nationality: "",
    },
  },
});

/*watch([profileStore], () => {
  localStore.setObject("profileStore", profileStore);
});*/
