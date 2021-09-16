import axios from "axios";
import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.css";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import * as process from "process";
const env = process.env.NODE_ENV;

const BrowserStore = vueLocalStorage();
if (BrowserStore.has("ge_jwt")) {
  axios.defaults.headers["ge-apiKey"] = BrowserStore.get("ge_jwt");

  if (env === "development") {
    const envValue = "http://_??_:5300";
    const url = envValue.replace("_??_", window.location.hostname);

    axios.defaults.baseURL = url;
  } else if (env === "production") {
    // axios.defaults.baseURL = appBaseURL as string;
  }
}

const { protocol, hostname, port } = window.location;

const $port = port && port.length ? ":5300" : "";
const domain = `${hostname}${$port}`;

const url = `${protocol}//${domain}/api/`;

axios.defaults.baseURL = url;

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

export { axios as $axios };
