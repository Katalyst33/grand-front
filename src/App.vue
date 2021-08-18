<template>
  <MenuComponent />
  <Navigator />
  <div class="container mx-auto">
    <router-view />
  </div>

  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MenuComponent from "./components/commons/MenuComponent.vue";
import FooterSection from "./FooterSection.vue";
import Navigator from "./Navigator.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigator,
    FooterSection,
    MenuComponent,
    HelloWorld,
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "assets/scss/input-buttons";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-yellow-50;
}

.title-2 {
  @apply text-3xl font-extrabold;
}

.regular {
  @apply text-sm;
}

.regular-faded {
  @apply text-sm;
}

.big-font {
  font-family: bigJohn;
}

@font-face {
  font-family: bigJohn;
  src: url("./fonts/BIG-JOHN.woff");
}
</style>
