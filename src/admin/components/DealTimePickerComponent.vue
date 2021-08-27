<template>
  <div>
    <HumanDateTimeComponent :range="range" />

    <DatePicker v-model="range" is-range />
  </div>
</template>
<script lang="ts">
import { DatePicker } from "v-calendar";
import HumanDateTimeComponent from "./HumanDateTimeComponent.vue";

export default {
  name: "DealTimePickerComponent",
  components: {
    HumanDateTimeComponent,
    DatePicker,
  },
  props: {
    post: {},
  },
  data() {
    return {
      range: {
        end: new Date(2021, 8, 27),
        start: new Date(2021, 8, 29),
      },
    };
  },
  setup() {
    const currentDate = {
      start: new Date(2020, 0, 1),
      end: new Date(2020, 0, 5),
    };
    return { currentDate };
  },
};
</script>
