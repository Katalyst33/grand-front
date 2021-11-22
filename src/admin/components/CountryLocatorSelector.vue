<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Assigned to
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="
          relative
          w-full
          bg-white
          border border-gray-300
          rounded-md
          shadow-sm
          pl-3
          pr-10
          py-2
          text-left
          cursor-default
          focus:outline-none
          focus:ring-1
          focus:ring-indigo-500
          focus:border-indigo-500
          sm:text-sm
        "
      >
        <span class="flex items-center">
          <img
            :src="`/country_flags/${props.destination.country.code}.svg`"
            alt=""
            class="flex-shrink-0 h-6 w-6 rounded-full"
          />
          <span class="ml-3 block truncate">{{
            props.destination.country.name
          }}</span>
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
            w-full
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
            v-for="(country, index) in allCountries"
            :key="index"
            :value="country"
            v-slot="{ active, selected }"
          >
            <li
              @click="selectCountry(country)"
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="`/country_flags/${country.code}.svg`"
                  alt=""
                  class="flex-shrink-0 h-6 w-6 rounded-full"
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
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
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
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

import { allCountries } from "../../db/countryList";

const selected = ref(allCountries[2]);

const isSearching = ref(false);
const props = defineProps<{
  destination: {
    country: {
      code: string;
      name: string;
    };
  };
}>();

function selectCountry(country: any) {
  props.destination.country.name = country.name;
  props.destination.country.code = country.code;
}

// selectCountry();
</script>
