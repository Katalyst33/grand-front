<template>
  <section>
    <div>
      <main class="relative pb-10">
        <div>
          <!-- Hero card -->
          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div class="">
              <div class="relative shadow-xl sm:overflow-hidden py-24">
                <div class="absolute inset-0">
                  <div
                    class="absolute inset-0 bg-gray-400 mix-blend-multiply"
                  ></div>
                  <img
                    class="h-full w-full object-cover"
                    src="/hero/student.jpg"
                  />
                </div>

                <div
                  class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
                >
                  <h1
                    class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                  >
                    <span class="block text-white text-7xl big-font"
                      >School in the United Kingdom</span
                    >
                  </h1>
                  <p
                    class="mt-6 max-w-lg mx-auto text-center text-xl text-yellow-200 sm:max-w-3xl"
                  >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div
                    class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
                  >
                    <router-link
                      :to="{ name: 'Destinations' }"
                      class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-700 bg-white hover:bg-yellow-50 sm:px-8"
                    >
                      View More Destinations
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Hero card -->
        </div>

        <!-- More main page content here... -->
      </main>
    </div>
  </section>
</template>
<script lang="ts" setup></script>

<style scoped></style>
