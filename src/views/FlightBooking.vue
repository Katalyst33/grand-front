<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import AirportSelector from "../components/AirportSelector.vue";
import { $axios } from "../http/http.Service";
import LoadingComponent from "../admin/views/LoadingComponent.vue";

const tripTypes = { "one-way": "One-way", "round-trip": "Round trip" };
type tripTypes = keyof typeof tripTypes;

const travelClass = {
  ECONOMY: "Economy",
  PREMIUM_ECONOMY: "Premium Economy",
  BUSINESS: "Business",
  FIRST: "First",
};

const FourDaysFromNow = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
const isSearching = ref(false);
const form = reactive({
  type: "one-way" as tripTypes,
  travelClass: "ECONOMY" as keyof typeof travelClass | undefined,
  from: "LOS",
  to: "ABV",
  // Departure date is 4 days from now
  departureDate: new Date(FourDaysFromNow).toISOString().slice(0, 10),
  arrivalDate: undefined,
  adults: 1,
  children: 0,
  infants: 0,
});

const passengersCount = computed(() => {
  return form.adults + form.children + form.infants;
});

const searchResults = ref<any>();

function search() {
  isSearching.value = true;
  $axios
    .post("/flights/search", form)
    .then((res) => {
      searchResults.value = res.data;
    })
    .finally(() => {
      isSearching.value = false;
    });
}

onMounted(search);

const summary = computed(() => {
  if (!searchResults.value) return undefined;
  let flights = [] as any[];
  for (const flight of searchResults.value.data) {
    const segments = flight.itineraries[0].segments;
    const flightDurationString = formatISODuration(
      flight.itineraries[0].duration
    );
    const firstSegment = segments[0];
    const lastSegment = segments[segments.length - 1];
    const carriers = {} as Record<string, string>;
    const dictionaries = searchResults.value.dictionaries;

    // populate carriers
    // key - carrier code
    // value - carrier name (from dictionary)
    for (const segment of segments) {
      carriers[segment.carrierCode] =
        dictionaries.carriers[segment.carrierCode];
    }

    const flightObj = {
      id: flight.id,
      nonStop: segments.length === 1,
      currency: flight.price.currency,
      price: flight.price.grandTotal,
      carrier: firstSegment.carrierCode,
      departure: {
        airport: firstSegment.departure.iataCode,
        city: firstSegment.departure.cityName,
        time: firstSegment.departure.at,
      },
      arrival: {
        airport: lastSegment.arrival.iataCode,
        city: lastSegment.arrival.cityName,
        time: lastSegment.arrival.at,
      },
      flightDuration: flightDurationString,
      carriers,
      // segments,
    };

    flights.push(flightObj);
  }
  return {
    total: searchResults.value.meta.count,
    flights,
  };
});

function formatISODuration(duration: string) {
  const match = duration.match(
    /P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
  );

  if (!match) {
    return "Invalid duration";
  }

  const days = match[1] ? `${match[1]} days ` : "";
  const hours = match[2] ? `${match[2]} hours ` : "";
  const minutes = match[3] ? `${match[3]} minutes ` : "";
  const seconds = match[4] ? `${match[4]} seconds` : "";

  return (days + hours + minutes + seconds)
    .replace(/ hours? /, "h ")
    .replace(/ minutes?/, "m")
    .trim();
}

