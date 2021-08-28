<template>
  <div>
    start
    <HumanDateTimeComponent :rawTime="post.duration.start" />
    end
    <HumanDateTimeComponent :rawTime="post.duration.end" />
    <!--    <HumanDateTimeComponent :range="range" />-->

    <DatePicker v-model="props.post.duration" is-range />
  </div>
</template>
<script lang="ts" setup>
import { DatePicker } from "v-calendar";
import HumanDateTimeComponent from "./HumanDateTimeComponent.vue";
import { computed, defineProps } from "vue";

const props = defineProps<{
  post: {
    duration: {
      end: Date | null;
      start: Date;
    };
  };
}>();

console.log(props.post.duration, "heyy");
</script>
