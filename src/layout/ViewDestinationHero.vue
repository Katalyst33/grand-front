<template>
  <div class="text-white font-medium text-3xl">
    <div class>
      <div class="h-40">
        <main>
          <div>
            <!-- Hero card -->
            <div class="relative">
              <div class="absolute inset-x-0 bottom-0 h-1/2" />
              <div class="max-w-7xl mx-auto">
                <div class="relative shadow-xl sm:overflow-hidden">
                  <div class="absolute inset-0">
                    <img
                      class="h-full w-full object-cover"
                      src="/hero/vacation.jpg"
                      alt="People working on laptops"
                    />
                    <div
                      class="absolute inset-0 bg-gray-400 mix-blend-multiply"
                    />
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
                      <span v-if="false" class="block text-indigo-200"
                        >customer support</span
                      >
                    </h1>

                    <div
                      class="
                        mt-10
                        max-w-sm
                        mx-auto
                        sm:max-w-none sm:flex sm:justify-center
                      "
                    >
                      <div
                        class="
                          space-y-4
                          sm:space-y-0
                          sm:mx-auto
                          sm:inline-grid
                          sm:grid-cols-2
                          sm:gap-5
                        "
                      >
                        <a
                          href="#"
                          class="
                            flex
                            items-center
                            justify-center
                            px-4
                            py-3
                            border border-transparent
                            text-base
                            font-medium
                            rounded-md
                            shadow-sm
                            text-indigo-700
                            bg-white
                            hover:bg-indigo-50
                            sm:px-8
                          "
                        >
                          Get started
                        </a>
                        <a
                          href="#"
                          class="
                            flex
                            items-center
                            justify-center
                            px-4
                            py-3
                            border border-transparent
                            text-base
                            font-medium
                            rounded-md
                            shadow-sm
                            text-white
                            bg-yellow-500 bg-opacity-60
                            hover:bg-opacity-70
                            sm:px-8
                          "
                        >
                          Live demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { singleDestinationStore } from "../store/destinationStore";

export default defineComponent({
  name: "ViewDealHero",

  setup() {
    return { singleDestinationStore };
  },
});
</script>

<style scoped></style>
