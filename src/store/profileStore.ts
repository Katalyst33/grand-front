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
      nationality: {
        name: "",
        code: "",
      },
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
      isGraduated: "",
      isGraduating: "",
      highest_school_certificate: "",
      schoolCountry: {
        name: "",
        code: "",
      },
      firstDegreeCountry: {
        name: "",
        code: "",
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
