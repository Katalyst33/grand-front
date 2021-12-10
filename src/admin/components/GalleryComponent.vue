<template>
  <div>
    <div></div>
    <div class="p-5">
      <h2 class="text-2xl pb-1">Gallery</h2>
      <hr class="mb-5" />
      <div class="flex justify-between gap-x-4">
        <div class="text-center">
          <input
            ref="imageUploader"
            type="file"
            accept="image/*"
            name="images"
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

function uploadImage() {
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
