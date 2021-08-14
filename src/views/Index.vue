<template>
  <div >


    <HomeHeroComponent/>
    <div class="container mx-auto px-2">

    <ServiceCards/>

    <CurrentDeals   />
      </div>

  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import ServiceCards from "../components/ServiceCards.vue";
import CurrentDeals from "./CurrentDeals.vue";
import HomeHeroComponent from "./HomeHeroComponent.vue";


export default defineComponent({
  name: "HomePage",
  components: {HomeHeroComponent, CurrentDeals, ServiceCards},

  data() {
    return {
      imageUrl: '/hero/register.jpg'
    }
  },

  setup() {

    return {}
  }


})
</script>

