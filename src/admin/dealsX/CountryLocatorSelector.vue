<template>
  {{ searchQuery }}
  {{ computedCountry }}
  <input v-model="searchQuery" type="text" />
  <Listbox as="div" v-model="props.country">
    <ListboxLabel class="font-label"> Country: </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="
          relative
          w-full w-name
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
            :src="`/svg/${props.country.code}.svg`"
            alt=""
            class="flex-shrink-0 h-6 w-6 rounded-name"
          />
          <span class="ml-3 block truncate">{{ props.country.name }}</span>
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
            v-for="(country, index) in allCountries"
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
import { computed, defineProps, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { allCountries } from "../../db/countryList";

const props = defineProps<{
  country: {
    name: string;
    code: string;
  };
}>();
const searchQuery = ref("");

const AllCountries = ref(allCountries);

const computedCountry = computed(() => {
  if (searchQuery.value) {
    return AllCountries.value.filter((item: { name: string; code: string }) => {
      return searchQuery.value
        .toLowerCase()
        .split("")
        .every((v) => {
          return (
            item.name.toLowerCase().includes(v) ||
            item.code.toLowerCase().includes(v)
          );
        });
    });
  } else {
    return AllCountries.value.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }
});

/*const computedCountry = computed(() => {
  const SortedCountires = {};
  return allCountries.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
});*/

// let matchingStrings = [];

const selected = ref(props.country);
</script>
