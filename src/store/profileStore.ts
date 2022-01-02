import { reactive, watch } from "vue";
import { DocumentType } from "../types";

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
    educationInformation: {
      graduated: "",
      schoolCountry: {
        country: {
          name: "",
          code: "",
        },
      },
      married: "tjtht",
      other: "hrdch",
    },
    documents: [] as DocumentType[],
  },
});

/*watch([profileStore], () => {
  localStore.setObject("profileStore", profileStore);
});*/
