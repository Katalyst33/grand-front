import { reactive, readonly } from "vue";
import BrowserStorage from "@trapcode/browser-storage";
import { $axios } from "../http.Service";
import { appInfo, loggedUser } from "../types";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import router from "../router";
const BrowserStore = vueLocalStorage();

export const appState = reactive({
  data: {} as appInfo,
  user: {} as loggedUser,
  showMobileMenu: true,
});

const SET_AUTH_USER = (user: loggedUser) => {
  appState.user = user;
};

const SET_APP_INFO = (appData: any) => {
  appState.data = appData;
};

export function setAppState() {
  return $axios
    .get(`client/ping`)
    .then((response: any) => {
      SET_APP_INFO(response.appData);
      if (response.user) {
        SET_AUTH_USER(response.user);
        BrowserStore.set("user_role", response.user.role);
      }
    })
    .catch((err) => err);
}

export function closeMenu(state: boolean) {
  appState.showMobileMenu = state;
  console.log(appState.showMobileMenu);
  console.log("i close menu");
}

export function logOutUser() {
  BrowserStore.remove("user_role");
  BrowserStore.remove("ge_jwt");
  window.location.href = "/login";
}
