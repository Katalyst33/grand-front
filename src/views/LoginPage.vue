<template>
  <section>
    <div class="min-h-screen bg-white flex">
      <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img class="h-44 w-auto  mx-auto" src="/png/brand-logo-full.png" alt="Workflow"/>
            <h2 class="title-2 my-6">
              Sign in to Account
            </h2>

         <div >
           {{form}}

           </div>
            <div>
              <button type="submit" class="w-full text-teal-700 hover:text-white flex justify-center py-3 px-4 border border-2 border-transparent rounded-md shadow-sm text-sm font-medium
                  border-teal-500 hover:bg-teal-600 hover:text-white-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Sign in with google
              </button>
              <div class=" relative">

                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300"/>
                </div>

                <div class="relative flex justify-center text-sm">
                <span class="px-2 my-4 bg-white text-gray-500">
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
                  <label  class="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div class="mt-1">
                    <input v-model="form.email" type="email" autocomplete="email"
                           class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                  </div>
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div class="mt-1">
                    <input v-model="form.password" type="password" autocomplete="current-password"
                           class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div  class="flex items-center">
                    <input  type="checkbox"
                           class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                    <label class="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <router-link :to="{name:'ForgotPassword'}" class="font-medium text-gray-500 hover:text-gray-600">
                      Forgot your password?
                    </router-link>
                  </div>
                </div>

                <div class="space-y-2">
                  <button type="button"
                          @click.prevent="LoginUser"
                          class="w-full    login-button ">
                    Log in
                  </button>


                  <p class="text-gray-500 text-sm text-center">Don't have an account ?
                    <router-link :to="{name:'Register'}"
                                 class="text-teal-500 font-medium"> Sign up now
                    </router-link>
                  </p>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img class="absolute inset-0 h-full w-full object-cover" src="/hero/sign-in.jpg" alt=""/>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import {$axios} from "../http";

export default {
  name: 'LoginPage',

  data() {
    return {
      form: {
        "email": "manager2@gmail.com",
        "password": "123456789"

      }
    }
  },

  setup() {

    function LoginUser() {

      $axios.post('/login', {	"email": "manager2@gmail.com",
        "password": "123456789"}).then((r)=> console.log(r)).catch((r)=> r)

      console.log('hey data')

    }
    return{
      LoginUser

    }
  }
}
</script>
