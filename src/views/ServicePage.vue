<template>
  <div class="">
    <!--    mobil view-->
    <div class="lg:hidden px-4">
      <div v-for="i in 5" class="grid lg:grid-cols-3 my-8">
        <div
          class="p-8 bg-white order-1 lg:order-0 rounded-b-2xl lg:col-span-2"
        >
          <h1 class="text-2xl font-bold text-yellow-600 pb-4">
            Visa Arrangement
          </h1>
          <ul class="list-disc list-inside space-y-4">
            <li>Guide you through out your visa process</li>
            <li>Prepare you for Visa interviews</li>
            <li>Prepare you for Visa interviews</li>
            <li>Guide you through out your visa process</li>
          </ul>
        </div>
        <div class="">
          <!--          <button @click="showImage = !showImage">clissck</button>-->

          <div
            v-show="!showImage"
            class="placeholder-img w-full object-fill rounded-t-lg"
          ></div>
          <img
            v-show="showImage"
            class="w-full h-full rounded-t-2xl"
            :src="`http://picsum.photos/700/300?random${i}`"
            @load="imageLoaded"
          />
        </div>
      </div>
    </div>
    <!--    mobil view-->

    <!--    desktop view-->
    <!--    <button @click="showImage = !showImage">clissck</button>-->

    <div class="hidden lg:inline">
      <div v-for="i in 5" class="grid lg:grid-cols-3 my-10">
        <div
          :class="isEven(i) ? 'lg:order-1 ' : ''"
          class="p-8 bg-white rounded-r-2xl lg:col-span-2"
        >
          <h1 class="text-3xl text-yellow-600 pb-4">Visa Arrangement</h1>
          <ul class="list-disc list-inside space-y-4">
            <li>Guide you through out your visa process</li>
            <li>Prepare you for Visa interviews</li>
            <li>Prepare you for Visa interviews</li>
            <li>Guide you through out your visa process</li>
          </ul>
        </div>
        <div class="">
          <div
            v-show="!showImage"
            :class="isEven(i) ? 'lg:rounded-l-2xl' : 'lg:rounded-r-2xl'"
            class="placeholder-img w-full object-fill"
          ></div>
          <img
            v-show="showImage"
            :class="isEven(i) ? 'lg:rounded-l-2xl' : 'lg:rounded-r-2xl'"
            class="w-full h-full"
            :src="`http://picsum.photos/700/300?random${i}`"
            @load="imageLoaded"
          />
        </div>
      </div>
    </div>
    <!--    desktop view-->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const services = [
  {
    title: "Visa Arrangement",
    description:
      "Guide you through out your visa process. Prepare you for Visa interviews. Prepare you for Visa interviews. Guide you through out your visa process.",
  },
  {
    title: "Airport Pickup",
    description: "",
  },
];

function isEven(value: number) {
  return !(value % 2);
}

const showImage = ref(false);

function imageLoaded() {
  showImage.value = true;
}
</script>

<style scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.placeholder-img {
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #e0ded1 10%, #fefbeb 18%, #e0ded1 33%);
  background-size: 800px 104px;

  padding: 0.5em 0.5em 0.5em;
  height: 20rem;
}
</style>
