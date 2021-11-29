<script lang="ts" setup>
import PersonalInformation from "./PersonalInformation.vue";
import { formStore } from "../store/formStore";
</script>

<template>
  <div class="flex justify-center">
    <div class="lg:w-1/2 md:w-4/5 space-y-2">
      {{ formStore }}

      <PersonalInformation />
    </div>
  </div>
</template>
