<template>
  <section>
    <div class="min-h-screen flex">
      <div
        class="
          flex-1 flex flex-col
          justify-center
          py-10
          px-4
          sm:px-6
          lg:flex-none lg:px-20
          xl:px-24
        "
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
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
          </div>

          <div class="">
            <div class="">
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label class="block form-label"> Email address: </label>
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
                  <label class="block form-label"> Password: </label>
                  <div class="mt-1">
                    <input
                      v-model="form.password"
                      type="password"
                      autocomplete="current-password"
                      class="input-box"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="
                        h-4
                        w-4
                        text-teal-600
                        focus:ring-teal-500
                        border-gray-300
                        rounded
                      "
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
                  <button
                    type="button"
                    @click.prevent="LoginUser"
                    class="w-full login-button"
                  >
                    Log in
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
              </form>
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
import { $axios } from "../http.Service";
import { ref } from "vue";
import { userForm } from "../types";
import { vueLocalStorage } from "@trapcode/browser-storage/vue";
import { useRouter } from "vue-router";
import LoginRegisterLogo from "./LoginRegisterLogo.vue";

const BrowserStore = vueLocalStorage();

export default {
  name: "LoginPage",
  components: { LoginRegisterLogo },
  setup() {
    const form = ref<userForm>({
      email: "staff@gmail.com",
      password: "123456789",
    });

    const router = useRouter();

    function LoginUser() {
      $axios
        .destination("client/login", form.value)
        .then((r: any) => {
          BrowserStore.set("ge_jwt", r.token);
          BrowserStore.set("user_role", r.role);

          if (r.error) {
            router.push({ name: "Contact" });
          } else if (BrowserStore.get("user_role") === "user") {
            window.location.href = "/user/dashboard";
          } else if (BrowserStore.get("user_role") !== "user") {
            window.location.href = "/admin/dashboard";
          } else {
            window.location.href = "/user/dashboard";
          }
        })
        .catch((r) => r);
    }
    return {
      LoginUser,
      form,
    };
  },
};
</script>
