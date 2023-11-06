<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-if="isLoaded" class="flex flex-col">
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
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No.
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Seen
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  joined
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in allUsers" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs">
                    {{ index + 1 }}.
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <i class="fal fa-user-circle text-gray-400 text-3xl"></i>

                    <!--                    <div class="flex-shrink-0 h-10 w-10">
                                            <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""
                      />
                    </div>-->
                    <div class="ml-4">
                      <div class="flex text-sm text-gray-500">
                        <router-link
                          :to="{
                            name: 'UserProfiles',
                            params: { userId: item.uuid },
                          }"
                          class="font-medium text-yellow-500"
                          >{{ item.email }}</router-link
                        >
                        <div class="pl-2">
                          <template v-if="item.role === 'admin'">
                            <i class="fad fa-user-cog text-red-500"></i>
                          </template>
                          <template v-if="item.role === 'staff'">
                            <i class="fas fa-user-tie"></i>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div v-if="item.lastSeenAt" class="text-sm text-gray-500">
                    {{ formattedDate(item.lastSeenAt) }}
                  </div>
                  <div v-else>Never</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="text-sm text-gray-500">
                    {{ formattedDate(item.createdAt) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getAllUsers } from "../../http/admin.Service";
import { formattedDate } from "../../../export";

const { allUsers, isLoaded, fetch } = getAllUsers();

onMounted(fetch);
</script>
