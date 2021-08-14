<template>
  <div class="py-4">
    <div class="">
      <h2 class="title-2 -mb-10">Our Services</h2>
      <div
          class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl  xl:max-w-none xl:mx-0 xl:grid-cols-3">
        <div v-for="item in services" class="card p-6" :style="{ 'background-image': 'url(' + item.img+ ')' }">
          <div class="card-content">
            <h2 class="card-title text-2xl font-bold">
              {{ item.title }}
            </h2>
            <p class="card-body my-6 leading-normal">
              {{ item.text }}
            </p>
            <router-link :to="{name:item.href}" class="button  bg-green-500">Learn more</router-link>
          </div>
        </div>


      </div>
    </div>



  </div>

</template>

<script lang="ts">

import {defineComponent} from 'vue'


export default defineComponent({
  name: "ServiceCards",
  data() {
    return {
      imageUrl: '/hero/register.jpg',
      services: [
        {
          img: '/hero/register.jpg',
          title: 'Visa Arrangement',
          text: 'Guaranteed Student visas and Travel visa to over 30 countries, We make prepare you for visa interviews to get you qulified. ',
          href: 'Service'
        },
        {
          img: '/hero/register.jpg',
          title: 'Flight Booking',
          text: 'get more information here',
          href: 'Service'
        },
        {
          img: '/hero/register.jpg',
          title: 'Hotel Booking',
          text: 'get more information here',
          href: 'Service'
        },

      ]
    }
  },

  setup() {

    return {}
  }


})
</script>


<style lang="scss" scoped>

@import "../assets/css/serviceCards.css";

</style>
