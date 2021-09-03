<template>
  <div
    v-for="(destination, index) in destinationStore.allDestinations.data"
    :key="index"
    class="group flex flex-col rounded-lg shadow-lg overflow-hidden relative"
  >
    <div class="flex-shrink-0">
      <router-link
        :to="{
          name: 'ViewDestinationPage',
          params: { destinationId: destination.uuid },
        }"
      >
        <img
          class="
            h-48
            w-full
            object-cover
            group-hover:border-yellow-400
            transition
            duration-500
            ease-in-out
            border-yellow-50 border-2
            rounded-lg
          "
          :src="destination.image"
          alt=""
        />
      </router-link>
    </div>
    <div
      class="
        bg-white
        border-yellow-400 border-t-4
        rounded-full
        p-2
        absolute
        top-40
        left-4
        mt-2
        flex
        items-center
        space-x-2
        text-xl
        font-semibold
        text-gray-900
      "
    >
      <img
        class="h-6 rounded-md object-cover"
        :src="`/svg/${destination.country.code}.svg`"
      />
      <p>{{ destination.country.name }}</p>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <a class="block mt-2">
          <p class="mt-3 text-base text-gray-700">
            {{ destination.title }}, {{ destination.title }}...
          </p>
        </a>
        <p class="mt-3 text-base text-yellow-600 text-2xl">
          $ {{ destination.price }}
        </p>
        <div class="text-sm font-medium text-gray-400 pt-4 uppercase">
          <span
            class="
              inline-flex
              items-center
              px-2
              py-0.5
              rounded-full
              text-xs
              font-medium
              bg-[#44BDEB]
              text-[#18424C]
            "
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
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0"></div>
        <div class="flex space-x-2">
          <p class="text-sm font-medium text-gray-900">
            <i class="fal fa-clock"></i>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <HumanDateTimeComponent :raw-time="destination.duration.start" /> -
            <HumanDateTimeComponent :raw-time="destination.duration.end" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";
import { DestinationType } from "../types";
import { destinationStore } from "../store/destinationStore";
</script>
