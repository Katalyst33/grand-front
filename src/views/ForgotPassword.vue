<template>
  <div>
    <div class="min-h-screen flex">
      <div
        class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div class="py-4">
              <LoginRegisterLogo />
            </div>
            <div v-if="!formState.isFinished">
              <template v-if="formState.isEmail && !formState.isCode">
                <div>
                  <div class="flex justify-center"></div>
                  <h2 class="title-2">Forgot Password ?</h2>
                  <p class="regular">
                    Enter the email address you used when you joined, and we'll
                    send you instructions to reset your password.
                    <br />
                    <br />
                  </p>
                  <details>
                    <summary class="text-sm">Security</summary>
                    <p class="text-sm text-gray-500">
                      For security reasons, we do NOT store your password. So
                      rest assured that we will never send you password via
                      email.
                    </p>
                  </details>
                </div>
              </template>
            </div>

            <template v-else>
              <div class="flex justify-center">
                <div>
                  <div>Login with your new password</div>
                  <div class="flex justify-center py-6">
                    <i
                      class="fad fa-circle-notch text-5xl animate-spin text-yellow-500"
                    ></i>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <template v-if="!formState.isFinished" class="mt-8">
            <template v-if="!provideEmailOnly">
              <div class="">
                <div>
                  <label class="form-label"
                    >A reset code has been sent to your email</label
                  >
                  <input
                    v-model="form.email"
                    class="input-box bg-yellow-100"
                    type="email"
                    readonly
                  />
                  <progress
                    v-if="timeLeft > 0"
                    ref="progressBar"
                    :value="timeLeft"
                    max="60"
                    id="progressBar"
                  ></progress>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    @click.prevent="requestForCode"
                    type="button"
                    class="flex items-center gap-x-2"
                  >
                    <i class="fad fa-redo-alt font-bold"></i>
                    <span
                      >Resend Code
                      <template v-if="timeLeft > 0">{{ timeLeft }}</template>
                    </span>
                  </button>
                </div>
              </div>
            </template>
            <div class="">
              <VeeForm
                v-if="provideEmailOnly"
                @submit="resetPassword"
                @invalid-submit="onInvalidSubmit"
                method="POST"
                class="space-y-6"
                :readonly="true"
              >
                <div>
                  <VeeFormField
                    v-model="form.email"
                    label="Email address"
                    name="email"
                    type="email "
                    placeholder=""
                    rules="isRequired|isEmail"
                    autocomplete="email"
                    ref="emailForm"
                    :className="
                      provideEmailOnly ? 'input-box ' : 'input-box  bg-red-500'
                    "
                  />
                </div>
                <button class="w-full">
                  <BusyButton
                    :is-loading="isLoading"
                    class="primary-button-wide w-full submit-btn"
                    ><span class="text-center">
                      Reset Password</span
                    ></BusyButton
                  >
                </button>
              </VeeForm>
              <VeeForm
                v-else
                @submit="validateCodeAndResetPassword"
                @invalid-submit="onInvalidSubmit"
                method="POST"
                class="space-y-6"
                :readonly="true"
              >
                <div>
                  <VeeFormField
                    v-model="form.reset_code"
                    label="Code"
                    name="code"
                    type="text"
                    placeholder=""
                    rules="isRequired|isMin:6"
                  />

                  <VeeFormField
                    v-model="form.password"
                    label="New Password"
                    name="password"
                    type="password"
                    placeholder=""
                    rules="isRequired|isMin:7"
                  />
                </div>

                <div class="space-y-2">
                  <button class="w-full">
                    <BusyButton
                      :is-loading="isLoading"
                      class="primary-button-wide w-full submit-btn"
                      ><span class="text-center"> Confirm</span></BusyButton
                    >
                  </button>
                </div>
              </VeeForm>
              <div class="space-y-2">
                <p class="text-gray-500 text-sm text-center py-4">
                  Don't have an account ?
                  <router-link
                    :to="{ name: 'Register' }"
                    class="text-teal-500 font-medium"
                  >
                    Sign up now
                  </router-link>
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="/hero/password.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watchEffect } from "vue";
import LoginRegisterLogo from "./LoginRegisterLogo.vue";
import BusyButton from "../components/BusyButton.vue";
import VeeFormField from "../components/Validate/VeeFormField.vue";
import { onInvalidSubmit } from "../../export";
import { $axios } from "../http/http.Service";
import { useRouter } from "vue-router";

let timeLeft = ref(60);
const progressBar = ref<HTMLProgressElement | null>(null);
const form = ref({
    email: "",
    reset_code: "",
    password: "",
  }),
  formState = ref({
    isEmail: true,
    isCode: false,
    isPassword: false,
    buttonText: "Reset Password",
    isFinished: false,
    isRegisteredUser: false,
  }),
  isLoading = ref(false);
function countDownTimer() {
  if (timeLeft.value > 0) {
    setTimeout(() => {
      timeLeft.value -= 1;
      countDownTimer();
    }, 1000);
  }
}
const router = useRouter();
const emailForm = ref<HTMLProgressElement | null>()!;
function validateCodeAndResetPassword() {
  $axios
    .post("client/reset-password", form.value)
    .then((res) => {
      isLoading.value = false;
      isLoading.value = true;
      formState.value.isFinished = true;
      setTimeout(() => {
        router.push({ name: "Login" });
      }, 2000);
      return res;
    })
    .catch((err) => {
      isLoading.value = false;
      onInvalidSubmit();
      return err;
    });
}
function requestForCode() {
  $axios
    .post("client/forgot-password", form.value)
    .then((res) => {
      formState.value.isCode = true;
      formState.value.isEmail = false;
      formState.value.buttonText = "Confirm";
      countDownTimer();

      return res;
    })
    .catch((err) => {
      if (provideEmailOnly.value) {
        onInvalidSubmit();
      }

      isLoading.value = false;

      return err;
    });
}
function resetPassword() {
  if (provideEmailOnly) {
    requestForCode();
  } else if (provideCodeOnly) {
    validateCodeAndResetPassword();
  }
}

const provideEmailOnly = computed(() => {
  return formState.value.isEmail && !formState.value.isCode;
});
const provideCodeOnly = computed(() => {
  return !formState.value.isEmail && formState.value.isCode;
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  height: 100%;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 100%;
}

progress {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background-color: #eaeaea;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  @apply rounded-full;
}
progress::-webkit-progress-value {
  border-radius: 7px;

  @apply bg-yellow-500;
}
</style>
