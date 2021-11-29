<template>
  <div>
    <div>
      <button
        class="bg-gray-700 p-2 text-white my-4 rounded-md"
        @click.prevent="toggleModal"
      >
        Open Gallery
      </button>
    </div>
    <div v-if="modalOpen">
      <Modal @closeModal="toggleModal" max-size="max-w-3xl">
        <div class="p-5">
          <h2 class="text-2xl pb-1">Gallery</h2>
          <hr class="mb-5" />
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

          <div class="mt-6">
            <div>
              <h3 class="text-center capitalize">view images</h3>

              <div class="grid grid-cols-3 gap-2">
                <div v-for="(image, index) in galleryImages">
                  <img class="border border-2 h-full" :src="image.path" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Modal from "../../components/Modal.vue";
import { $axios } from "../../http/http.Service";

const imageUploader = ref<HTMLInputElement>();
const modalOpen = ref(true);
const galleryImages = ref([]);

function toggleModal() {
  modalOpen.value = !modalOpen.value;
}

onMounted(getImages);

function getImages() {
  return $axios

    .get("/manager/destination/gallery")
    .then((res) => {
      console.log(res.data);
      galleryImages.value = res.data;

      // data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function uploadImage() {
  const image = imageUploader.value?.files;
  if (!image || (image && !image.length)) return;

  const formData = new FormData();
  formData.append("images", image[0]);

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
</script>
