<template>
  <div
    v-for="(deal, index) in dealStore"
    :key="index"
    class="group flex flex-col rounded-lg shadow-lg overflow-hidden relative"
  >
    <div class="flex-shrink-0">
      <router-link
        :to="{ name: 'ViewDealPage', params: { dealId: deal.uuid } }"
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
          :src="deal.image"
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
        :src="`/svg/${deal.country.code}.svg`"
      />
      <p>{{ deal.country.name }}</p>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <a class="block mt-2">
          <p class="mt-3 text-base text-gray-700">
            {{ deal.title }}, {{ deal.title }}...
          </p>
        </a>
        <p class="mt-3 text-base text-yellow-600 text-2xl">
          $ {{ deal.price }}
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
              bg-yellow-300
              text-yellow-600
            "
          >
            <svg
              class="mr-1.5 h-2 w-2 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            {{ deal.activity }}
          </span>
        </div>

        <div class="flex -space-x-1 overflow-hidden pt-4">
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <p class="pl-2 text-gray-500">
            +{{ Math.floor(Math.random() * 10 + 1) }} Viewing
          </p>
        </div>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0"></div>
        <div class="flex space-x-2">
          <p class="text-sm font-medium text-gray-900">
            <i class="fal fa-clock"></i>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <HumanDateTimeComponent :raw-time="deal.duration.start" /> -
            <HumanDateTimeComponent :raw-time="deal.duration.end" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";

export default {
  name: "DealsTileComponent",
  components: { HumanDateTimeComponent },
  props: {
    dealStore: {
      type: Object,
      required: true,
    },
  },
};
</script>
