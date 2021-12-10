<script lang="ts" setup>
import { ref } from "vue";
import { $axios } from "../http/http.Service";
import { appState } from "../store/store";
import { profileTypes } from "../types";
import AllProfilesComponent from "./components/AllProfilesComponent.vue";

const formData = ref();
const file = ref("") as any;
const url = ref("");
const imageData = new FormData();

function onFileChange(e: any) {
  file.value = e.target.files[0];
  url.value = URL.createObjectURL(file.value);
  console.log(file.value);
}
</script>

<template>
  <section>
    <AllProfilesComponent />

    <div v-if="false">
      <div class="">
        {{ formData }}

        {{ file }}

        <input
          type="file"
          accept="image/*"
          formenctype="multipart/form-data"
          @change.prevent="onFileChange"
        />

        <button
          @click.prevent="processFile"
          class="p-1 bg-red-500 rounded px-4"
        >
          run
        </button>

        Select images:
        <input type="file" accept="image/*" name="images" multiple />

        <img :src="`/uploads/new-doc.jpeg`" />
      </div>
    </div>
  </section>
</template>
