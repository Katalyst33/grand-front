<template>
  <section>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
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
                    Reference
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
                    Email
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
                    Role
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(item, index) in allProfiles" :key="index">
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-yellow-600
                    "
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    --- name
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    --- email
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ---role
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
    <div>
      <button class="btn bg-yellow-500" @click="makeProfile">
        Add profile
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { $axios } from "../http/http.Service";
import { appState } from "../store/store";
import { ref } from "vue";
import { profileTypes } from "../types";
const allProfiles = ref<profileTypes[]>([]);

function getAllProfiles() {
  $axios.get(`/profile/all-profiles/${appState.user.uuid}`).then((response) => {
    allProfiles.value = response.data;
    console.log(response);
  });
}

getAllProfiles();
function makeProfile() {
  console.log(appState.user.uuid, "");
  $axios
    .post(`/profile/make-profile/${appState.user.uuid}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => err);
}
</script>
