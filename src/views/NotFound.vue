<template>
  <div>


    <DemoComponent/>

  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import DemoComponent from "./DemoComponent.vue";


export default  defineComponent({
  name:"ComponentName",
  components: {DemoComponent},
  setup(){

    return{

    }
  }


})
</script>

