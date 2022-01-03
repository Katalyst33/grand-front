import fileSize from "filesize.js";

import BrowserStorage from "@trapcode/browser-storage";
import moment from "moment/moment";
import { destinationStore } from "./src/store/destinationStore";
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

export function removeDestination(destination: any) {
  /* destinationStore.myDestinations.filter(
      (item: any) => item.uuid != destination.uuid
    );*/

  destinationStore.myDestinations.splice(
    destinationStore.myDestinations.indexOf(destination),
    1
  );

  localStore.setArray("myDestinations", destinationStore.myDestinations);
}

export function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn") as HTMLElement;
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}
