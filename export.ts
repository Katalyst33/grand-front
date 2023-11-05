import fileSize from "filesize.js";

import BrowserStorage from "@trapcode/browser-storage";
import moment from "moment/moment";
import { destinationStore } from "./src/store/destinationStore";
import { appState } from "./src/store/store";
import { $axios } from "./src/http/http.Service";
export const localStore = BrowserStorage.getLocalStore();

export function fileSizes(size: number) {
  return fileSize(size);
}

export function formattedDate(date: any) {
  return moment(date).format("dddd Do  MMMM YYYY");
}

export function truncateString(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1) + "..." : `${str}...`;
}

export function formatPrice(price: any) {
  return Number(price).toLocaleString();
}
export function removeDestination(destinationId: any) {
  $axios
    .post("/profile/remove-from-cart", {
      destinationId: destinationId,
      ownerId: appState.user.uuid,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
  /*  destinationStore.myDestinations.splice(
    destinationStore.myDestinations.indexOf(destinationId),
    1
  );
  localStore.setArray("myDestinations", destinationStore.myDestinations);*/
}

export function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn") as HTMLElement;
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}
