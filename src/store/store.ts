import { reactive, readonly } from "vue";
import BrowserStorage from "@trapcode/browser-storage";
import { $axios } from "../http.Service";
import { loggedUser } from "../types";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import router from "../router";
const BrowserStore = vueLocalStorage();

export const appState = reactive({
  data: {} as any,
  user: {} as loggedUser,
});

const SET_AUTH_USER = (user: loggedUser) => {
  appState.user = user;
};

export function setAppState() {
  return $axios
    .get(`/ping`)
    .then((response: any) => {
      if (response.user) {
        SET_AUTH_USER(response.user);
        BrowserStore.set("user_role", response.user.role);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function logOutUser() {
  console.log("heyyyyy");

  BrowserStore.remove("user_role");
  BrowserStore.remove("ge_jwt");
}
