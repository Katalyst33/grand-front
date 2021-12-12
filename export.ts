import fileSize from "filesize.js";

import BrowserStorage from "@trapcode/browser-storage";
import moment from "moment/moment";
export const localStore = BrowserStorage.getLocalStore();

export function fileSizes(size: number) {
  return fileSize(size);
}

export function formattedDate(date: Date) {
  return moment(date).format("dddd Do  MMMM YYYY");
}

export function truncateString(str: string, n: number) {
  return str.length > n ? str.substr(0, n - 1) + "..." : `${str}...`;
}

export function formatPrice(price: any) {
  return Number(price).toLocaleString();
}
