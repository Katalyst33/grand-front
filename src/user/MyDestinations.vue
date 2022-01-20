<template>
  <div>
    <div>My Destinations</div>
    <div>
      <div v-if="isLoaded">
        <div
          class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="(destination, index) in destinations"
            :key="index"
            class="group flex flex-col rounded-lg shadow-lg overflow-hidden relative px-4 md:px-0"
          >
            {{ destination }}
          </div>
        </div>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->

    <div class="my-6">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      End Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(destination, index) in destinations" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              :src="`/country_flags/${destination.country.code.toLowerCase()}.svg`"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ destination.title }}
                          </div>
                          <p
                            v-html="truncateString(destination.description, 50)"
                            class="text-sm text-gray-500"
                          ></p>
                        </div>
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ formattedDate(destination.duration.end) }}
                      <!--                    {{ person.role }}-->
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        :class="
                          destination.status === 'expired'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        "
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                      >
                        {{
                          destination.status === "expired"
                            ? " Expired"
                            : "Active"
                        }}
                      </span>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <div class="flex gap-x-10">
                        <button
                          @click="removeDestination(destination.uuid)"
                          class="text-yellow-600 hover:text-yellow-900 font-semibold underline"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getDbCart } from "../http/account.Service";
import { onMounted } from "vue";
import DestinationCard from "../components/DestinationCard.vue";
import { appState } from "../store/store";
import { formattedDate, truncateString } from "../../export";
import { $axios } from "../http/http.Service";

const { fetch, destinations, isLoaded } = getDbCart();

onMounted(fetch);

function removeDestination(destinationId: string) {
  $axios
    .post("/profile/remove-from-cart", {
      destinationId: destinationId,
      ownerId: appState.user.uuid,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
}
</script>
