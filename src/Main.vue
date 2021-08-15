<template>
  <router-view></router-view>
</template>

<script>
import { $axios } from "./http.Service";

export default {
  name: "Main",

  setup() {
    function loadAppData() {
      $axios
        .get("/ping")
        .then((r) => console.log(r))
        .catch((r) => r);

      console.log("jjj");
    }

    loadAppData();
    return {};
  },
};
</script>
