<template>
  <Listbox as="div" v-model="props.post.country">
    <ListboxLabel class="font-label"> Country: </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="
          relative
          w-name
          bg-white
          border border-gray-300
          rounded-md
          shadow-sm
          pl-3
          pr-10
          py-2
          text-left
          cursor-pointer
          focus:outline-none
          focus:ring-1
          focus:ring-yellow-500
          focus:border-yellow-500
          sm:text-sm
        "
      >
        <span class="flex items-center">
          <img
            :src="`/svg/${selected.code}.svg`"
            alt=""
            class="flex-shrink-0 h-6 w-6 rounded-name"
          />
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span
          class="
            ml-3
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
          "
        >
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="
            absolute
            z-10
            mt-1
            w-name
            bg-white
            shadow-lg
            max-h-56
            rounded-md
            py-1
            text-base
            ring-1 ring-black ring-opacity-5
            overflow-auto
            focus:outline-none
            sm:text-sm
          "
        >
          <ListboxOption
            as="template"
            v-for="(country, index) in country"
            :key="index"
            :value="country"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-yellow-500' : 'text-gray-900',
                'cursor-pointer select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="`/svg/${country.code}.svg`"
                  alt=""
                  class="flex-shrink-0 h-6 w-6 rounded-name cursor-pointer"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                >
                  {{ country.name }}
                </span>
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-yellow-500',
                  'absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

const props = defineProps<{
  post: {
    country: {
      name: string;
      code: string;
    };
  };
}>();

// :src="`/svg/${deal.countryCode}.svg`"
const country = [
  {
    name: "Nigeria",
    code: "NG",
  },
  {
    name: "United States",
    code: "US",
  },

  {
    name: "United Kingdom",

    code: "GB",
  },
  {
    name: "Australia",

    code: "AU",
  },
  {
    name: "United states of America",

    code: "US",
  },
  {
    name: "Dubai",
    code: "AE",
  },
  {
    name: "Ireland",
    code: "IE",
  },
  {
    name: "Turkey",
    code: "TR",
  },
  {
    name: "Ukraine",
    code: "UA",
  },
  {
    name: "South Africa",
    code: "ZA",
  },
  {
    name: "Maldives",
    code: "MV",
  },
  {
    name: "Singapore",
    code: "SG",
  },
];
const selected = ref(props.post.country);
</script>
