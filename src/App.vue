<template>

  <MenuComponent />
  <router-view/>

  <FooterSection />

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MenuComponent from "./components/commons/MenuComponent.vue";
import  store from "./store/store"
import FooterSection from "./FooterSection.vue";
import {$axios} from "./http";

export default defineComponent({
  name: 'App',
  components: {
    FooterSection,
    MenuComponent,
    HelloWorld
  },

  setup(){


console.log('where are u')

    return{
      store,
    }
  },
  provide: {store}

})
</script>

<style lang="scss">

@import "../src/assets/scss/buttons";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-yellow-50
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

.big-font{
  font-family: bigJohn ;
}

@font-face {
  font-family:bigJohn;
  src:url('./fonts/BIG-JOHN.woff')
}



</style>
