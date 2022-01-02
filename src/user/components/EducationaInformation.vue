<template>
  <div class="shadow sm:rounded-md bg-white">
    <VeeForm
      @submit="updateProfile($route.params.referenceId)"
      @invalid-submit="onInvalidSubmit"
      class="space-y-6"
    >
      <div class="space-y-4 sm:overflow-hidden px-4 py-5 sm:p-6">
        <p class="text-sm text-gray-700">
          Please note, Fields marked
          <span class="text-red-500 font-semibold text-md">*</span>
          are required
        </p>

        <div class="sm:col-span-2">
          <div class="max-w-lg">
            <p class="form-label-profile">Have you graduated from school?.</p>
            <div class="flex items-center gap-x-6 mt-4">
              <div class="flex items-center">
                <input
                  v-model="profileStore.profile.educationInformation.graduated"
                  id="yes"
                  name="yes"
                  type="radio"
                  value="Yes"
                  class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                />
                <label
                  for="yes"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  v-model="profileStore.profile.educationInformation.graduated"
                  id="no"
                  value="No"
                  name="no"
                  type="radio"
                  class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                />
                <label
                  for="no"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <CountrySelector
          label="In which country have you graduated from school or will be graduating shortly?"
          :country="profileStore.profile.educationInformation.schoolCountry"
        />

        <FormFooter />
      </div>
      <div class="form-footer-bg">
        <button type="submit" class="submit-btn">Save</button>
      </div>
    </VeeForm>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import moment from "moment/moment";
import { profileStore } from "../../store/profileStore";
import { updateProfile } from "../../http/account.Service";
import VeeFormField from "../../components/Validate/VeeFormField.vue";
import FormFooter from "./FormFooter.vue";
import { onInvalidSubmit } from "../../../export";
import CountrySelector from "../../admin/components/CountrySelector.vue";

const showCalendar = ref(false);

const birth_day = computed(() => {
  return moment(profileStore.profile.personalInformation.birth_day).format(
    " Do MMM  YYYY"
  );
});

function doStuff(e: any) {
  console.log("Stuff done", e.target);
}
</script>
