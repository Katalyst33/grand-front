<template>
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
        class="
          flex flex-col flex-grow
          border-r border-gray-200
          pt-5
          bg-white
          overflow-y-auto
        "
    >
      <div class="flex items-center flex-shrink-0 px-4">
        <CompanyLogo :app-state="appState" :text-color="'text-black'"/>
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <nav class="flex-1 px-2 pb-4 space-y-1">
          <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="{ name: item.href }"
              :class="[
                route.name === item.href
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
          >
            <component
                :is="null"
                :class="[
                  route.name === item.href
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
            />
            <i class="pr-3" :class="item.icon"></i>

            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import CompanyLogo from "../CompanyLogo.vue"

export default {
  name: 'UserSideBar',
  components: {CompanyLogo},
  props: {
    appState: {},
    navigation: {},
    route: {}
  }
}
</script>