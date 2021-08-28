<template>
  <div>
    <p class="text-gray-600 font-medium">
      {{ formattedDate(rawTime) }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { computed, defineProps, ref } from "vue";
import { formatDistance, subDays } from "date-fns";
import { format } from "date-fns/fp";
import moment from "moment/moment";

const props = defineProps<{
  rawTime: Date;
}>();

/*const formattedDate = computed(() => {
  return moment();
});*/

function formattedDate(rawTime: Date) {
  return moment(rawTime).format("MMM Do YY");
}

console.log(props.rawTime);

console.log(moment().format("MMM Do YY"));
</script>
