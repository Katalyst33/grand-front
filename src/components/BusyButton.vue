<script lang="ts" setup>
const props = defineProps({
  isLoading: Boolean,
});
</script>

<template>
  <button type="button" class="primary-button">
    <span class="flex items-center justify-center">
      <slot></slot>
      <span class="pl-2" v-if="isLoading">
        <i class="fad fa-spinner animate-spin"></i>
      </span>
    </span>
  </button>
</template>

<!--<style scoped>
.primary-button {
  @apply flex
      justify-center
      py-1
      px-10
      border border-transparent
      rounded-full
      shadow-sm
      text-lg

      text-white
      bg-yellow-500
      hover:bg-yellow-600
      focus:outline-none focus:ring-2
      focus:ring-offset-2
      focus:ring-yellow-500
      transition
      duration-500;
}
</style>-->
