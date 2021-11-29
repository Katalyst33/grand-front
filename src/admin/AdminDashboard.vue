<template>
  <div class="mx-10 h-screen">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="tab">
        <h1 class="text-2xl">Destinations</h1>
      </div>
      <div class="tab">Users</div>
      <div class="tab">Files</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminDashboard",
});
</script>

<style scoped>
.tab {
  @apply bg-white border rounded-sm h-36  font-normal p-4 shadow-sm;
}
</style>
