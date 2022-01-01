<template>
  <div class="shadow sm:rounded-md bg-white">
    {{ profileStore.profile.personalInformation }}
    <VeeForm
      @submit="updateProfile($route.params.referenceId)"
      @invalid-submit="onInvalidSubmit"
      class="space-y-6"
    >
      <div class="space-y-4 sm:overflow-hidden px-4 py-5 sm:p-6">
        <VeeFormField
          v-model="profileStore.profile.personalInformation.firstName"
          label="First name"
          name="first_name"
          type="text"
          placeholder="First name"
          rules="isRequired"
          autocomplete="given-name"
          class="form-input-profile"
        />
        <VeeFormField
          v-model="profileStore.profile.personalInformation.lastName"
          label="Last name"
          name="last_name"
          type="text"
          placeholder="First name"
          rules="isRequired"
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
          autocomplete="name"
          class="form-input-profile"
        />

        <div class="flex flex-col md:flex-row gap-10">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Gender</label
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
                >Select date of birth</label
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
        />

        <br />
        <hr />
        <div class="py-10">
          <p>
            I have read and do accept the current
            <span class="underline"
              ><router-link :to="{ name: 'TermsCondition' }"
                >Terms and conditions</router-link
              ></span
            >
            as well as {{ appState.data.companyName }}
            <span class="underline"
              ><router-link :to="{ name: 'PrivacyPolicy' }"
                >privacy policy.</router-link
              ></span
            >
          </p>
        </div>
      </div>
      <div class="flex px-4 py-3 bg-gray-100 text-right sm:px-6">
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
import { appState } from "../../store/store";

const showCalendar = ref(false);

const birth_day = computed(() => {
  return moment(profileStore.profile.personalInformation.birth_day).format(
    " Do MMM  YYYY"
  );
});

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn") as HTMLElement;
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}
</script>

<style>
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
