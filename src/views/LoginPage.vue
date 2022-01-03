<template>
  <section>
    <div class="min-h-screen flex">
      <div
        class="flex-1 flex flex-col justify-center py-10 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
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
          </div>

          <div class="">
            <nav v-if="appState.isDev" class="flex justify-between py-1">
              <button @click.prevent="normalUser" class="user-buttons">
                Normal User
              </button>
              <button @click.prevent="staffUser" class="user-buttons">
                Staff User
              </button>
              <button @click.prevent="adminUser" class="user-buttons">
                Admin User
              </button>
            </nav>

            <div class="">
              <VeeForm
                @submit="LoginUser"
                @invalid-submit="onInvalidSubmit"
                action="#"
                method="POST"
                class="space-y-6"
              >
                <VeeFormField
                  v-model="form.email"
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder=""
                  rules="isRequired|isEmail"
                  autocomplete="email"
                />

                <VeeFormField
                  v-model="form.password"
                  label="Password"
                  name="password"
                  type="password"
                  placeholder=""
                  rules="isRequired|isMin:7"
                />

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <label class="form-label ml-2"> Remember me </label>
                  </div>

                  <div class="">
                    <router-link
                      :to="{ name: 'ForgotPassword' }"
                      class="form-label"
                    >
                      Forgot your password?
                    </router-link>
                  </div>
                </div>

                <div class="space-y-2">
                  <button class="w-full">
                    <BusyButton
                      :is-loading="isLoading"
                      class="primary-button-wide w-full submit-btn"
                      ><span class="text-center">Log in</span></BusyButton
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
          src="/hero/sign-in.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { $axios } from "../http/http.Service";
import { ref } from "vue";
import { userForm } from "../types";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import { useRouter } from "vue-router";
import LoginRegisterLogo from "./LoginRegisterLogo.vue";
import { appState } from "../store/store";
import BusyButton from "../components/BusyButton.vue";
import VeeFormField from "../components/Validate/VeeFormField.vue";
import { onInvalidSubmit } from "../../export";
import BrowserStorage from "@trapcode/browser-storage";

const BrowserStore = vueLocalStorage();
const BrowserSession = BrowserStorage.getSessionStore();

export default {
  name: "LoginPage",
  components: { VeeFormField, BusyButton, LoginRegisterLogo },
  setup() {
    const form = ref<userForm>({
      email: "",
      password: "",
    });

    const isLoading = ref(false);
    const router = useRouter();

    function normalUser() {
      form.value = {
        email: "her@gmail.com",
        password: "123456789",
      };
    }

    function staffUser() {
      form.value = {
        email: "staff@gmail.com",
        password: "123456789",
      };
    }
    function adminUser() {
      form.value = {
        email: "admin@gmail.com",
        password: "123456789",
      };
    }

    function LoginUser() {
      isLoading.value = true;

      $axios
        .post("client/login", form.value)
        .then((r: any) => {
          console.log(r.user, "reee");
          if (r.token) {
            BrowserStore.set("ge_jwt", r.token);
            BrowserStore.set("user_role", r.role);
            BrowserSession.setBoolean("isAuth", true);
          }

          if (BrowserStore.get("user_role") === "user") {
            window.location.href = "/account/dashboard";
          } else if (BrowserStore.get("user_role") !== "user") {
            window.location.href = "/manager/dashboard";
          } else {
            window.location.href = "/user/dashboard";
          }
          isLoading.value = false;
        })

        .catch((r) => {
          isLoading.value = false;

          onInvalidSubmit();
          return r;
        });
    }

    return {
      appState,

      normalUser,
      onInvalidSubmit,
      LoginUser,
      staffUser,
      adminUser,
      form,
      isLoading,
    };
  },
};
</script>

<style scoped>
.user-buttons {
  @apply bg-red-200

    text-gray-700
  text-xs
  px-2
  py-1
  rounded-full
  border border-red-500;
}
</style>
