<template>
  <div>
    <p class="">
      {{ formattedDate(props.rawTime) }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import moment from "moment/moment";

const props = {
  rawTime: {} as any,
};
/*const formattedDate = computed(() => {
  return moment();
});*/

function formattedDate(rawTime: Date) {
  return moment(rawTime).format("MMM Do YY");
}
</script>
