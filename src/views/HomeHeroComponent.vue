\
<template>
  <section>
    <div>
      <main class="relative pb-40">
        <div>
          <!-- Hero card -->
          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div class="">
              <div class="relative shadow-xl sm:overflow-hidden py-24">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full object-cover"
                    src="/hero/home-hero.jpg"
                  />
                  <div
                    class="absolute inset-0 bg-gray-400 mix-blend-multiply"
                  ></div>
                </div>

                <div
                  class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
                >
                  <h1
                    class="
                      text-center text-4xl
                      font-extrabold
                      tracking-tight
                      sm:text-5xl
                      lg:text-6xl
                    "
                  >
                    <span class="block text-white text-7xl big-font"
                      >School in the United Kingdom</span
                    >
                  </h1>
                  <p
                    class="
                      mt-6
                      max-w-lg
                      mx-auto
                      text-center text-xl text-yellow-200
                      sm:max-w-3xl
                    "
                  >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
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
                          text-yellow-700
                          bg-white
                          hover:bg-yellow-50
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
        <section v-if="false" class="absolute flex justify-center">
          <div class="flex justify-center -mt-10">
            <div class="bg-red-500">
              <div>
                <label
                  for="first_name"
                  class="block text-sm font-medium text-warm-gray-900"
                  >First name</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="
                      py-3
                      px-4
                      block
                      w-full
                      shadow-sm
                      text-warm-gray-900
                      focus:ring-teal-500 focus:border-teal-500
                      border-warm-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      pl-3
                      flex
                      items-center
                      pointer-events-none
                    "
                  >
                    <!-- Heroicon name: solid/mail -->
                    <svg
                      class="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      pl-10
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- More main page content here... -->
      </main>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: "HomeHeroComponent",

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      /* slide:[
         {
           image:'',
           href:'',
           title:'',
           text:''
         }
       ]*/
    };
  },
};
</script>

<style scoped></style>
