<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-yellow-50">
    <div
      class="absolute inset-0 shadow z-30 pointer-events-none"
      aria-hidden="true"
    />
    <div class="relative z-20">
      <div
        class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10"
      >
        <div>
          <a href="#" class="flex">
            <span class="sr-only">Workflow</span>
            <CompanyLogo :app-state="appState" :text-color="textColor" />
          </a>
        </div>
        <div class="flex items-center pr-4 gap-x-4 -mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-yellow-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
          <!--                    <MyDestinationCart />-->
          <CartIcon class="pr-4" />
        </div>

        <div
          class="hidden md:flex-1 md:flex md:items-center md:justify-between"
        >
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group  rounded-md inline-flex items-center text-base font-medium hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-50',
                ]"
              >
                <span>Services</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-yellow-500' : 'text-yellow-400',
                    'ml-2 h-5 w-5 group-hover:text-yellow-500',
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
                  class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-yellow-50"
                >
                  <div
                    class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-yellow-100"
                    >
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-yellow-500 text-white sm:h-12 sm:w-12"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div
                          class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4"
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
                            class="mt-2 text-sm font-medium text-yellow-600 lg:mt-4"
                          >
                            Learn more <span aria-hidden="true">&rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-yellow-50">
                    <div
                      class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8"
                    >
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root"
                      >
                        <a
                          :href="item.href"
                          class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-700"
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

            <router-link
              :to="{ name: 'Destinations' }"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Destinations
            </router-link>
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-yellow-900' : 'text-gray-500',
                  'group rounded-md focus:text-yellow-600 inline-flex items-center text-base font-medium hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-50 ',
                ]"
              >
                <span>More</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-yellow-500' : 'text-yellow-400',
                    'ml-2 h-5 w-5 group-hover:text-yellow-500',
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
                  class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg"
                >
                  <div class="absolute inset-0 flex">
                    <div class="bg-yellow-50 w-1/2" />
                    <div class="bg-yellow-50 w-1/2" />
                  </div>
                  <div
                    class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2"
                  >
                    <nav
                      class="grid gap-y-10 px-4 py-8 bg-yellow-50 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase"
                        >
                          Company
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in company"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-100"
                            >
                              <component
                                :is="item.icon"
                                class="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase"
                        >
                          Resources
                        </h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li
                            v-for="item in resources"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-yellow-100"
                            >
                              <component
                                :is="item.icon"
                                class="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div
                      class="bg-yellow-100 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12"
                    >
                      <div>
                        <h3
                          class="text-sm font-medium tracking-wide text-gray-500 uppercase"
                        >
                          Top Destinations
                        </h3>
                        <ul role="list" class="mt-6 space-y-6">
                          <li
                            v-for="(destination, index) in menuPromoted.slice(
                              0,
                              3
                            )"
                            :key="index"
                            class="flow-root"
                          >
                            <router-link
                              :to="{
                                name: 'ViewDestinationPage',
                                params: { destinationId: destination.uuid },
                              }"
                              class="-m-3 p-3 flex rounded-lg hover:bg-yellow-100"
                            >
                              <div class="hidden sm:block flex-shrink-0">
                                <img
                                  class="w-32 h-20 object-cover rounded-md"
                                  :src="destination.image"
                                  alt=""
                                />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <h4
                                  class="text-base font-medium text-gray-900 truncate"
                                >
                                  {{ destination.country.name }}
                                </h4>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ destination.title }}
                                </p>
                                <p
                                  class="mt-3 text-base text-yellow-600 text-2xl"
                                >
                                  $ {{ formatPrice(destination.price) }}
                                </p>
                              </div>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <router-link
                          :to="{ name: 'Destinations' }"
                          class="text-yellow-600 hover:text-yellow-500"
                        >
                          View all Destinations
                          <span aria-hidden="true">&rarr;</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>

          <template v-if="appState.user?.role">
            <div class="flex items-center space-x-6">
              <template v-if="appState.user?.role !== 'user'">
                <router-link
                  :to="{ name: 'AdminDashboard' }"
                  class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-400"
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
          <div v-else class="flex items-center md:ml-12">
            <router-link
              :to="{ name: 'Login' }"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </router-link>
            <router-link
              :to="{ name: 'Register' }"
              class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"
            >
              Sign up
            </router-link>
          </div>
        </div>
        <div class="hidden md:block">
          <MyDestinationCart />
          <!--          <CartIcon />-->
          <!--          <button @click.prevent="appState.showCart = true">here</button>-->
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
        class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-yellow-50 divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <CompanyLogo :app-state="appState" :text-color="textColor" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
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
                    class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-500 text-white sm:h-12 sm:w-12"
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
                    View all Destinations
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
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Fees
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Privacy
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Company
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Resources
              </a>

              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact Us
              </a>
            </div>
            <div class="mt-6">
              <template v-if="appState.user?.role">
                <div class="flex items-center space-x-6">
                  <template v-if="appState.user?.role !== 'user'">
                    <router-link
                      :to="{ name: 'AdminDashboard' }"
                      class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-400"
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
                <router-link
                  :to="{ name: 'Register' }"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"
                >
                  Sign up
                </router-link>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Registered User?
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
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
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
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import CompanyLogo from "../CompanyLogo.vue";
import { appState } from "../store/store";
import { ref } from "vue";
import LogOutComponent from "../components/LogOutComponent.vue";
import { destinationStore } from "../store/destinationStore";
import { formatPrice, localStore } from "../../export";

import MyDestinationCart from "../components/MyDestinationCart.vue";
import CartIcon from "../components/CartIcon.vue";

const solutions = [
  {
    name: "Airport Pick up",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Tour guide",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Hotel Reservations",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const callsToAction = [
  { name: "View All Destinations", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About", href: "#", icon: InformationCircleIcon },
  { name: "Testimony", href: "#", icon: OfficeBuildingIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const resources = [
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookmarkAltIcon },
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
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];
const textColor = ref("text-gray-600 md:hidden  lg:block");

const menuPromoted = localStore.getArray("promotedDestinations");
</script>
