<script lang="ts" setup>
import { $axios } from "../http.Service";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { singleDestinationStore } from "../store/destinationStore";
import { profileStore } from "../store/profileStore";
import DragAndDrop from "../components/DragAndDrop.vue";
const route = useRoute();

const code = computed(() => route.params.destinationId);
const imageData = new FormData();

const appUrl = import.meta.env.VITE_API_URL;

function uploadDocuments() {
  $axios
    .patch(`/profile/upload/${code.value}/images`)
    .then((r) => console.log(r))
    .catch((e) => e);
}
</script>

<template>
  <DragAndDrop v-if="false" />
  <h3>Document Uploader !!</h3>

  <form action="/multiple_upload" enctype="multipart/form-data" method="POST">
    <div>
      <label> Select images: <br /></label>
      <input type="file" accept="image/*" name="images" multiple />
    </div>
    <button
      type="submit"
      class="bg-red-500 p-2 cursor-pointer rounded mt-10"
      @click.prevent="uploadDocuments"
    >
      Upload Documents
    </button>
  </form>

  <div>
    <div v-for="(image, index) in profileStore.profileData.images" :key="index">
      {{ image }}

      <img style="width: 100px" :src="`${appUrl}/uploads/${image}`" />
    </div>
  </div>
</template>
