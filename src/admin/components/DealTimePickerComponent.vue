<template>
  <div>
    start
    <HumanDateTimeComponent :rawTime="props.duration.start" />
    end
    <HumanDateTimeComponent :rawTime="props.duration.end" />
    <!--    <HumanDateTimeComponent :range="range" />-->

    <DatePicker v-model="props.duration" is-range />
  </div>
</template>
<script lang="ts" setup>
import { DatePicker } from "v-calendar";
import HumanDateTimeComponent from "./HumanDateTimeComponent.vue";
import { computed, defineProps } from "vue";

const props = defineProps<{
  duration: {
    end: Date;
    start: Date;
  };
}>();

// console.log(props);
</script>
