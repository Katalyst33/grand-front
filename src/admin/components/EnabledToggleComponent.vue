<template>
  <div></div>

  <Switch
    class="mt-2"
    v-model="destination.enabled"
    :class="[
      destination.enabled ? 'bg-yellow-600' : 'bg-gray-200',
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
    ]"
  >
    <span
      :class="[
        destination.enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    >
      <span
        :class="[
          destination.enabled
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <i class="far fa-star text-gray-300"> </i>
      </span>
      <span
        :class="[
          destination.enabled
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <i class="far fa-star text-yellow-500"> </i>
      </span>
    </span>
  </Switch>
</template>
<script lang="ts">
import { Switch } from "@headlessui/vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Switch,
  },
  name: "EnabledToggleComponent",
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },
});
</script>
