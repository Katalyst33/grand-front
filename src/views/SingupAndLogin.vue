<template>
  <div>


    <LoginPage v-if="isLoginPage"/>
    <RegisterPage v-else-if="isRegisterPage"/>
    <ForgotPassword v-else/>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent} from 'vue'
import LoginPage from "./LoginPage.vue";
import RegisterPage from "./RegisterPage.vue";
import {useRoute} from "vue-router";
import ForgotPassword from "./ForgotPassword.vue";


export default defineComponent({
  name: "SignupAndLogin",
  components: {ForgotPassword, RegisterPage, LoginPage},
  setup() {
    const route = useRoute();

    const isLoginPage = computed(() => {
      return route.name === 'Login'
    })
    const isRegisterPage = computed(() => {
      return route.name === 'Register'
    })
    return {
      isLoginPage,
      isRegisterPage
    }
  }


})
</script>

<style scoped>

.button-teal {

}

</style>
