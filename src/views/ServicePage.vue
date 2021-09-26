<template>
  <div ref="animator" class="hey dom-node-demo el py-10">
    <div>About This service</div>
  </div>
  <div></div>

  <button @click="runAnime" class="bg-red-500 p-1 rounded">Trigger</button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const animator = ref(null);

onMounted(() => {
  console.log(animator.value);
});

function runAnime() {
  // let elementum = document.getElementById("hey") as HTMLElement | null;
}

onMounted(() => {});
</script>

<style scoped></style>
