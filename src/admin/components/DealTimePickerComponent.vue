<template>
  <div>
    start
    <HumanDateTimeComponent :rawTime="post.duration.start" />
    end
    <HumanDateTimeComponent :rawTime="post.duration.end" />
    <!--    <HumanDateTimeComponent :range="range" />-->

    <!--    <DatePicker v-model="range" is-range />-->
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
</script>
