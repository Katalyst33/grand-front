<template>
  <div>
    <p class="text-red-500">
      {{ readTime }}
      <br />
      <br />
      end
      {{ readDate(range.end) }}
      <br />
      <br />
      start
      {{ range.start }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { defineProps, ref } from "vue";
import { formatDistance, subDays } from "date-fns";

const props = defineProps<{
  range: {
    end: string;
    start: string;
  };
}>();

function readDate(date: string) {
  formatDistance(subDays(new Date(date), 3), new Date(), { addSuffix: true });
}

const readTime = ref(
  formatDistance(subDays(new Date(), 1), new Date(), { addSuffix: true })
);
console.log(props.range);
</script>
