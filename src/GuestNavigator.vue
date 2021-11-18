<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <Popover class="relative bg-yellow-50">
      <div
        class="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />

      <div class="relative z-20">
        <div
          class="
            max-w-7xl
            mx-auto
            flex
            justify-between
            items-center
            px-4
            py-5
            sm:px-6 sm:py-4
            lg:px-8
            md:justify-start md:space-x-10
          "
        >
          <div>
            <span class="sr-only">company Name</span>

            <CompanyLogo :app-state="appState" :text-color="textColor" />
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <!--          mobile menu open-->
            <PopoverButton
              class="
                bg-yellow-600
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-white
                hover:text-white hover:bg-red-500
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-yellow-500
              "
              @click="closeMenu(true)"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <div
            class="hidden md:flex-1 md:flex md:items-center md:justify-between"
          >
            <PopoverGroup as="nav" class="flex space-x-10">
              <Popover v-slot="{ open }">
                <PopoverButton
                  :class="[
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-yellow-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
                  ]"
                >
                  <span>Services</span>
                  <ChevronDownIcon
                    :class="[
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500',
                    ]"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <PopoverPanel
                    class="
                      hidden
                      md:block
                      absolute
                      z-10
                      top-full
                      inset-x-0
                      transform
                      shadow-lg
                      bg-white
                    "
                  >
                    <div
                      class="
                        max-w-7xl
                        mx-auto
                        grid
                        gap-y-6
                        px-4
                        py-6
                        sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8
                        lg:grid-cols-4 lg:px-8 lg:py-12
                        xl:py-16
                      "
                    >
                      <a
                        v-for="item in solutions"
                        :key="item.name"
                        :href="item.href"
                        class="
                          -m-3
                          p-3
                          flex flex-col
                          justify-between
                          rounded-lg
                          hover:bg-gray-50
                        "
                      >
                        <div class="flex md:h-full lg:flex-col">
                          <div class="flex-shrink-0">
                            <span
                              class="
                                inline-flex
                                items-center
                                justify-center
                                h-10
                                w-10
                                rounded-md
                                bg-yellow-500
                                text-white
                                sm:h-12 sm:w-12
                              "
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div
                            class="
                              ml-4
                              md:flex-1 md:flex md:flex-col md:justify-between
                              lg:ml-0 lg:mt-4
                            "
                          >
                            <div>
                              <p class="text-base font-medium text-gray-900">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ item.description }}
                              </p>
                            </div>
                            <p
                              class="
                                mt-2
                                text-sm
                                font-medium
                                text-yellow-600
                                lg:mt-4
                              "
                            >
                              Learn more <span aria-hidden="true">&rarr;</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="bg-gray-50">
                      <div
                        class="
                          max-w-7xl
                          mx-auto
                          space-y-6
                          px-4
                          py-5
                          sm:flex sm:space-y-0 sm:space-x-10 sm:px-6
                          lg:px-8
                        "
                      >
                        <div
                          v-for="item in callsToAction"
                          :key="item.name"
                          class="flow-root"
                        >
                          <a
                            :href="item.href"
                            class="
                              -m-3
                              p-3
                              flex
                              items-center
                              rounded-md
                              text-base
                              font-medium
                              text-gray-900
                              hover:bg-gray-100
                            "
                          >
                            <component
                              :is="item.icon"
                              class="flex-shrink-0 h-6 w-6 text-gray-400"
                              aria-hidden="true"
                            />
                            <span class="ml-3">{{ item.name }}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
              <router-link
                :to="{ name: 'Destinations' }"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Deals
              </router-link>
            </PopoverGroup>
            <div class="flex items-center md:ml-12">
              <div class="bg-red-500 p-4">
                {{ searchDestinationStore }}
              </div>

              <button @click="isSearching" class="p-2">
                <svg
                  class="text-yellow-900 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    d="M21.8 20.6 17.7 16c1.2-1.4 1.9-3.2 2-5 .1-2.1-.5-4.2-1.8-5.8s-3.2-2.8-5.2-3.1c-2-.4-4.2 0-6 1.1C5 4.2 3.6 5.9 3 7.9s-.5 4.2.4 6.1c.8 1.9 2.4 3.4 4.3 4.3s4.1 1 6.1.4c.4-.1.7-.6.5-1-.1-.4-.6-.7-1-.5-1.6.5-3.4.4-4.9-.3-1.5-.7-2.8-1.9-3.5-3.5-.8-1.6-.8-3.4-.3-5s1.6-3 3-3.8c1.4-.9 3.2-1.2 4.8-.9s3.2 1.2 4.2 2.5 1.6 3 1.5 4.7-.8 3.3-2 4.5c-.3.3-.3.8.1 1.1l5.2 4.6c.2.1.4.1.5 0s.1-.4-.1-.5z"
                  />
                </svg>
              </button>

              <!--            //user action-->
              <template v-if="appState.user?.role">
                <div class="flex items-center space-x-6">
                  <template v-if="appState.user?.role !== 'user'">
                    <router-link
                      :to="{ name: 'AdminDashboard' }"
                      class="
                        ml-8
                        inline-flex
                        items-center
                        justify-center
                        px-4
                        py-2
                        border border-transparent
                        rounded-md
                        shadow-sm
                        text-base
                        font-medium
                        text-white
                        bg-red-500
                        hover:bg-red-400
                      "
                    >
                      <i class="far fa-user-circle pr-2"></i> Manager
                    </router-link>
                  </template>
                  <template v-else>
                    <router-link
                      :to="{ name: 'UserDashboard' }"
                      class="ml-8 btn-user-dash"
                    >
                      <i class="far fa-user-circle pr-2"></i> Dashboard
                    </router-link>
                  </template>
                  <LogOutComponent />
                </div>
              </template>
              <div v-else>
                <div>
                  <router-link
                    :to="{ name: 'Login' }"
                    class="
                      text-base
                      font-medium
                      text-gray-500
                      hover:text-gray-900
                    "
                  >
                    Sign in
                  </router-link>
                  <router-link
                    :to="{ name: 'Register' }"
                    href="#"
                    class="
                      ml-8
                      inline-flex
                      items-center
                      justify-center
                      px-4
                      py-2
                      border border-transparent
                      rounded-md
                      shadow-sm
                      text-base
                      font-medium
                      text-white
                      bg-yellow-600
                      hover:bg-yellow-700
                    "
                  >
                    Sign up
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="
            absolute
            z-30
            top-0
            inset-x-0
            p-2
            transition
            transform
            origin-top-right
            md:hidden
          "
        >
          <div
            v-if="!appState.showMobileMenu"
            class="
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
              bg-red-50
              divide-y-2 divide-gray-50
            "
          >
            <div class="pt-5 pb-6 px-5 sm:pb-8">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="
                      bg-yellow-600
                      text-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-yellow-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-yellow-500
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <i
                      @click="closeMenu(false)"
                      class="fas fa-times text-2xl text-white px-1"
                    ></i>
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6 sm:mt-8">
                <nav>
                  <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        flex
                        items-center
                        p-3
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <div
                        class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          h-10
                          w-10
                          rounded-md
                          bg-yellow-500
                          text-white
                          sm:h-12 sm:w-12
                        "
                      >
                        <component
                          :is="item.icon"
                          class="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </div>
                    </a>
                  </div>
                  <div class="mt-8 text-base">
                    <a
                      href="#"
                      class="font-medium text-yellow-600 hover:text-yellow-500"
                    >
                      View all products
                      <span aria-hidden="true">&rarr;</span></a
                    >
                  </div>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  class="
                    rounded-md
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Pricing
                </a>

                <router-link
                  :to="{ name: 'Deals' }"
                  href="#"
                  class="
                    rounded-md
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Deals
                </router-link>

                <a
                  href="#"
                  class="
                    rounded-md
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Company
                </a>

                <a
                  href="#"
                  class="
                    rounded-md
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Resources
                </a>

                <a
                  href="#"
                  class="
                    rounded-md
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Blog
                </a>

                <a
                  href="#"
                  class="
                    rounded-md
                    text-base
                    font-medium
                    text-gray-900
                    hover:text-gray-700
                  "
                >
                  Contact Sales
                </a>
              </div>
              <div class="mt-6">
                <router-link
                  :to="{ name: 'Register' }"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    border border-transparent
                    rounded-md
                    shadow-sm
                    text-base
                    font-medium
                    text-white
                    bg-yellow-600
                    hover:bg-yellow-700
                  "
                >
                  Sign up
                </router-link>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  {{ " " }}
                  <router-link
                    :to="{ name: 'Login' }"
                    class="text-yellow-600 hover:text-yellow-500"
                  >
                    Sign in
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script lang="ts" setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import AppLogo from "./AppLogo.vue";
import CompanyLogo from "./CompanyLogo.vue";
import { appState, closeMenu, logOutUser } from "./store/store";
import { ref, watch } from "vue";
import LogOutComponent from "./components/LogOutComponent.vue";
import { isSearching, searchDestinationStore } from "./store/destinationStore";

const solutions = [
  {
    name: "Visa Arrangements",
    description:
      "Get a better understanding of what it takes to pass your visa interviews.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Accomodation",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
];
const callsToAction = [
  { name: "View All Products", href: "Destinations", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About", href: "#", icon: InformationCircleIcon },
  { name: "Customers", href: "#", icon: OfficeBuildingIcon },
  { name: "Press", href: "#", icon: NewspaperIcon },
  { name: "Careers", href: "#", icon: BriefcaseIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookmarkAltIcon },
  { name: "Webinars", href: "#", icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
  },
];

const textColor = ref("text-gray-600 md:hidden  lg:block");
</script>
