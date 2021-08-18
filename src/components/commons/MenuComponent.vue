<template>
  <div>
    <section>
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
            </div>
            <div
              class="
                flex-1 flex
                items-center
                justify-center
                sm:items-stretch sm:justify-start
              "
            >
              <div class="flex-shrink-0 flex items-center">
                <router-link :to="{ name: 'Home' }">
                  <AppLogo class="block lg:hidden" />
                </router-link>
                <div class="hidden lg:block flex justify-center">
                  <router-link :to="{ name: 'Home' }">
                    <div class="flex items-center">
                      <AppLogo />
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div
              class="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                pr-2
                sm:static sm:inset-auto sm:ml-6 sm:pr-0
              "
            >
              <!-- Desktop page links -->
              <div class="hidden sm:block sm:ml-6">
                <div class="flex items-center space-x-4">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="{ name: item.href }"
                    class="text-white menu-links"
                    active-class="active"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</router-link
                  >
                  <button
                    @click="logOut"
                    class="bg-red-500 p-2 rounded-md text-white"
                  >
                    Logout
                  </button>

                  <router-link :to="{ name: 'UserDashboard' }"
                    >User profile</router-link
                  >
                  <router-link :to="{ name: 'AdminDashboard' }"
                    >AdminAll users</router-link
                  >
                </div>
              </div>
              <!-- Desktop page links -->
            </div>
          </div>
        </div>

        <!--    mobiul menu pages links-->
        <DisclosurePanel class="sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col text-gray-100">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="{ name: item.href }"
              active-class="active"
              class="
                hover:bg-gray-700 hover:text-white
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
              "
              >{{ item.name }}</router-link
            >
          </div>
        </DisclosurePanel>
        <!--    mobiul menu pages links-->
      </Disclosure>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import AppLogo from "../../AppLogo.vue";
import { logOutUser } from "../../store/store";
import { useRouter } from "vue-router";

const navigation = [
  { name: "Home", href: "Home", current: true },
  { name: "Our Services ", href: "Service", current: false },
  { name: "Deals", href: "Deals", current: false },
  { name: "Login", href: "Login", current: false },
  { name: "Signup", href: "Register", current: false },
];
export default defineComponent({
  name: "MenuComponent",
  components: {
    AppLogo,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },

  setup() {
    const open = ref(true);
    const router = useRouter();

    function logOut() {
      logOutUser();
    }

    return {
      navigation,
      open,
      logOut,
    };
  },
});
</script>

<style scoped>
.active {
  @apply bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium;
}
.menu-links {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;
}

.mobile-menu {
  @apply bg-gray-900;
}
</style>
