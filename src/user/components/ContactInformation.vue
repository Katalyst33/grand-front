<template>
  <div class="shadow sm:rounded-md bg-white">
    <div class="space-y-4 sm:overflow-hidden px-4 py-5 sm:p-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Email Address:</label
          >
          <div class="mt-1">
            <input
              v-model="profileStore.profile.contactInformation.email"
              type="email"
              name="first_name"
              class="form-input"
              autocomplete="first_name"
            />
          </div>
          <p class="mt-2 text-sm text-gray-500">
            We'll only use this for spam.
          </p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Phone Number:</label
          >
          <div class="mt-1">
            <input
              v-model="profileStore.profile.contactInformation.phoneNumber"
              type="text"
              name="first_name"
              class="form-input"
              autocomplete="first_name"
            />
          </div>
          <p class="mt-2 text-sm text-gray-500">
            We'll only use this for spam.
          </p>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Street name, house number</label
        >
        <div class="mt-1">
          <input
            v-model="profileStore.profile.contactInformation.houseNumber"
            type="text"
            name="first_name"
            class="form-input"
            autocomplete="first_name"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Address continued</label
        >
        <div class="mt-1">
          <textarea
            v-model="profileStore.profile.contactInformation.address"
            type="text"
            class="form-input"
            autocomplete="street-address"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Postal Code</label
        >
        <div class="mt-1">
          <input
            type="text"
            v-model="profileStore.profile.contactInformation.postalCode"
            class="form-input"
            autocomplete="additional-name"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >City / Province / Region</label
        >
        <div class="mt-1">
          <input
            type="text"
            v-model="profileStore.profile.contactInformation.city"
            class="form-input"
            autocomplete="additional-name"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Country</label>
        <div class="mt-1">
          <input
            type="text"
            v-model="profileStore.profile.contactInformation.country"
            class="form-input"
            autocomplete="additional-name"
          />
        </div>
        <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
      </div>

      <br />
      <hr />
      <div class="py-10">
        <div>
          I have read and do accept the current terms and conditions as well as
          uni-assist's privacy policy.
        </div>
      </div>
    </div>
    <div class="px-4 py-3 bg-gray-100 text-right sm:px-6">
      <button
        @click.prevent="updateProfile($route.params.referenceId)"
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        Save
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import moment from "moment/moment";
import { profileStore } from "../../store/profileStore";
import { updateProfile } from "../../http/account.Service";

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
