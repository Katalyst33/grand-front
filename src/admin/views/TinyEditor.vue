<template>
  <div class="bg-red-500 p-4">
    <h1>Tiny Editor</h1>
    <Editor
      :api-key="tiny.apiKey"
      :init="{
        height: 300,
        menubar: false,
        plugins: tiny.editorPlugins,
        toolbar: tiny.editorToolbar,
      }"
      :value="modelValue"
      model-events="change keydown blur focus paste"
      @blur="updateValue($event.target)"
    />
    <!--
        @blur="$emit('update:modelValue', modelValue)"

  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
    />-->
  </div>
</template>
<script>
import Editor from "@tinymce/tinymce-vue";
import { watch } from "vue";

export default {
  name: "TinyEditor",
  components: {
    Editor,
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit, attrs }) {
    watch(props, function (newValue, oldValue) {
      console.log("ran");
    });
    const tiny = {
      apiKey: import.meta.env.VITE_TINY_KEY,
      editorPlugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table paste code help wordcount",
      ],
      editorToolbar: [
        "undo redo | formatselect | bold italic backcolor | \
                 alignleft aligncenter alignright alignjustify | \
                 bullist numlist outdent indent | removeformat | help |code",
      ],
    };

    function updateValue(e) {
      console.log("updateValue", e);
    }

    return {
      tiny,
      updateValue,
    };
  },
};
</script>
<style scoped>
/* on mobile browsers, I set a width of 100% */

/* on large screens, I use a different layout, so 600px are sufficient */
@media only screen and (min-width: 600px) {
}
</style>
