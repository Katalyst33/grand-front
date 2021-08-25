<template>
  <div v-if="isLoaded">
    <div class="relative pb-20 pt-10 lg:pb-28">
      <div class="relative">
        <div class="text-center">
          <h2
            class="
              text-3xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-4xl
            "
          >
            Ongoing Deals
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Pick a Destination, let us take you there...
          </p>
        </div>
        <div
          class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="(deal, index) in allDeals"
            :key="index"
            class="
              group
              flex flex-col
              rounded-lg
              shadow-lg
              overflow-hidden
              relative
            "
          >
            <div class="flex-shrink-0">
              <router-link
                :to="{ name: 'ViewDealPage', params: { dealId: deal.uuid } }"
              >
                <img
                  class="
                    h-48
                    w-full
                    object-cover
                    group-hover:border-yellow-400
                    transition
                    duration-500
                    ease-in-out
                    border-yellow-50 border-2
                    rounded-lg
                  "
                  :src="deal.image"
                  alt=""
                />
              </router-link>
            </div>
            <div
              class="
                bg-white
                border-yellow-400 border-t-4
                rounded-full
                p-2
                absolute
                top-40
                left-4
                mt-2
                flex
                items-center
                space-x-2
                text-xl
                font-semibold
                text-gray-900
              "
            >
              <img
                class="h-6 rounded-md object-cover"
                :src="`/svg/${deal.countryCode}.svg`"
              />
              <p>{{ deal.countryCode }} {{ deal.country }}</p>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <a class="block mt-2">
                  <p class="mt-3 text-base text-gray-700">
                    {{ deal.title }}, {{ deal.title }}...
                  </p>
                </a>
                <p class="mt-3 text-base text-yellow-600 text-2xl">
                  $ {{ deal.price }}
                </p>
                <div class="text-sm font-medium text-gray-400 pt-4 uppercase">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-2
                      py-0.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-yellow-300
                      text-yellow-600
                    "
                  >
                    <svg
                      class="mr-1.5 h-2 w-2 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {{ deal.activity }}
                  </span>
                </div>

                <div class="flex -space-x-1 overflow-hidden pt-4">
                  <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <p class="pl-2 text-gray-500">
                    +{{ Math.floor(Math.random() * 10 + 1) }} Viewing
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0"></div>
                <div class="flex space-x-2">
                  <p class="text-sm font-medium text-gray-900">
                    <i class="fal fa-clock"></i>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <p>{{ deal.expiresIn }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 space-y-4 space-x-4">
      <div v-for="(item, index) in allDeals.data" :key="index">
        <router-link
          :to="{ name: 'ViewDealPage', params: { dealId: item.uuid } }"
        >
          <div class="border border-1 border-yellow-500 rounded-md">
            <div class="flex">
              <div>fchgjhk</div>
              <div class="">
                <p>{{ item }}</p>
              </div>
            </div>

            <br />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { $axios } from "../http.Service";
// import { randomInt } from "crypto";

export default defineComponent({
  name: "DealsPage",

  setup() {
    const posts = [
      {
        title: "Boost your conversion rate",
        href: "#",
        category: { name: "Article", href: "#" },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        imageUrl:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        readingTime: "6 min",
        author: {
          name: "Roel Aufderehar",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        title: "How to use search engine optimization to drive sales",
        href: "#",
        category: { name: "Video", href: "#" },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
        date: "Mar 10, 2020",
        datetime: "2020-03-10",
        imageUrl:
          "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        readingTime: "4 min",
        author: {
          name: "Brenna Goyette",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        title: "Improve your customer experience",
        href: "#",
        category: { name: "Case Study", href: "#" },
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
        date: "Feb 12, 2020",
        datetime: "2020-02-12",
        imageUrl:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        readingTime: "11 min",
        author: {
          name: "Daniela Metz",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ];
    const isLoaded = ref(false),
      allDeals = ref([]);

    function getAllDeals() {
      $axios
        .get("client/deals")
        .then((r) => {
          isLoaded.value = true;
          allDeals.value = r.data.data;
        })
        .catch((e) => e);
    }
    getAllDeals();

    return { isLoaded, allDeals, posts };
  },
});
</script>

<style scoped></style>
