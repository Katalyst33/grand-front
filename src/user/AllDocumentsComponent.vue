<template>
  <section class="py-10">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            v-if="profileStore.profile.documents.length"
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
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Uploaded
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  v-for="(item, index) in profileStore.profile.documents"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ index + 1 }}.
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ item.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ fileSizes(item.size) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ formattedDate(item.updatedAt) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.category }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <div class="flex gap-x-10">
                      <a href="#" class="text-yellow-600 hover:text-yellow-900"
                        ><i class="far fa-folder-download pr-2"></i>Download</a
                      >
                      <button
                        @click.prevent="deleteDocument(item.referenceId)"
                        href="#"
                        class="text-red-600 hover:text-yellow-900"
                      >
                        <i class="fal fa-trash-alt pr-2"></i>Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-else class="flex justify-center items-center gap-x-4">
            <i class="fad fa-folder-open text-yellow-400 text-[100px]"></i>

            <h4 class="text-gray-600">Please upload a document</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { $axios } from "../http/http.Service";
import { profileStore } from "../store/profileStore";
import { fileSizes, formattedDate } from "../../export";
import { useRoute } from "vue-router";
import { fetchProfile } from "../http/account.Service";

export default {
  setup() {
    const route = useRoute();
    function deleteDocument(referenceId: string) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this document?, this will delete all uploaded documents as well"
      );
      if (confirmDelete) {
        $axios
          .delete(`/profile/upload/${referenceId}/document`)
          .then((r) => {
            fetchProfile(route.params.referenceId).fetch();

            console.log(r);
          })
          .catch((e) => console.log(e));
      }
    }
    return {
      profileStore,
      deleteDocument,
      fileSizes,
      formattedDate,
    };
  },
};
</script>
