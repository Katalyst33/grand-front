<template>
  <div>
    <p class="">
      {{ formattedDate(props.rawTime) }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
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
</script>
