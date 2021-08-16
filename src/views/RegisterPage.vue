<template>
  <section>
    <div class="min-h-screen flex flex-row-reverse">
      <div
        class="
          flex-1 flex flex-col
          justify-center
          px-4
          sm:px-6
          lg:flex-none lg:px-20
          xl:px-24
        "
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div class="pt-4 sm:pt-0">
            <div class="py-4">
              <LoginRegisterLogo />
            </div>

            <div>
              <button
                type="submit"
                class="
                  w-full
                  text-teal-700
                  hover:text-white
                  flex
                  justify-center
                  py-3
                  px-4
                  border border-2 border-transparent
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  border-teal-500
                  hover:bg-teal-600 hover:text-white-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-teal-500
                "
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
                    class="
                      px-2
                      my-4
                      bg-yellow-50
                      border border-yellow-500
                      rounded-full
                      text-gray-500
                    "
                  >
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div>
              {{ form }}
            </div>
          </div>

          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    class="input-box"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.password"
                    type="password"
                    autocomplete="current-password"
                    class="input-box"
                  />
                </div>
              </div>
              <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.repeat_password"
                    type="password"
                    autocomplete="current-password"
                    class="input-box"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <button
                  @click.prevent="registerUser"
                  type="submit"
                  class="login-button w-full"
                >
                  Register
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
            </form>
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
import { $axios } from "../http.Service";
import LoginRegisterLogo from "./LoginRegisterLogo.vue";

export default defineComponent({
  name: "RegisterPage",
  components: { LoginRegisterLogo, AppLogo },
  setup() {
    const form = ref<userForm>({
      email: "her@gmail.com",
      password: "123456789",
      repeat_password: "123456789",
    });

    function registerUser() {
      $axios
        .post("/register", form.value)
        .then((r) => console.log(r))
        .catch((r) => r);
    }

    return {
      form,
      registerUser,
    };
  },
});
</script>

<style scoped></style>
