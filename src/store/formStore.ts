import { reactive } from "vue";
import { $axios } from "../http/http.Service";

export const formStore = reactive({
  personalInformation: {
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    birthName: "",
    birth_day: new Date(),
    nationality: "",
    place_of_birth: "",
  },
});

function saveForm() {
  $axios.post("", formStore).then((res) => {
    console.log(res, "howfar");
  });
}
