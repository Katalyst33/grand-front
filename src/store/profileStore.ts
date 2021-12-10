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
      married: "",
    },
    contactInformation: {
      email: "",
      houseNumber: "",
      street: "",
      address: "",
      postalCode: "",
      city: "",
      phoneNumber: "",
      country: "",
    },
    educationHistory: {
      married: "",
      other: "",
    },
    documents: [],
  },
});

/*watch([profileStore], () => {
  localStore.setObject("profileStore", profileStore);
});*/
