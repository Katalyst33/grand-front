<script lang="ts" setup>
import { $axios } from "../http/http.Service";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { singleDestinationStore } from "../store/destinationStore";
import { profileStore } from "../store/profileStore";
import DragAndDrop from "../components/DragAndDrop.vue";
import { appState } from "../store/store";
const route = useRoute();
const appUrl = import.meta.env.VITE_API_URL;

const code = computed(() => route.params.destinationId);
const imageData = new FormData();
const imageInput = ref<HTMLInputElement>();
const url = ref("");
const file = ref("");
const labelType = ref(" i am label type");

function changeImage() {
  imageInput.value?.click();
  console.log(imageInput.value);
}

function onFileChange(e: any) {
  file.value = e.target.files[0];
  url.value = URL.createObjectURL(file.value);
}

function uploadDocuments() {
  imageData.append("image", file.value);
  imageData.append("bodyInfo", labelType.value);
  console.log(imageData, "appp");

  $axios

    .patch(`/profile/upload/${appState.user.reference}/image`, imageData)

    .then((r) => {
      console.log(r);
    })
    .catch((e) => console.log(e));
}
</script>

<template>
  <div class="bg-yellow-50">
    <h3>Document Uploader !!</h3>

    <div class="flex items-center gap-x-10">
      <div
        ref="uploaderArea"
        style="width: 200px; height: 200px"
        class="bg-red-500 rounded-md relative"
      >
        <a @click.prevent="changeImage" href="#" class="mx-auto">
          <img v-if="!url" :src="`${appUrl}/uploads/app-logo.png`" />
          <img v-else :src="url" />
          <div
            class="
              absolute
              bottom-0
              py-2
              w-full
              text-center text-white
              bg-gray-700
              rounded-b-md
              opacity-50
            "
          >
            Click to Upload
          </div>
        </a>
        <input
          hidden
          ref="imageInput"
          type="file"
          accept="image/*"
          formenctype="multipart/form-data"
          @change.prevent="onFileChange"
        />
      </div>

      <div>
        <button
          @click.prevent="uploadDocuments"
          class="bg-gray-600 text-white p-2 rounded-md"
        >
          upload
        </button>
      </div>
    </div>

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
      <div>
        <div
          v-for="(image, index) in profileStore.profileData.images"
          :key="index"
        >
          {{ image }}

          <div class="">
            <img style="width: 100px" :src="`${appUrl}/uploads/${image}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
