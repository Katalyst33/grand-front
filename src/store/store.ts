import { reactive, readonly } from "vue";
import BrowserStorage from "@trapcode/browser-storage";
import { $axios } from "../http.Service";
import { loggedUser } from "../types";
export const localStore = BrowserStorage.getLocalStore();

export const appState = reactive({
  Data: {} as any,
  user: {} as loggedUser,
});

const SET_AUTH_USER = (user: loggedUser) => {
  appState.user = user;
};

export function setAppState() {
  return $axios
    .get(`/ping`)
    .then((response: any) => {
      console.log(response.user);

      if (response.user) {
        SET_AUTH_USER(response.user);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
