<template>
  <section>
    <template v-if="props.isLoaded">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              v-if="props.allProfiles.length"
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
                  <tr v-for="(item, index) in props.allProfiles" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {{ index + 1 }}.
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600"
                    >
                      <router-link
                        :to="{
                          name: 'XUserDetail',
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
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-else>
              <div class="flex justify-center items-center gap-x-4">
                <i class="fad fa-file-search text-yellow-400 text-[100px]"></i>
              </div>
              <p class="text-center py-4 text-gray-500">
                User has no profile Set
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
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

const props = defineProps<{
  allProfiles: [];
  isLoaded: boolean;
}>();
</script>
