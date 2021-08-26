<template>
  <div>Update the admin</div>

  {{ post }}

  <form>
    <div class="grid grid-cols-3 space-x-4">
      <div class="col-span-2">
        <div class="tileTab">
          <div>
            <label class="form-label">Title:</label>
            <div class="mt-1">
              <input
                v-model="post.title"
                class="form-input"
                placeholder="Title"
                type="text"
              />
            </div>
          </div>
          <div>
            <label class="form-label">Description:</label>
            <div class="mt-1">
              <textarea
                v-model="post.description"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
                placeholder="description"
                :rows="7"
              />
            </div>
          </div>
          <div>
            <label class="form-label">Activity:</label>
            <div class="mt-1">
              <input
                v-model="post.activity"
                class="form-input"
                placeholder="Title"
                type="text"
              />
            </div>
          </div>
          <div>
            <label class="form-label">Included:</label>
            <div class="mt-1">
              <textarea
                v-model="post.included"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
                placeholder="description"
                :rows="7"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="tileTab">
          <div>
            <div>
              <label class="form-label">Country:</label>
              <div class="mt-1">
                <input
                  v-model="post.country"
                  class="form-input"
                  placeholder="Title"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Country Code:</label>
              <div class="mt-1">
                <input
                  v-model="post.countryCode"
                  class="form-input"
                  placeholder="Title"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Date:</label>
              <div class="mt-1">
                <input
                  v-model="post.expiresIn"
                  class="form-input"
                  placeholder="Title"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Title:</label>
              <div class="mt-1">
                <input
                  v-model="post.title"
                  class="form-input"
                  placeholder="Title"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-20">
      <button @click.prevent="UpdateDeal" class="bg-red-500 p-2 rounded-md">
        Update
      </button>
    </div>
  </form>

  <div></div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { getOneDeal, singleDealStore } from "../../store/dealStore";
import { $axios } from "../../http.Service";
import { useRoute } from "vue-router";
import { DealData } from "../../types";

export default defineComponent({
  name: "AddAndUpdateDealX",

  setup() {
    const post = ref<DealData>({});

    const isLoaded = ref(false),
      route = useRoute(),
      deal = ref({});

    const code = computed(() => route.params.dealId);
    function getOneDeal() {
      $axios
        .get(`manager/deals/${code.value}`)
        .then((r) => (post.value = r))
        .catch((e) => e);
    }

    if (route.name === "UpdateDeal") {
      getOneDeal();
    }

    function UpdateDeal() {
      $axios
        .post(`manager/deals/${code.value}`, post.value)
        .then((r) => console.log(r))
        .catch((e) => e);
    }

    return { singleDealStore, post, UpdateDeal };
  },
});
</script>

<style scoped></style>
