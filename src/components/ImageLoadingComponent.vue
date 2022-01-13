<template>
  <!--  <button @click="showImage = !showImage">Change state</button>-->

  <div class="relative" :class="componentStyle">
    <transition name="fade" mode="out-in">
      <img
        v-show="showImage"
        :src="image"
        :class="imageStyle"
        @error="onError"
        @load="imageLoaded"
      />
    </transition>
    <transition name="fade" mode="in-out">
      <div v-show="!showImage" class="absolute top-0 space-y-10 py-10">
        <div :class="placeholderStyle" class="placeholder-img"></div>
        <div :class="placeholderStyle" class="placeholder-img"></div>
        <div :class="placeholderStyle" class="placeholder-img"></div>
      </div>
    </transition>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ImageLoadingComponent",
  props: {
    image: {
      type: String,
      default: "",
    },
    imageStyle: {
      type: String,
      default: "",
    },
    placeholderStyle: {
      type: String,
      default: "",
    },
    componentStyle: {
      type: String,
      default: "",
    },
  },

  setup() {
    const showImage = ref(false);
    function onError() {
      // alert("image not loaded");
    }
    function imageLoaded() {
      setTimeout(() => {
        showImage.value = true;
        // console.log("image loaded");
      }, 1000);
    }
    return {
      imageLoaded,
      showImage,
    };
  },
};
</script>
<style lang="scss" scoped>
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
  height: 20px;
  padding: 0.5em 0.5em 0.5em;
}
</style>
