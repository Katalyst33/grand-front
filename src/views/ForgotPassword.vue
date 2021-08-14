<template>
  <section>
    <div class="min-h-screen bg-white flex ">
      <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img class="h-44 w-auto  mx-auto" src="/png/brand-logo-full.png" alt="Workflow"/>
            <h2 class="title-2">
             Forgot Password
            </h2>
            <p class="regular">
              Enter the email address you used when you joined and we'll send you instructions to reset your password.
              <br>
              <br>
              For security reasons, we do NOT store your password. So rest assured that we will never send
              you password via email.
            </p>



          </div>

          <div class="mt-8">


            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div class="mt-1">
                    <input v-model="form.email"  type="email" autocomplete="email"
                            class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                  </div>
                </div>




                <div class="">
                  <button type="submit"
                          class="text-white px-10 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium regular bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                   Reset Password
                  </button>
                  <div>

                  </div>


                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img class="absolute inset-0 h-full w-full object-cover" src="/hero/password.jpg" alt=""/>
      </div>
    </div>
  </section>
</template>
<script lang="ts">


import {defineComponent, ref} from "vue";
import {userForm} from "../types";

export default  defineComponent({

  name: 'ForgotPassword',


  setup(){

    const form = ref<userForm>({})
    return{

      form

    }
  }


})

</script>




