<script lang="ts" setup>
const props = defineProps({
  isLoading: Boolean,
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
