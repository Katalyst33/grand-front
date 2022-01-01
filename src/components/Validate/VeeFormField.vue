<template>
  <div>
    <label :for="name" class="form-label">{{ label }}:</label>
    <div class="mt-1">
      <VeeField
        :name="name"
        :label="label"
        :modelValue="modelValue"
        @input="$emit('modelUpdate', $event)"
        :class="className"
        :placeholder="placeholder"
        :id="name"
        v-bind="$attrs"
        :type="type"
      />
    </div>
    <VeeErrorMessage class="input-error-msg" :name="name" />
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    className: {
      type: String,
      default: "input-box",
    },
    name: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
