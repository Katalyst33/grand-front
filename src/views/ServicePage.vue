<template>
  <div>

    <h1 >Service Page</h1>

    <div class="grid grid-cols-4 gap-10" >
      <div  v-for="item in cards" >
        <p :class="item.color" class="p-40">
          {{ item.title }} {{item.color}}
        </p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent({
  name: "ServicePage",
  data() {
    return {
      cards: [
        {
          title: 'red',
          color: 'bg-red-500 col-span-2 lg:col-span-3',

        },
        {
          title: 'yellow',
          color: 'bg-yellow-500',
        },
        {
          title: 'blue',
          color: 'bg-blue-500',
        },
        {
          title: 'green',
          color: 'bg-green-500',
        },
        {
          title: 'gray',
          color: 'bg-gray-500 md:col-span-1 lg:col-span-2',
        },

      ]
    }
  },

  setup() {

    return {}
  }


})
</script>

<style scoped>

</style>
