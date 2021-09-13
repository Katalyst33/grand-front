<template>
  <div class="py-4">
    <div class="">
      <h2 class="title-2">Our Services</h2>
      <div class="sm:grid sm:grid-cols-2 xl:max-w-none lg:grid-cols-3 gap-4">
        <div v-for="item in services" class="">
          <div class="bg-white rounded-lg shadow">
            <img class="rounded-t-2xl" :src="`${item.img}`" />

            <div class="p-4 pb-10">
              <h2 class="text-2xl font-bold">
                {{ item.title }}
              </h2>
              <p class="my-6 leading-normal">
                {{ item.text }}
              </p>
              <router-link
                :to="{ name: item.href }"
                class="button bg-yellow-500 px-3 py-2 rounded-md shadow"
                >Learn more</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { ref } from "vue";
SwiperCore.use([Pagination]);
// install Swiper modules
SwiperCore.use([Navigation]);

const imageUrl = ref<any>("/hero/register.jpg");
const services = ref<any>([
  {
    img: "/hero/passport.jpg",
    title: "Visa Arrangement",
    text: "Guaranteed Student visas and Travel visa to over 30 countries, We make prepare you for visa interviews to get you qulified. ",
    href: "Service",
  },
  {
    img: "/hero/plane.jpg",
    title: "Flight Booking",
    text: "get more information here",
    href: "Service",
  },
  {
    img: "/hero/accomodation.jpg",
    title: "Hotel Booking",
    text: "get more information here",
    href: "Service",
  },
]);
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
