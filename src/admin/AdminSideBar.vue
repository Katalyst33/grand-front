<template>
  <div>
    <TransitionRoot as="template" :show="appState.sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="appState.sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="
              relative
              flex-1 flex flex-col
              max-w-xs
              w-full
              pt-5
              pb-4
              bg-gray-800
            "
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-white
                  "
                  @click="appState.sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>

            <div class="flex-shrink-0 flex items-center px-4">
              <CompanyLogo :app-state="appState" :text-color="'text-white'" />
            </div>
            <div
              class="
                mt-5
                flex-1 flex flex-col
                justify-between
                h-0
                overflow-y-auto
              "
            >
              <nav class="px-2 space-y-1">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="{ name: item.href }"
                  :class="[
                    route.name === item.href
                      ? 'bg-yellow-100 text-black'
                      : 'text-white hover:bg-yellow-100 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-base  rounded-md',
                  ]"
                >
                  <component
                    :is="null"
                    :class="[
                      route.name === item.href
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-4 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  <i class="pr-4" :class="item.icon"></i>
                  {{ item.name }}
                </router-link>
                <div
                  class="space-y-4 pt-2"
                  v-if="appState.user.role === 'admin'"
                >
                  <router-link
                    :to="{ name: 'Configuration' }"
                    class="text-white pl-2 text-sm font-medium block"
                    ><i class="fad fa-cogs pr-3"></i>Configuration
                  </router-link>
                  <button
                    @click.prevent="logOutUser"
                    class="flex items-center pl-2 text-sm font-medium block"
                  >
                    <i class="fad fa-power-off text-lg text-red-500 pr-2"></i>

                    <span class="text-white"> Log Out </span>
                  </button>
                </div>
              </nav>
              <nav class="flex-shrink-0 flex">
                <MenuActions />
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="
          flex flex-col flex-grow
          border-r border-gray-200
          pt-5
          bg-gray-800
          overflow-y-auto
        "
      >
        <div class="flex items-center flex-shrink-0 px-4">
          <CompanyLogo :app-state="appState" :text-color="'text-white'" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
          <nav class="flex-1 px-2 pb-4 space-y-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="{ name: item.href }"
              :class="[
                route.name === item.href
                  ? 'bg-yellow-100 text-black'
                  : 'text-white hover:bg-yellow-100 hover:text-gray-900',
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
            <div class="space-y-4 pt-2" v-if="appState.user.role === 'admin'">
              <router-link
                :to="{ name: 'Configuration' }"
                class="text-white pl-2 text-sm font-medium block"
                ><i class="fad fa-cogs pr-3"></i>Configuration
              </router-link>
            </div>
            <button
              @click.prevent="logOutUser"
              class="flex items-center pl-2 pt-2 text-sm font-medium block"
            >
              <i class="fad fa-power-off text-lg text-red-500 pr-2"></i>

              <span class="text-white"> Log Out </span>
            </button>
          </nav>

          <nav>
            <div class="px-6 text-red-400">
              <!--              footer option-->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { FolderIcon, HomeIcon, UsersIcon, XIcon } from "@heroicons/vue/outline";
import { appState, logOutUser } from "../store/store";
import { useRoute } from "vue-router";
import MenuActions from "./MenuActions.vue";
import LogOutComponent from "../components/LogOutComponent.vue";
import CompanyLogo from "../CompanyLogo.vue";

const navigation = [
  {
    name: "Dashboard",
    href: "AdminDashboard",
    icon: "fad fa-tachometer-alt-fast",
  },
  {
    name: "Users",
    href: "AllUsers",
    icon: "fad fa-users",
  },
  {
    name: "Destinations",
    href: "AllDestinationX",
    icon: "fad fa-globe-americas",
  },
  {
    name: "Gallery",
    href: "GalleryFiles",
    icon: "fal fa-photo-video",
  },
];

export default {
  components: {
    CompanyLogo,
    LogOutComponent,
    MenuActions,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },

  setup() {
    const route = useRoute();

    const sidebarOpen = ref(appState.sidebarOpen);

    return {
      appState,
      route,
      navigation,
      sidebarOpen,
      logOutUser,
    };
  },
};
</script>
