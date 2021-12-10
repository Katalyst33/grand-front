import fileSize from "filesize.js";

import BrowserStorage from "@trapcode/browser-storage";
export const localStore = BrowserStorage.getLocalStore();

export function fileSizes(size: number) {
  return fileSize(size);
}
