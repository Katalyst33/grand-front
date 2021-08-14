<template>
  <section>

    <h2 class="title-2 -mb-10">
      Current Deals
    </h2>

    <div

        class="mt-12 space-y-4 sm:mt-16
          sm:space-y-0 sm:grid sm:grid-cols-2
          xl:grid-cols-4 gap-4 ">

<!--      :style="{ 'background-image': 'url(' + item.image+ ')' }"-->
      <div
          v-for="( item, index) in currentDeals"
          :key="index"
          :class="item.size"

          class="card">
        <div class="card-content">
          <h2 class="card-title font-bold">
            {{ item.title }}
          </h2>
          <p class="my-2 text-base">
            {{ item.text }}
          </p>
          <div class="absolute top-0 left-0 text-lg  text-black px-2  flex items-center">
            <i class="far fa-star text-yellow-500"></i>

          </div>
          <div class="absolute top-0 right-0 text-lg bg-yellow-500 text-black px-2  flex items-center">
            <img :src="`https://www.countryflags.io/${item.countryFlag}/flat/32.png`">
            <p class="pl-2 font-medium uppercase">{{item.countryName}}</p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>
<script lang="ts">
export default {
  name: 'CurrentDeals',

  data() {
    return {
      currentDeals: [
        {
          title: 'Student Visa',
          text: 'Get a student Visa to Canada with ease',
          image: '/hero/vacation.jpg',
          countryName: 'canada',
          countryFlag: 'ca',
          price: 'N250,000',
          size: 'col-span-2 lg:col-span-3'
        },
        {
          title: 'Germany',
          text: 'Get a student Visa to Canada with ease',
          image: '/hero/vacation.jpg',
          countryName: 'Germany',
          countryFlag: 'de',
          price: 'N 250,000',
          size: ' ',
        },
        {
          title: 'Finland',
          text: 'Get a student Visa to Canada with ease',
          image: '/hero/vacation.jpg',
          countryName: 'finland',
          countryFlag: 'fi',
          price: 'N 251,000',
          size: 'bg-blue-500',
        },
        {
          title: 'The sail proposal',
          text: 'Get a student Visa to Canada with ease',
          image: '/hero/vacation.jpg',
          countryName: 'NIgeria',
          countryFlag: 'ng',
          price: 'N 250,000',
        },
        {
          title: 'Student Visa',
          text: 'Get a student Visa to Canada with ease',
          image: '/hero/vacation.jpg',
          countryName: 'USA',
          countryFlag: 'us',
          price: '251,000',
          size: 'bg-gray-400 md:col-span-1 lg:col-span-2'
        }
      ]

    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/currentDealsCard.css";

</style>
