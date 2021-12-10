import { $axios } from "./http.Service";
import { ref } from "vue";
import { loggedUser } from "../types";

export function getAllUsers() {
  const isLoaded = ref(false),
    allUsers = ref([]);

  const fetch = () => {
    $axios
      .get("manager/users")
      .then((response) => {
        isLoaded.value = true;
        allUsers.value = response.data;
      })
      .catch((error) => error);
  };

  return { isLoaded, allUsers, fetch };
}

export function getUserDetails(routeParams: any) {
  console.log(routeParams, "hgjhgj");
  const user = ref<loggedUser>({
      email: "",
      role: "",
      uuid: "",
    }),
    isLoaded = ref(false),
    allProfiles = ref([]);
  const fetch = () => {
    $axios
      .get(`/manager/user/${routeParams}/get-user`)
      .then((response: any) => {
        user.value = response.user;
        allProfiles.value = response.userProfiles;
        isLoaded.value = true;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { user, isLoaded, allProfiles, fetch };
}
