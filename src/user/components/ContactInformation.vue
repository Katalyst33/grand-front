<template>
  <div class="shadow sm:rounded-md bg-white">
    <VeeForm
      @submit="updateProfile($route.params.referenceId)"
      @invalid-submit="onInvalidSubmit"
    >
      <div class="space-y-4 sm:overflow-hidden px-4 py-5 sm:p-6">
        <div class="grid md:grid-cols-2 gap-4">
          <VeeFormField
            v-model="profileStore.profile.contactInformation.email"
            label="Email Address"
            name="email_address"
            type="email"
            placeholder="you@example.com"
            rules="isRequired|isEmail"
            autocomplete="email"
            class="form-input-profile"
            :isNeed="true"
          />
          <VeeFormField
            v-model="profileStore.profile.contactInformation.phoneNumber"
            label="Phone Number"
            name="phone_number"
            type="tel"
            placeholder="+1 (555) 555-5555"
            autocomplete="tel"
            class="form-input-profile"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <VeeFormField
            v-model="profileStore.profile.contactInformation.postalCode"
            label="Postal Code"
            name="postal-code"
            type="text"
            placeholder="VWW VWV"
            autocomplete="postal-code"
            class="form-input-profile"
          />
          <VeeFormField
            v-model="profileStore.profile.contactInformation.houseNumber"
            label="Street name, house number"
            name="street-address"
            type="text"
            placeholder=""
            autocomplete="street-address"
            class="form-input-profile"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Address continued:
            <span class="text-red-500 font-semibold text-md">*</span>
          </label>
          <div class="mt-1">
            <textarea
              v-model="profileStore.profile.contactInformation.address"
              type="text"
              class="form-input"
              autocomplete="street-address"
              rows="5"
            />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <VeeFormField
            v-model="profileStore.profile.contactInformation.city"
            label="City / Province / Region"
            name="city-street"
            type="text"
            class="form-input-profile"
            :isNeed="true"
          />
          <VeeFormField
            v-model="profileStore.profile.contactInformation.country"
            label="Country"
            name="country"
            type="text"
            class="form-input-profile"
            :isNeed="true"
          />
        </div>

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

const showCalendar = ref(false);
const birth_day = computed(() => {
  return moment(profileStore.profile.personalInformation.birth_day).format(
    "dddd Do MMMM  YYYY"
  );
});
</script>

<style scoped>
.form-input {
  @apply shadow-sm
  focus:ring-yellow-500 focus:border-yellow-500
  block
  w-full
  sm:text-sm
  border-gray-300
  rounded-md;
}
</style>
