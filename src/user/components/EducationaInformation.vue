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
        <h1>SCHOOL-LEAVING QUALIFICATION</h1>

        <p class="form-label-profile">Have you graduated from school?.</p>

        <div class="flex m-4">
          <div class="flex gap-x-6">
            <div class="flex items-center gap-x-2">
              <VeeField
                type="radio"
                label="This field"
                name="isGraduated"
                value="yes"
                v-model="profileStore.profile.educationInformation.isGraduated"
                class="cursor-pointer focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                rules="isRequired"
              />
              <h1>Yes</h1>
            </div>
            <div class="flex items-center gap-x-2">
              <VeeField
                type="radio"
                label="This field"
                name="isGraduated"
                value="no"
                v-model="profileStore.profile.educationInformation.isGraduated"
                class="cursor-pointer focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
                rules="isRequired"
              />
              <h1>No</h1>
            </div>
          </div>
          <VeeErrorMessage class="input-error-msg ml-4" name="isGraduated" />
        </div>

        <CountrySelector
          label="In which country have you graduated from school or will be graduating shortly?"
          :country="profileStore.profile.educationInformation.schoolCountry"
        />
        <VeeFormField
          v-model="
            profileStore.profile.educationInformation.highest_school_certificate
          "
          label="Name of your highest school-leaving certificate"
          name="highest_school_certificate"
          type="text"
          placeholder=""
          class="form-input-profile"
          :isNeed="true"
        />

        <h1>DEGREES</h1>

        <label class="form-label-profile">
          After graduating from school, have you completed or will you soon
          complete a first degree programme of at least three years?
        </label>
        <div class="flex m-4">
          <div class="flex gap-x-6">
            <div class="flex items-center gap-x-2">
              <VeeField
                type="radio"
                label="This field"
                name="postGraduate"
                value="yes"
                v-model="profileStore.profile.educationInformation.isGraduating"
                class="cursor-pointer focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
              />
              <h1>Yes</h1>
            </div>
            <div class="flex items-center gap-x-2">
              <VeeField
                type="radio"
                label="This field"
                name="postGraduate"
                value="no"
                v-model="profileStore.profile.educationInformation.isGraduating"
                class="cursor-pointer focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300"
              />
              <h1>No</h1>
            </div>
          </div>
          <VeeErrorMessage class="input-error-msg ml-4" name="postGraduate" />
        </div>

        <CountrySelector
          label="In which country did you attain this first university degree or will you soon attain this first degree?"
          :country="
            profileStore.profile.educationInformation.firstDegreeCountry
          "
        />
        <VeeFormField
          v-model="profileStore.profile.educationInformation.university"
          label="Name of your university"
          name="university"
          type="text"
          placeholder=""
          class="form-input-profile"
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
