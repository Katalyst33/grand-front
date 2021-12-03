<template>
  <section class="flex justify-center">
    <div class="w-full max-w-4xl px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex p-1 space-x-1 bg-white border-2 rounded-xl">
          <Tab
            v-for="category in categories"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full py-2.5 text-sm leading-5 font-medium text-yellow-500 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-yellow-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-yellow-500 text-white shadow'
                  : 'text-yellow-500 hover:bg-white/[0.12] hover:text-yellow-600',
              ]"
            >
              {{ category.title }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel>
            {{ profileStore.personalInformation }}
            <PersonalInformation />
          </TabPanel>
          <TabPanel>
            <div>Here2</div>
            <div>Here2</div>
            <div>Here2</div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PersonalInformation from "./PersonalInformation.vue";
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { profileStore } from "../store/profileStore";
let categories = ref([
  {
    title: "Personal Information",
  },
  { title: "Contact Information" },
  { title: "Other Information" },
  { title: "Eductional History" },
  { title: "Eductional History" },
]);
</script>
