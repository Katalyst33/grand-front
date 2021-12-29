import { $axios } from "./http.Service";
import { ref } from "vue";
import { loggedUser } from "../types";

export function getAllUsers() {
  const isLoaded = ref(false),
    allUsers = ref<loggedUser[]>([]);

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
  const user = ref<loggedUser>(),
    isLoaded = ref(false),
    allProfiles = ref([]);
  const fetch = () => {
    $axios
      .get(`/manager/user/${routeParams}/get-user`)
      .then((response: any) => {
        user.value = response.user;
        allProfiles.value = response.userProfiles;
        isLoaded.value = true;
      })
      .catch((error) => {
        return error;
      });
  };

  return { user, isLoaded, allProfiles, fetch };
}
