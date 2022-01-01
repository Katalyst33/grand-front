<script lang="ts" setup>
import AdminSideBar from "../admin/AdminSideBar.vue";
import { appState } from "../store/store";
</script>
<template>
  <div id="appX">
    <AdminSideBar />
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="appState.sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>

          <i class="fad fa-bars"></i>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <i class="far fa-search"></i>
                </div>
                <input
                  id="search-field"
                  class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View notifications</span>
              <i class="far fa-bell"></i>
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <router-link
                      :to="{ name: item.href }"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</router-link
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div>
              <h1 class="text-xl pb-2 text-gray-500">
                {{ $route.meta.title }}
              </h1>
            </div>

            <router-view class="h-screen my-auto"></router-view>

            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { logOutUser } from "../store/store";
import LogOutComponent from "../components/LogOutComponent.vue";
import { getOneDestinationX } from "../store/destinationStore";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useRoute, useRouter } from "vue-router";
const userNavigation = [
  { name: "Your Profile", href: "UserDashboard" },
  { name: "Configuration", href: "Configuration" },
];
export default defineComponent({
  name: "AdminLayout",
  components: { LogOutComponent, Menu, MenuButton, MenuItem, MenuItems },

  setup() {
    console.log(useRoute().name, "dd");
    console.log(useRouter().currentRoute.value, "gdfhgjhk");

    const route = useRoute();
    const currentRoute = computed(() => {
      console.log(useRoute().name, "route");
      console.log(useRouter().currentRoute.value, "");

      return useRoute().name;
    });
    console.log(route.name, "ho??");
    return { logOutUser, currentRoute, userNavigation };
  },
});
</script>

<style>
#appX {
  @apply bg-yellow-50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.form-label {
  @apply text-lg;
}

.form-input {
  @apply shadow-sm
  focus:ring-yellow-500 focus:border-yellow-500

  block
  w-full
  sm:text-sm
  border-gray-300
  rounded-sm;
}
</style>
