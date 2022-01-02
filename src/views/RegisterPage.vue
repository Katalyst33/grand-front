<template>
  <section>
    <div class="min-h-screen flex flex-row-reverse">
      <div
        class="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div class="pt-4 sm:pt-0">
            <div class="py-4">
              <LoginRegisterLogo />
            </div>

            <div>
              <button
                type="submit"
                class="w-full text-teal-700 hover:text-white flex justify-center py-3 px-4 border border-2 border-transparent rounded-md shadow-sm text-sm font-medium border-teal-500 hover:bg-teal-600 hover:text-white-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Sign in with google
              </button>
              <div class="relative">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-yellow-400" />
                </div>

                <div class="relative flex justify-center text-sm">
                  <span
                    class="px-2 my-4 bg-yellow-50 border border-yellow-500 rounded-full text-gray-500"
                  >
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div v-if="appState.isDev">
              {{ form }}
            </div>
          </div>

          <div class="mt-6">
            <VeeForm
              @submit="registerUser"
              @invalid-submit="onInvalidSubmit"
              class="space-y-6"
            >
              <VeeFormField
                v-model="form.email"
                label="Email address"
                name="email"
                type="email"
                placeholder="you@exmple.com"
                rules="isRequired|isEmail"
                autocomplete="email"
              />
              <VeeFormField
                v-model="form.password"
                label="Password"
                name="password"
                type="password"
                placeholder="Strong Password"
                rules="isRequired|isMin:7"
              />

              <VeeFormField
                v-model="form.repeat_password"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                rules="isRequired|isConfirmed:@password"
              />

              <div class="space-y-2">
                <button class="w-full">
                  <BusyButton
                    :is-loading="isLoading"
                    class="primary-button-wide w-full submit-btn"
                    ><span v-show="!isLoading" class="text-center">
                      Register</span
                    >
                  </BusyButton>
                </button>

                <div></div>

                <p class="text-gray-500 text-sm text-center py-6">
                  Already have an account ?
                  <router-link
                    :to="{ name: 'Login' }"
                    class="text-teal-500 font-medium"
                  >
                    Login now
                  </router-link>
                </p>
              </div>
            </VeeForm>
          </div>
        </div>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="/hero/register.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { userForm } from "../types";
import AppLogo from "../AppLogo.vue";
import { $axios } from "../http/http.Service";
import LoginRegisterLogo from "./LoginRegisterLogo.vue";
import { appState } from "../store/store";
import BusyButton from "../components/BusyButton.vue";
import { useRouter } from "vue-router";
import VeeFormField from "../components/Validate/VeeFormField.vue";
import { onInvalidSubmit } from "../../export";

export default defineComponent({
  name: "RegisterPage",
  components: { VeeFormField, BusyButton, LoginRegisterLogo, AppLogo },
  setup() {
    const isLoading = ref(false);

    const form = ref<userForm>({
      email: appState.isDev ? "@gmail.com" : "",
      password: appState.isDev ? "123456789" : "",
      repeat_password: appState.isDev ? "123456789" : "",
    });

    const router = useRouter();

    function registerUser() {
      isLoading.value = true;

      $axios
        .post("client/register", form.value)
        .then((r: any) => {
          isLoading.value = false;

          router.push({ name: "Login" });

          console.log(r);
        })
        .catch((r) => {
          isLoading.value = false;

          return r;
        });
    }

    return {
      form,
      registerUser,
      isLoading,
      appState,
      onInvalidSubmit,
    };
  },
});
</script>

<style>
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
