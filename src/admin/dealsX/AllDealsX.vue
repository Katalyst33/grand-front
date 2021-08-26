<template>
  <router-view></router-view>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                ></th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(deal, index) in allDeals" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="`https://www.countryflags.io/${deal.countryCode}/flat/64.png`"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <router-link
                        :to="{
                          name: 'ViewDealPageX',
                          params: { dealId: deal.uuid },
                        }"
                        class="text-sm font-medium text-gray-900"
                      >
                        {{ deal.country }}
                      </router-link>
                      <div class="text-sm text-gray-500">
                        {{ deal.countryCode }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ deal.title }}</div>
                  <div class="text-sm text-gray-500">
                    {{ trimString(deal.description) }}...
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ deal.role }}
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { $axios } from "../../http.Service";
import { DealsData } from "../../types";

export default defineComponent({
  name: "AdminAllDeals",

  setup() {
    const allDeals = ref<any>([]);

    function trimString(stringText: string) {
      return stringText.substring(0, 50);
    }

    function getAllDeals() {
      $axios
        .get("manager/deals")
        .then((r) => {
          allDeals.value = r.data.data;
          console.log(allDeals.value);
        })
        .catch((e) => e);
    }

    getAllDeals();
    return { allDeals, trimString };
  },
});
</script>

<style scoped></style>
