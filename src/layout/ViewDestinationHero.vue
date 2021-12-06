<template>
  <main v-if="false">
    <div>
      <!-- Hero card -->
      <div class="relative bg-green-500">
        <div class="absolute inset-x-0 bottom-0" />
        <div class="-max-w-7xl mx-auto">
          <div class="relative shadow-xl sm:overflow-hidden h-[400px]">
            <div class="absolute inset-0">
              <img
                class="h-full w-full object-cover"
                src="/hero/vacation.jpg"
                alt="People working on laptops"
              />
              <div class="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>
            <div class="relative px-4 sm:px-6 sm:py-10 lg:px-8">
              <h1
                class="
                  text-center text-4xl
                  font-extrabold
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span class="block text-white">
                  {{ singleDestinationStore.destination.title }}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { $axios } from "../http/http.Service";
</script>

<style scoped></style>
