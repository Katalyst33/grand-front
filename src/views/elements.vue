<template>
  <div>

    <div
        class="mt-12 space-y-4 sm:mt-16  sm:space-y-0 sm:grid sm:grid-cols-2  xl:grid-cols-4 gap-4">


      <div class="bg-red-500 p-40 col-span-2 lg:col-span-3">1</div>
      <div class="bg-red-500 p-40" :style="{ 'background-image': 'url(' + ')' }">2</div>
      <div class="bg-red-500 p-40">3</div>
      <div class="bg-red-500 p-40">4</div>
      <div class="bg-red-500 p-40 md:col-span-1 lg:col-span-2">5</div>

    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default  defineComponent({
  name:"ComponentName",

  setup(){

    return{

    }
  }


})
</script>

<style scoped>

</style>
