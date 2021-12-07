import { reactive, watch } from "vue";
import { $axios } from "../http/http.Service";
import { localStore } from "../../export";
import { profileTypes } from "../types";

export const profileStore = reactive(
  localStore.getObject("profileStore", {
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
  }) as any
);

watch([profileStore], () => {
  localStore.setObject("profileStore", profileStore);
});

export function updateProfile(referenceId: string) {
  $axios
    .post(`/profile/${referenceId}`, profileStore)
    .then((response) => {
      localStore.remove("profileStore");
      console.log(response.data, "response ??");
    })
    .catch((error) => {
      console.log(error, "error ??");
    });

  console.log(profileStore, referenceId);
}
