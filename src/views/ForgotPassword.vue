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
                    Enter the email address you used when you joined and we'll
                    send you instructions to reset your password.
                    <br />
                    <br />
                    For security reasons, we do NOT store your password. So rest
                    assured that we will never send you password via email.
                  </p>
                </div>
              </template>
              <template v-if="formState.isCode">
                <p>
                  An email has been sent to
                  <span class="bg-yellow-200 p-1 rounded-full px-2">{{
                    form.email
                  }}</span>
                  with a code.
                  <br />
                  <br />
                  Confirm the code and enter a new password.
                </p>
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

          <div v-if="!formState.isFinished" class="mt-8">
            <div class="">
              <VeeForm
                @submit="resetPassword"
                @invalid-submit="onInvalidSubmit"
                action="#"
                method="POST"
                class="space-y-6"
              >
                <VeeFormField
                  v-if="formState.isEmail && !formState.isCode"
                  v-model="form.email"
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder=""
                  rules="isRequired|isEmail"
                  autocomplete="email"
                />
                <div v-if="formState.isCode">
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
                      ><span class="text-center">
                        {{ formState.buttonText }}</span
                      ></BusyButton
                    >
                  </button>

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
              </VeeForm>
            </div>
          </div>
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
import { ref } from "vue";
import LoginRegisterLogo from "./LoginRegisterLogo.vue";
import BusyButton from "../components/BusyButton.vue";
import VeeFormField from "../components/Validate/VeeFormField.vue";
import { onInvalidSubmit } from "../../export";
import { $axios } from "../http/http.Service";
import { useRouter } from "vue-router";

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
  }),
  isLoading = ref(false);

const router = useRouter();

function resetPassword() {
  if (formState.value.isEmail || !formState.value.isCode) {
    console.log("forgot password");
    isLoading.value = true;
    formState.value.isCode = true;
    formState.value.isEmail = false;

    $axios
      .post("client/forgot-password", form.value)
      .then((res) => {
        isLoading.value = false;

        formState.value.isCode = true;
        formState.value.buttonText = "Confirm";

        console.log(res);
        return res;
      })
      .catch((err) => {
        isLoading.value = false;
        onInvalidSubmit();
        return err;
      });
  } else if (!formState.value.isEmail || formState.value.isCode) {
    console.log("reset password");

    isLoading.value = true;
    formState.value.isFinished = true;

    $axios
      .post("client/reset-password", form.value)
      .then((res) => {
        isLoading.value = false;
        console.log(res);
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
}
</script>

<style lang="scss" scoped></style>
