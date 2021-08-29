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
              <tr v-for="(destination, index) in allDeals" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="`/svg/${deal.country.code}.svg`"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <router-link
                        :to="{
                          name: 'UpdateDeal',
                          params: { dealId: deal.uuid },
                        }"
                        class="text-sm font-medium text-yellow-700"
                      >
                        {{ destination.country.name }}
                      </router-link>
                      <div class="text-sm text-gray-900">
                        {{ destination.countryCode }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ destination.title }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ trimString(destination.description) }}...
                    <br />
                    <div class="flex space-x-2">
                      <HumanDateTimeComponent :raw-time="deal.duration.start" />
                      <p>-</p>
                      <HumanDateTimeComponent :raw-time="deal.duration.end" />
                    </div>
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
                  {{ destination.role }}
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
import { defineComponent, ref } from "vue";
import { $axios } from "../../http.Service";
import HumanDateTimeComponent from "../components/HumanDateTimeComponent.vue";

export default defineComponent({
  name: "AllDealsX",
  components: { HumanDateTimeComponent },
  setup() {
    const allDestinations = ref<any>([]);

    function trimString(stringText: string) {
      return stringText.substring(0, 50);
    }

    function getAllDestinations() {
      $axios
        .get("manager/deals")
        .then((r) => {
          allDestinations.value = r.data.data;
        })
        .catch((e) => e);
    }

    getAllDeals();
    return { allDestinations, trimString };
  },
});
</script>

<style scoped></style>
