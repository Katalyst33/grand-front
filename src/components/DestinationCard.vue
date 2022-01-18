<template>
  <div class="shadow rounded-md">
    <div class="relative flex-shrink-0">
      <router-link
        :to="{
          name: 'ViewDestinationPage',
          params: { destinationId: destination.uuid },
        }"
      >
        <img
          v-if="destination.thumbnails[0]"
          class="h-48 w-full object-cover group-hover:border-yellow-400 transition duration-500 ease-in-out border-yellow-50 hover:border-2 rounded-t-lg"
          :src="destination.thumbnails[0].crop['500']"
          alt=""
        />
        <img
          v-else
          class="h-48 w-full object-cover group-hover:border-yellow-400 transition duration-500 ease-in-out border-yellow-50 border-2 rounded-lg"
          src="/hero/destinations/no-destination.jpeg"
          alt=""
        />

        <!--                    {{ destination.thumbnails }}-->
      </router-link>
    </div>
    <div
      class="bg-white border-yellow-400 border-t-4 rounded-full p-2 absolute top-40 left-4 mt-2 flex items-center space-x-2 text-xl font-semibold text-gray-900"
    >
      <img
        class="flex-shrink-0 h-6 w-6 rounded-name"
        :src="`/country_flags/${destination.country.code.toLowerCase()}.svg`"
        alt="flag"
      />

      <p>{{ destination.country.name }}</p>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <router-link
          :to="{
            name: 'UpdateDestination',
            params: { destinationId: destination.uuid },
          }"
        >
          <h1 class="text-yellow-600 font-semibold tracking-wide">
            {{ destination.title }}
          </h1>
        </router-link>
        <p
          v-html="truncateString(destination.description, 125)"
          class="mt-3 text-base text-gray-700"
        ></p>

        <p class="mt-3 text-gray-500 font-medium text-2xl">
          ₦ {{ formatPrice(destination.price) }}
        </p>
        <div class="flex items-center space-x-4">
          <div class="text-sm font-medium text-gray-400 uppercase">
            <span
              class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#44BDEB] text-[#18424C]"
            >
              <svg
                class="mr-1.5 h-2 w-2 text-white"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              {{ destination.activity }}
            </span>
          </div>
          <div v-show="['staff', 'admin'].includes(appState.user?.role)">
            <router-link
              :to="{
                name: 'UpdateDestination',
                params: { destinationId: destination.uuid },
              }"
              class="mr-40 text-red-600"
            >
              <i class="far fa-eye text-2xl"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0"></div>
        <div class="flex space-x-2">
          <p class="text-sm font-medium text-gray-900"></p>
          <div class="flex flex-col text-sm text-gray-500 text-left">
            <div>
              <i class="fal fa-calendar-alt"></i>

              {{ formattedDate(destination.duration.start) }}
            </div>
            <br />

            <div>
              <i class="fal fa-calendar-alt"></i>
              {{ formattedDate(destination.duration.end) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { formatPrice, formattedDate, truncateString } from "../../export";
import { appState } from "../store/store";

export default {
  name: "DestinationCard",
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {
      formatPrice,
      formattedDate,
      truncateString,
      appState,
    };
  },
};
</script>
