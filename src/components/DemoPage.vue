<template>
  <div>

    <div class="p-10 bg-red-500">
      {{currentRoute}}
    </div>

  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default  defineComponent({
  name:"ComponentName",

  computed:{
    currentRoute(){
      return this.$route.name
    }
  },

  setup(){

    return{

    }
  }


})
</script>

<style scoped>

</style>
