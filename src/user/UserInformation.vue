<script lang="ts" setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
const isLoaded = ref(false);

// Define a validation schema
const schema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required(),
  password: yup.string().required().min(8),
});

// Create a form context with the validation schema
useForm({
  validationSchema: schema,
});

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
</script>

<template>
  <div class="flex justify-center">
    <div>
      <div class="p-4">
        <button
          @click="isLoaded = !isLoaded"
          class="text-yellow-500 text-center"
        >
          Edit information
        </button>
      </div>
      <section>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >First Name</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="email"
              :class="{ 'box-form': isLoaded, 'line-form': !isLoaded }"
              placeholder="you@example.com"
              value="adamwathan"
              aria-invalid="true"
              aria-describedby="email-error"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <!-- Heroicon name: solid/exclamation-circle -->
              <svg
                class="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-red-600">
            Your password must be less than 4 characters.
          </p>
        </div>
      </section>

      <section>
        <div>
          <input name="emails" v-model="email" />
          <span>{{ emailError }}</span>

          <input name="password" v-model="password" type="password" />
          <span>{{ passwordError }}</span>
        </div>
      </section>

      <div class="flex justify-between">
        <div>Back</div>
        <div>
          <button class="bg-yellow-500 py-1 px-3 rounded-md">Forward</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-form {
  @apply block
  md:w-[500px] w-[400px]
  border-0 border-b border-transparent
  bg-gray-50
  focus:border-indigo-600 focus:ring-0
  sm:text-sm;
}

.box-form {
  @apply block
  w-full
  pr-10
  focus:outline-none focus:ring-red-500 border-red-500
  sm:text-sm
  rounded-md;
}
</style>
