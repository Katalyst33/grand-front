<script lang="ts" setup>
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button type="button" class="">
    <span class="flex items-center justify-center">
      <slot></slot>
      <span class="pl-2" v-if="isLoading">
        <i class="fad fa-spinner animate-spin"></i>
      </span>
    </span>
  </button>
</template>
