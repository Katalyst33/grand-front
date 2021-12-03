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
  }) as profileTypes
);

watch([profileStore], () => {
  localStore.setObject("profileStore", profileStore);
});

function saveForm() {
  $axios.post("", profileStore).then((res) => {
    console.log(res, "howfar");
  });
}
