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

        <VeeFormField
          v-model="profileStore.profile.personalInformation.firstName"
          label="First name"
          name="first_name"
          type="text"
          placeholder="First name"
          rules="isRequired"
          autocomplete="given-name"
          class="form-input-profile"
          :isNeed="true"
        />
        <VeeFormField
          v-model="profileStore.profile.personalInformation.lastName"
          label="Last name"
          name="last_name"
          type="text"
          placeholder="First name"
          rules="isRequired"
          :isNeed="true"
          autocomplete="family-name"
          class="form-input-profile"
        />
        <VeeFormField
          v-model="profileStore.profile.personalInformation.middleName"
          label="Middle name"
          name="middle_name"
          type="text"
          placeholder="First name"
          autocomplete="additional-name"
          class="form-input-profile"
        />
        <VeeFormField
          v-model="profileStore.profile.personalInformation.birthName"
          label="Birth name (in full)"
          name="full_name"
          type="text"
          placeholder="First name"
          rules="isRequired"
          :isNeed="true"
          autocomplete="name"
          class="form-input-profile"
        />

        <div class="grid md:grid-cols-2 items-center gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Gender
              <span class="text-red-500 font-semibold text-md">*</span></label
            >
            <select
              v-model="profileStore.profile.personalInformation.gender"
              class="form-input-profile"
            >
              <option disabled value="">Please select one</option>
              <option value="male">Male</option>

              <option value="female">Female</option>
              <option value="rather_not">i rather not say</option>
            </select>
          </div>
          <div>
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Select date of birth:
                <span class="text-red-500 font-semibold text-md">*</span></label
              >
              <div
                class="mt-1 flex items-center rounded-md shadow-sm bg-gray-100"
              >
                <div
                  class="relative flex items-stretch flex-grow focus-within:z-10 px-6"
                >
                  {{ birth_day }}
                </div>
                <div>
                  <button
                    v-if="showCalendar"
                    @click.prevent="showCalendar = !showCalendar"
                    type="button"
                    class="relative text-red-500 inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 focus:border-yellow-500"
                  >
                    <i class="fad fa-calendar-alt"></i>
                    <span>Close Calendar</span>
                  </button>
                  <button
                    v-else
                    @click.prevent="showCalendar = !showCalendar"
                    type="button"
                    class="relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 focus:border-yellow-500"
                  >
                    <i class="fad fa-calendar-alt"></i>
                    <span>Pick Date</span>
                  </button>
                </div>
              </div>
            </div>
            <DatePicker
              v-show="showCalendar"
              v-model="profileStore.profile.personalInformation.birth_day"
            />
          </div>
        </div>

        <VeeFormField
          v-model="profileStore.profile.personalInformation.nationality"
          label="Nationality"
          name="nationality"
          type="text"
          placeholder="Nationality"
          autocomplete="country"
          class="form-input-profile"
          rules="isRequired"
          :isNeed="true"
        />

        <VeeFormField
          v-model="profileStore.profile.personalInformation.place_of_birth"
          label="Place of birth"
          name="birth_place"
          type="text"
          placeholder="Nationality"
          autocomplete="country"
          class="form-input-profile"
          rules="isRequired"
          :isNeed="true"
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
</script>
