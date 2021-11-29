<template>
  <div>Personal Information</div>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">First name</label>
      <div class="mt-1">
        <input
          v-model="formStore.personalInformation.firstName"
          type="text"
          name="first_name"
          class="form-input"
          autocomplete="first_name"
        />
      </div>
      <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Last name</label>
      <div class="mt-1">
        <input
          v-model="formStore.personalInformation.lastName"
          type="text"
          class="form-input"
          autocomplete="family-name"
        />
      </div>
      <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Middle</label>
      <div class="mt-1">
        <input
          type="text"
          v-model="formStore.personalInformation.middleName"
          class="form-input"
          autocomplete="additional-name"
        />
      </div>
      <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
    </div>
    <div>
      <label for="location" class="block text-sm font-medium text-gray-700"
        >Gender</label
      >
      <select
        v-model="formStore.personalInformation.gender"
        id="location"
        class="form-input"
      >
        <option disabled value="">Please select one</option>
        <option value="male">Male</option>

        <option value="female">Female</option>
        <option value="rather_not">i rather not say</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700"
        >Birth name (in full)</label
      >
      <div class="mt-1">
        <input
          type="text"
          v-model="formStore.personalInformation.birthName"
          class="form-input"
          autocomplete="additional-name"
        />
      </div>
      <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
    </div>
    <div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Select date of birth</label
        >
        <div class="mt-1 flex rounded-md shadow-sm">
          <div class="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              v-model="birth_day"
              type="email"
              class="
                shadow-sm
                focus:ring-yellow-500 focus:border-yellow-500
                block
                w-full
                sm:text-sm
                border-gray-300
                bg-gray-300
              "
              disabled
            />
          </div>
          <div>
            <button
              v-if="showCalendar"
              @click.prevent="showCalendar = !showCalendar"
              type="button"
              class="
                relative
                inline-flex
                items-center
                space-x-2
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:border-indigo-500
              "
            >
              <i class="fad fa-calendar-alt"></i>
              <span>Close Calendar</span>
            </button>
            <button
              v-else
              @click.prevent="showCalendar = !showCalendar"
              type="button"
              class="
                relative
                inline-flex
                items-center
                space-x-2
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:border-indigo-500
              "
            >
              <i class="fad fa-calendar-alt"></i>
              <span>Pick Date</span>
            </button>
          </div>
        </div>
      </div>
      <DatePicker
        v-show="showCalendar"
        v-model="formStore.personalInformation.birth_day"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Nationality</label>
      <div class="mt-1">
        <input
          type="text"
          v-model="formStore.personalInformation.nationality"
          class="form-input"
          autocomplete="additional-name"
        />
      </div>
      <p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700"
        >Place of birth</label
      >
      <div class="mt-1">
        <input
          type="text"
          v-model="formStore.personalInformation.place_of_birth"
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
      <button class="bg-yellow-500 w-full rounded-sm">Save</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import moment from "moment/moment";
import { formStore } from "../store/formStore";

const form = ref(formStore.personalInformation);

const showCalendar = ref(false);

const birth_day = computed(() => {
  return moment(form.value.birth_day).format("dddd Do MMMM  YYYY");
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
