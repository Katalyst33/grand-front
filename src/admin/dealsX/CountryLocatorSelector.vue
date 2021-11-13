<template>
  <div class="py-2">
    <div>
      <p class="form-label">Change Country:</p>
      <div
        class="cursor-pointer hover:bg-yellow-50"
        @click="isSearching = true"
      >
        <div v-if="!isSearching" class="flex items-center justify-between">
          <div
            class="flex items-center space-x-2 space-y-1 py-1 cursor-pointer"
          >
            <img
              :src="`/svg/${props.destination.country.code}.svg`"
              alt=""
              class="flex-shrink-0 h-6 w-6 rounded-name"
            />
            <h3>{{ props.destination.country.name }}</h3>
          </div>
          <div class="cursor-pointer hover:text-yellow-600">
            <i class="fal fa-globe-americas"></i>Search..
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSearching">
      <div>
        <div v-for="(country, index) in allCountries" :key="index">
          <div
            @click="selectCountry(country)"
            class="
              flex
              items-center
              space-x-2 space-y-1
              border-b
              py-1
              cursor-pointer
              hover:bg-gray-100
            "
          >
            <img
              class="flex-shrink-0 h-6 w-6 rounded-name"
              :src="`/svg/${destination.country.code}.svg`"
              alt="countryflag"
            />

            <h3>{{ country.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
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
              class="flex-shrink-0 h-6 w-6 rounded-name"
              :src="`/svg/${item.code}.svg`"
              alt="countryflag"
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
              v-for="item in allCountries"
              :key="item.id"
              :value="item.code"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-3 pr-9',
                ]"
              >
                <div class="flex items-center">
                  <img
                    class="flex-shrink-0 h-6 w-6 rounded-name"
                    :src="`/svg/${destination.country.code}.svg`"
                    alt="countryflag"
                  />

                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'ml-3 block truncate',
                    ]"
                  >
                    {{ item.name }}
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
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

import { allCountries } from "../../db/countryList";

const selected = ref(allCountries[10]);

const props = defineProps<{
  destination: {
    country: {
      code: string;
      name: string;
    };
  };
}>();

function selectCountry() {
  props.destination.country.name = selected.value.name;
  props.destination.country.code = selected.value.code;
}

selectCountry();
</script>
