<template>
  <section v-if="isLoading" class="flex justify-center mb-10">
    <div class="w-full max-w-4xl px-2 sm:px-0">
      <TabGroup>
        <TabList
          class="grid md:grid-cols-3 my-4 lg:grid-cols-5 p-1 pb-10 space-x-1 bg-white border-2 rounded-xl"
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

        <TabPanels class="mb-20">
          <TabPanel>
            <PersonalInformation />
          </TabPanel>
          <TabPanel>
            <ContactInformation />
          </TabPanel>
          <TabPanel>
            <DocumentsUpload />
          </TabPanel>
          <TabPanel>
            <EducationaInformation />
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
import { useRoute } from "vue-router";
import ContactInformation from "./components/ContactInformation.vue";
import DocumentsUpload from "./DocumentsUpload.vue";
import { fetchProfile } from "../http/account.Service";
import EducationaInformation from "./components/EducationaInformation.vue";
let categories = ref([
  {
    title: "Personal Information",
  },
  { title: "Contact Information" },

  { title: "Upload Documents" },
  { title: "Educational History" },
]);

const route = useRoute();

const referenceId = computed(() => {
  return route.params.referenceId;
});

const { fetch, isLoading } = fetchProfile(referenceId.value);

onMounted(fetch);
</script>

<style>
.form-footer-bg {
  @apply flex justify-center px-4 py-3 bg-gray-100 text-right sm:px-6;
}

.form-input-profile {
  @apply shadow-sm
  focus:ring-yellow-500 focus:border-yellow-500
  block
  w-full
  sm:text-sm
  border-gray-300
  rounded-md;
}
.submit-btn {
  @apply justify-center py-2 px-4 border border-transparent
  shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500
  hover:bg-yellow-600 focus:outline-none focus:ring-2
  focus:ring-offset-2 focus:ring-yellow-500 w-5/6  mx-auto;
}

.form-label-profile {
  @apply block text-sm font-medium text-gray-700;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
