<template>
  <section class="px-2">
    <template v-if="isLoading">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              v-if="allProfiles.length"
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      S/N
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Reference
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>

                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(item, index) in allProfiles" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {{ index + 1 }}.
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600"
                    >
                      <router-link
                        :to="{
                          name: 'UpdateProfile',
                          params: { referenceId: item.reference },
                        }"
                      >
                        {{ item.reference }}</router-link
                      >
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <template v-if="item.personalInformation.firstName">
                        {{ item.personalInformation.firstName }}
                        {{ item.personalInformation.lastName }}
                      </template>
                      <template v-else>
                        <span class="text-gray-400 font-semibold"
                          >(Not Set)</span
                        >
                      </template>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      <template v-if="item.contactInformation.email">
                        {{ item.contactInformation.email }}
                      </template>
                      <template v-else>
                        <span class="text-gray-400 font-semibold"
                          >(Not Set)</span
                        >
                      </template>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <button
                        @click.prevent="deleteProfile(item.reference)"
                        class="text-red-600 hover:text-indigo-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-else>
              <div class="flex justify-center items-center gap-x-4">
                <i class="fad fa-file-search text-yellow-400 text-[100px]"></i>

                <button
                  @click.prevent="make($router)"
                  class="text-gray-600 underline decoration-yellow-500"
                >
                  Click here to Create a Profile
                </button>
              </div>
              <p class="text-center py-4 text-gray-500">
                Provide your information to enable us process your destination
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div>
      <button class="btn bg-yellow-500" @click="make($router)">
        Add profile
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import {
  deleteProfile,
  getAllProfiles,
  makeProfile,
} from "../../http/account.Service";
import { useRoute, useRouter } from "vue-router";
// const allProfiles = ref<profileTypes[]>([]);

const { allProfiles, isLoading, fetch } = getAllProfiles();

onMounted(fetch);

const router = useRouter();
const { make } = makeProfile();
</script>
