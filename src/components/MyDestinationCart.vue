<template>
  <div class="relative">
    <i class="far fa-map-marked-alt text-2xl text-gray-800"></i>
    <p class="absolute bottom-4 -top-2 right-0 left-7">
      <span
        class="bg-yellow-200 h-4 w-4 text-xs font-bold rounded-full circle-with-text"
      >
        3</span
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "MyDestinationCart",
};
</script>

<style scoped>
.circle-with-text {
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
}
</style>
