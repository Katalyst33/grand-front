import axios from "axios";
import izitoast from "izitoast";

const appBaseURL = import.meta.env.VITE_API_URL;

import "izitoast/dist/css/iziToast.css";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import { axiosResponse } from "./types";

const BrowserStore = vueLocalStorage();

if (BrowserStore.has("ge_jwt")) {
  axios.defaults.headers["ge-apiKey"] = BrowserStore.get("ge_jwt");
}

axios.interceptors.response.use((response: any) => {
  if (response.data.message) {
    izitoast.show({
      color: "green",
      position: "topCenter",
      message: response.data.message,
    });
  } else if (response.data.error) {
    izitoast.show({
      color: "red",
      position: "topCenter",
      message: response.data.error,
    });
  }

  return response.data;
});
const env = "development";

if (env === "development") {
  const envValue = "http://_??_:5300/api";
  const url = envValue.replace("_??_", window.location.hostname);

  axios.defaults.baseURL = url;
} else if (env === "production") {
  axios.defaults.baseURL = appBaseURL as string;
}

// @ts-ignore
// axios.defaults.baseURL = appBaseURL ;
// export default axios;

export { axios as $axios };
