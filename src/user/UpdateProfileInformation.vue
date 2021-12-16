<template>
  <section v-if="isLoading" class="flex justify-center">
    <div class="w-full max-w-4xl px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList
          class="grid md:grid-cols-3 lg:grid-cols-5 p-1 space-x-1 bg-white border-2 rounded-xl"
        >
          <Tab
            v-for="(category, index) in categories"
            as="template"
            :key="index"
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
            <PersonalInformation />
          </TabPanel>
          <TabPanel>
            <ContactInformation />
          </TabPanel>
          <TabPanel>
            <DocumentsUpload />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PersonalInformation from "./components/PersonalInformation.vue";
import { computed, onMounted, ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { profileStore } from "../store/profileStore";
import { useRoute } from "vue-router";
import { $axios } from "../http/http.Service";
import { localStore } from "../../export";
import ContactInformation from "./components/ContactInformation.vue";
import DocumentsUpload from "./DocumentsUpload.vue";
import { fetchProfile } from "../http/account.Service";
let categories = ref([
  {
    title: "Personal Information",
  },
  { title: "Contact Information" },

  { title: "Upload Documents" },
]);

const route = useRoute();

const referenceId = computed(() => {
  return route.params.referenceId;
});

const { fetch, isLoading } = fetchProfile(referenceId.value);
/*function fetchProfile() {
  $axios
    .get(`profile/${route.params.referenceId}`)
    .then((res: any) => {
      console.log(res);

      profileStore.profile = res.profile;
    })
    .finally(() => {
      isLoading.value = true;
    });
}*/
onMounted(fetch);
</script>
