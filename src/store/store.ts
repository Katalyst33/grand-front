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
  isDev: import.meta.env.DEV,
  isLoaded: false,
});

const SET_AUTH_USER = (user: loggedUser) => {
  appState.user = user;
};

export function setAppState() {
  $axios
    .get(`client/ping`)
    .then((response: any) => {
      appState.data = response.data.appData;
      appState.user = response.data.user;

      appState.isLoaded = true;

      if (response.user) {
        SET_AUTH_USER(response.user);
        BrowserStore.set("user_role", response.user.role);
      }
    })
    .catch((err) => err);
}

export function closeMenu(state: boolean = false) {
  appState.showMobileMenu = state;
}

export function logOutUser() {
  BrowserStore.remove("user_role");
  BrowserStore.remove("ge_jwt");
  window.location.href = "/login";
}
