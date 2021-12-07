<template>
  <div>{{ props.images }}</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  images: [];
}>();
</script>
