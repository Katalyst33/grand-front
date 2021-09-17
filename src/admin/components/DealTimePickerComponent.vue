<template>
  <div class="relative">
    <h3 class="form-label">Select Date:</h3>
    <div class="relative">
      <div
        v-if="!isSelecting"
        @click="isSelecting = true"
        class="flex justify-between hover:bg-yellow-50 cursor-pointer"
      >
        <div>
          <p class="text-sm">Start:</p>

          <HumanDateTimeComponent :rawTime="props.destination.duration.start" />
        </div>
        <div>
          <p class="text-sm">End:</p>

          <HumanDateTimeComponent :rawTime="props.destination.duration.end" />
        </div>
      </div>
      <div
        class="cursor-pointer top-0 bottom-0"
        v-if="isSelecting"
        @click="isSelecting = false"
      >
        <i class="fas fa-times"></i> Close
      </div>
      <div v-if="isSelecting">
        <DatePicker
          v-model="props.destination.duration"
          is-range
          destination=""
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DatePicker } from "v-calendar";
import HumanDateTimeComponent from "./HumanDateTimeComponent.vue";
import { ref } from "vue";

const props = {
  destination: {} as {
    duration: {
      end: Date;
      start: Date;
    };
  },
};

const isSelecting = ref(false);
</script>
