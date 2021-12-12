<template>
  <section class="w-full">
    <div class="w-full">
      <div class="w-full p-2 mx-auto bg-white rounded-2xl">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-900 bg-yellow-100 rounded-lg hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75"
          >
            <span>Personal Information</span>
            <ChevronUpIcon
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 text-yellow-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <PersonalInformation />
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-900 bg-yellow-100 rounded-lg hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75"
          >
            <span>Contact Information </span>
            <ChevronUpIcon
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 text-yellow-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <ContactInformation />
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-900 bg-yellow-100 rounded-lg hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75"
          >
            <span>Document </span>
            <ChevronUpIcon
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 text-yellow-500"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <AllDocumentsComponent />
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { $axios } from "../../http/http.Service";
import { profileStore } from "../../store/profileStore";
import { useRoute } from "vue-router";
import PersonalInformation from "../../user/components/PersonalInformation.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import ContactInformation from "../../user/components/ContactInformation.vue";
import AllDocumentsComponent from "../../user/AllDocumentsComponent.vue";
console.log("??");

const route = useRoute();

function fetchProfileDetails() {
  $axios
    .get(`profile/${route.params.referenceId}`)
    .then((res: any) => {
      profileStore.profile = res.profile;
      profileStore.profile.documents = res.allDocuments;
    })
    .catch((err: any) => {
      console.log(err);
    });
}
fetchProfileDetails();
</script>
