<script lang="ts" setup>
import { onMounted, ref } from "vue";

import fs from "fs";
import dotenv from "dotenv";
import CompressTask from "@ilovepdf/ilovepdf-js-core/tasks/CompressTask";

const formData = ref();
const file = ref("");
const url = ref("");
const imageData = new FormData();

function onFileChange(e: any) {
  file.value = e.target.files[0];
  url.value = URL.createObjectURL(file.value);
  console.log(file.value);
}

function processFile() {
  // Load env vars.
}
</script>

<template>
  <div>
    <div class="">
      {{ formData }}

      {{ file }}

      <input
        type="file"
        accept="image/*"
        formenctype="multipart/form-data"
        @change.prevent="onFileChange"
      />

      <button @click.prevent="processFile" class="p-1 bg-red-500 rounded px-4">
        run
      </button>

      Select images:
      <input type="file" accept="image/*" name="images" multiple />

      <img :src="`/uploads/new-doc.jpeg`" />
    </div>
  </div>
</template>
