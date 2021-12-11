<template>
  <div class="relative border border-yellow-300 rounded p-2">
    <h3 class="form-label">Select Date:</h3>
    <div class="relative">
      <div
        v-if="!isSelecting"
        @click="isSelecting = true"
        class="hover:bg-yellow-50 cursor-pointer space-y-2"
      >
        <div>
          <p class="font-medium">Start:</p>
          {{ formattedDate(props.destination.duration.start) }}
          <br />
        </div>
        <div>
          <p class="font-medium">End:</p>
          {{ formattedDate(props.destination.duration.end) }}
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
        <DatePicker v-model="props.destination.duration" :is-range="true" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HumanDateTimeComponent from "./HumanDateTimeComponent.vue";
import moment from "moment/moment";

import { computed, ref } from "vue";
import { formattedDate } from "../../../export";

const props = defineProps<{
  destination: {
    duration: {
      end: Date;
      start: Date;
    };
  };
}>();

console.log(props);

const isSelecting = ref(false);
</script>
