<template>
  <div class="p-5 bg-yellow-50">
    <template v-if="$route.name !== 'GalleryPage'">
      <h2 class="text-2xl pb-1">Gallery</h2>
      <hr class="mb-5" />
    </template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <div v-for="item in url">
        <img style="width: 500px" :src="item" alt="preview-image" />
      </div>
    </div>

    <!--    upload area-->

    <div
      @click="changeImage"
      class="my-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
    >
      <div class="space-y-1 text-center">
        <template v-if="isUploading">
          <div>
            <i class="fad fa-spinner-third animate-spin text-5xl"></i>
            <p class="py-2">Uploading Images....</p>
          </div>
        </template>

        <template v-else>
          <svg
            class="mx-auto h-16 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label
              class="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload Destination Image</span>
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500">PNG, JPG, up to 2MB</p></template
        >
      </div>
    </div>
    <!--    upload area-->
    <div class="flex justify-between gap-x-4">
      <div class="text-center">
        <input
          ref="imageUploader"
          type="file"
          accept="image/*"
          name="images"
          @change.prevent="onFileChange"
          multiple
        />

        <button
          @click.prevent="uploadImage"
          class="bg-gray-700 text-white py-1 px-4 rounded-md"
        >
          <i class="far fa-cloud-upload-alt mr-1"></i> Upload
        </button>
      </div>
      <div>
        <button @click.prevent="useImages" class="bg-yellow-500 btn">
          <i class="far fa-check-square mr-2"></i>Use selected ({{
            selectedImages.length
          }})
        </button>
      </div>
      <div>
        <button @click.prevent="deleteMany" class="btn bg-red-500">
          <i class="far fa-trash"></i> Delete Selected ({{
            selectedImages.length
          }})
        </button>
      </div>
    </div>

    <div class="mt-6 overflow-y-scroll h-[500px] lg:h-[600px]">
      <div>
        <h3 class="text-center capitalize">view images</h3>
        <div
          v-if="galleryImages.length"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
        >
          <div v-for="(image, index) in galleryImages" :key="index">
            <div class="relative">
              <img
                @click.prevent="setImage(image.publicId)"
                class="border border-3 h-full cursor-pointer rounded-sm"
                :class="{
                  'border-yellow-500 border-4': selectedImages.includes(
                    image.publicId
                  ),
                }"
                :src="image.crop['500']"
              />

              <span class="text-xs"> {{ fileSizes(image.size) }}</span>
            </div>
          </div>
        </div>

        <div v-else class="text-center">
          <p class="text-center capitalize">NO images</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Modal from "../../components/Modal.vue";
import { $axios } from "../../http/http.Service";
import { useRoute } from "vue-router";
import { getOneDestinationX } from "../../store/destinationStore";
import GalleryComponent from "./GalleryComponent.vue";
import { fileSizes } from "../../../export";

const imageUploader = ref<HTMLInputElement>();
const modalOpen = ref(false);
const galleryImages = ref([]);
const selectedImages = ref<string[]>([]);
const file = ref([]);
const url = ref([]) as any;
const isUploading = ref(false);

function toggleModal() {
  modalOpen.value = !modalOpen.value;
}
const route = useRoute();
onMounted(getImages);

function getImages() {
  return $axios

    .get("/manager/gallery")
    .then((res: any) => (galleryImages.value = res))
    .catch((err) => err);
}
function changeImage() {
  imageUploader.value?.click();
  console.log(imageUploader.value);
}

function onFileChange(e: { target: { files: never[] } }) {
  file.value = e.target.files;
  // url.value = URL.createObjectURL(file.value);
  // imageData.append("image", file.value);
  // console.log(e.target.files[0]);
  for (const item of file.value) {
    url.value.push(URL.createObjectURL(item));
    // console.log(item);
  }
  // console.log(e.target.files);
  // console.log(url.value);
  console.log("something has happened");
}

function uploadImage() {
  isUploading.value = true;
  const images = imageUploader.value?.files;
  if (!images || (images && !images.length)) return;

  const formData = new FormData();
  for (const image of images as any) {
    formData.append("images", image);
  }

  $axios
    .post("/manager/destination-image", formData)
    .then((res) => {
      console.log(res);
      isUploading.value = false;
      url.value = [];
    })
    .then(getImages)
    .catch((err) => {
      console.log(err);
    });
  console.log(formData, "upload??");
}

function setImage(imageId: string) {
  // selectedImages.value.push(imageId!);
  console.log(imageId);
  if (selectedImages.value.includes(imageId)) {
    selectedImages.value = selectedImages.value.filter(
      (image) => image !== imageId
    );
  } else {
    selectedImages.value.push(imageId);
  }
}

function deleteMany() {
  $axios
    .post("/manager/delete-images", { images: selectedImages.value })
    .then((res) => {
      getImages();
      selectedImages.value = [];
      console.log(res);
    })

    .catch((err) => {
      console.log(err);
    });
}

function useImages() {
  $axios
    .post(`/manager/deals/${route.params.destinationId}/use-images`, {
      images: selectedImages.value,
    })
    .then((res) => {
      console.log(selectedImages, route.params, "selected");
      getOneDestinationX();
      // getImages();
      // selectedImages.value = [];
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
