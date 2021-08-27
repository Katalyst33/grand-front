<template>
  <section>
    <h2 class="title-2 -mb-10">Current Deals</h2>
  </section>
  <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
    <template v-if="dealStore.isLoadingDeals">
      <DealsTileComponent :deal-store="dealStore.promotedDeals" />
    </template>
  </div>
  <h3 class="text-lg text-center mt-10">
    More Deals <i class="far fa-arrow-right"></i>
  </h3>
</template>
<script lang="ts">
import { ref } from "vue";
import { $axios } from "../http.Service";
import DealsTileComponent from "../Pages/DealsTileComponent.vue";
import { dealStore, getAllDeals } from "../store/dealStore";

export default {
  name: "CurrentDeals",
  components: { DealsTileComponent },
  data() {
    return {
      currentDeals: [
        {
          title: "Student Visa",
          text: "Get a student Visa to Canada with ease",
          image: "/hero/vacation.jpg",
          countryName: "canada",
          countryFlag: "ca",
          price: "N250,000",
          size: "col-span-2 lg:col-span-3",
        },
        {
          title: "Germany",
          text: "Get a student Visa to Canada with ease",
          image: "/hero/vacation.jpg",
          countryName: "Germany",
          countryFlag: "de",
          price: "N 250,000",
          size: " ",
        },
        {
          title: "Finland",
          text: "Get a student Visa to Canada with ease",
          image: "/hero/vacation.jpg",
          countryName: "finland",
          countryFlag: "fi",
          price: "N 251,000",
          size: "bg-blue-500",
        },
        {
          title: "The sail proposal",
          text: "Get a student Visa to Canada with ease",
          image: "/hero/vacation.jpg",
          countryName: "NIgeria",
          countryFlag: "ng",
          price: "N 250,000",
        },
        {
          title: "Student Visa",
          text: "Get a student Visa to Canada with ease",
          image: "/hero/vacation.jpg",
          countryName: "USA",
          countryFlag: "us",
          price: "251,000",
          size: "bg-gray-400 md:col-span-1 lg:col-span-2",
        },
      ],
    };
  },

  setup() {
    console.log(dealStore.promotedDeals);
    return { dealStore };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/currentDealsCard.css";
</style>