function formatAMPM(date: string | Date) {
  if (typeof date === "string") date = new Date(date);
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
}
</script>
<template>
  <section class="my-20">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white p-3 border rounded-md mb-5 shadow">
        <h4 class="text-xl font-bold">
          Flight Booking
          <span v-if="passengersCount > 1"
            >({{ passengersCount }}
            {{ passengersCount > 1 ? "passengers" : "passenger" }})</span
          >
        </h4>

        <ul class="tabs">
          <template v-for="(val, key) of tripTypes">
            <li
              :class="{
             active: form.type === key as tripTypes
           }"
            >
              <button
                @click="() => {
              form.type= key as tripTypes
           }"
              >
                {{ val }}
              </button>
            </li>
          </template>
        </ul>

        <form @submit.prevent="() => search()" class="form mt-5">
          <div>
            <label>From</label>
            <AirportSelector v-model="form.from" />
          </div>

          <div>
            <label>To</label>
            <AirportSelector v-model="form.to" />
          </div>

          <div>
            <label>Class</label>
            <select class="block" v-model="form.travelClass">
              <option :value="undefined">Any</option>
              <template v-for="(val, key) of travelClass" :key="key">
                <option :value="key">{{ val }}</option>
              </template>
            </select>
          </div>

          <div>
            <label>Depart</label>
            <input type="date" v-model="form.departureDate" />
          </div>

          <div>
            <label>Return</label>
            <input type="date" v-model="form.arrivalDate" />
          </div>

          <div>
            <label>Adults</label>
            <input
              class="max-w-[100px]"
              type="number"
              v-model="form.adults"
              min="1"
              max="9"
            />
          </div>

          <div>
            <label>Children</label>
            <input
              class="max-w-[100px]"
              type="number"
              v-model="form.children"
              min="0"
              max="8"
            />
          </div>

          <div>
            <label>Infants</label>
            <input
              class="max-w-[100px]"
              type="number"
              v-model="form.infants"
              min="0"
              max="8"
            />
          </div>

          <div>
            <label class="opacity-0">hidden</label>
            <button
              type="submit"
              class="bg-yellow-500 font-bold text-white py-3 px-5 rounded-sm block"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <LoadingComponent v-if="isSearching"></LoadingComponent>

      <div
        v-else-if="summary"
        class="bg-white p-3 border rounded-md mb-5 shadow"
      >
        <h4 class="text-xl font-bold">Search Results</h4>

        <div class="table-container mt-10">
          <table class="table">
            <thead>
              <tr>
                <th>Airline</th>
                <th>NonStop</th>
                <th>From</th>
                <th>To</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="s of summary.flights">
                <tr>
                  <td>
                    {{ s.carriers[s.carrier] }}
                  </td>
                  <td>
                    {{ s.nonStop ? "yes" : "no" }}
                  </td>
                  <td>
                    <span class="flex space-x-3">
                      <span>{{ s.departure.airport }}</span>
                      <span class="font-medium"
                        >({{ formatAMPM(s.departure.time) }})</span
                      >
                    </span>
                  </td>
                  <td>
                    <span class="flex space-x-3">
                      <span>{{ s.arrival.airport }}</span>
                      <span class="font-medium"
                        >({{ formatAMPM(s.arrival.time) }})</span
                      >
                    </span>
                  </td>
                  <td>{{ s.flightDuration }}</td>
                  <td>
                    <span class="flex space-x-2">
                      <span>{{ s.price }}</span>
                      <span class="font-medium">{{ s.currency }}</span>
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <debug
        :data="{
          form,
          summary,
          // searchResults,
        }"
        class="mt-10"
        use-parent-name
      ></debug>
    </div>

    <DebugDock></DebugDock>
  </section>
</template>

<style lang="scss">
.form {
  @apply flex flex-wrap flex-col md:flex-row gap-3 text-sm items-center;

  input,
  select {
    @apply block;
  }
}

.tabs {
  @apply flex space-x-3 my-2;

  li {
    &.active,
    &:hover {
      @apply border-b-2  border-blue-800;
    }

    button {
      @apply px-2 py-1;
    }
  }
}

table.table {
  @apply min-w-full divide-y divide-gray-200;

  tbody {
    @apply bg-white divide-y divide-gray-500 divide-opacity-20;
  }

  thead > tr > th {
    @apply p-3 bg-gray-100 text-left text-sm font-medium text-gray-700;
  }

  tbody > tr {
    @apply hover:bg-gray-50;

    & > td {
      @apply px-3 py-4 whitespace-nowrap text-gray-600;

      a {
        //&:not(.-font) {
        //  @apply font-medium;
        //}

        &:hover {
          @apply font-medium;
        }
      }
    }
  }

  &.slim {
    tbody > tr > td {
      @apply px-3 py-2.5;
    }
  }
}

.table-container {
  @apply overflow-x-auto;

  &:not(.-curves) {
    @apply md:rounded;
  }

  &:not(.-shadow) {
    @apply shadow-sm;
  }

  &:not(.-border) {
    @apply border border-gray-500 border-opacity-20;
  }
}
</style>
