<template>
  <section class="overflow-y-auto h-32">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(item, index) in singleDestinationStore.destination.images"
        :key="index"
      >
        <div>
          <div class="relative">
            <img class="rounded-sm" width="70" :src="item.crop[100]" />

            <button
              @click.prevent="deselectImages(item.publicId)"
              class="absolute top-0 right-0 bg-gray-600 px-1 rounded-bl-md"
            >
              <i class="far fa-minus-circle text-white text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { singleDestinationStore } from "../../store/destinationStore";
import { $axios } from "../../http/http.Service";
import { useRoute } from "vue-router";

const route = useRoute();

function deselectImages(image: string) {
  const confirmDeselect = confirm(
    "Are you sure you want to deselect this image?"
  );
  if (!confirmDeselect) return;
  singleDestinationStore.destination.images =
    singleDestinationStore.destination.images.filter(
      (item) => item.publicId !== image
    );
  $axios
    .post(`/manager/deals/${route.params.destinationId}/deselect-images`, {
      images: image,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
