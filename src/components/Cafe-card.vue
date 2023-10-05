<script>
export default {
  data() {
    return {
      showBookingModal: false,
      bookingData: {
        name: '',
        tableCount: 0,
      },
    };
  },
};

import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="flex space-x-40 space-y-10 pb-10 items-end border pl-56">
    <div
      class="w-[500px] h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="w-[500px] h-[275px] rounded-t-lg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/6/0/FN_best-coffee-shop-florida-panther-coffee_s4x3.jpg.rend.hgtvcom.966.725.suffix/1475812847866.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Panther Coffee: Miami, Fla.
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Panther Coffee in Miami’s hip Wynwood neighborhood is only a quick 90-minute flight from Guatemala City.
        </p>
        <div class="p-5">
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="showBookingModal = true"
        >
          Booking
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/1"
          >View More</RouterLink>
        </div>
      </div>
    </div>

    <div
      class="w-[500px] h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="w-[500px] h-[275px] rounded-t-lg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/6/1/FN_best-coffee-shop-north-carolina-cocoa-cinnamon_s4x3.jpg.rend.hgtvcom.966.725.suffix/1475812848884.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cocoa Cinnamon: Durham, N.C.
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Cocoa Cinnamon in Durham is a great example, making it a magnet for Duke students who're drawn to the laid-back environment and energizing coffees, which feature unique flavor additions like rose water and black pepper.
        </p>
        <div class="p-5">
        <!-- เพิ่มปุ่ม Booking และ Modal ในตำแหน่งนี้ -->
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="showBookingModal = true"
        >
          Booking
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/2"
          >View More</RouterLink>
      </div>
      </div>
    </div>
    <div
      class="w-[500px] h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="w-[500px] h-[275px] rounded-t-lg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/6/1/FN_best-coffee-shop-maryland-artifact.jpg.rend.hgtvcom.966.725.suffix/1475812848279.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Artifact Coffee: Baltimore, Md.
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Artifact gave away free coffee for three days. While that idea might make the average coffee shop owner's head explode, Artifact isn't the average coffee shop.
        </p>
        <div class="p-5">
        <!-- เพิ่มปุ่ม Booking และ Modal ในตำแหน่งนี้ -->
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="showBookingModal = true"
        >
          Booking
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/3"
          >View More</RouterLink>
      </div>
      </div>
    </div>
  </div>

  <div class="flex space-x-40 space-y-10 pb-10 items-end border pl-56">
    <div
      class="w-[500px] h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="w-[500px] h-[275px] rounded-t-lg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/6/1/FN_best-coffee-shop-louisiana-cafe-du-monde_s4x3.jpg.rend.hgtvcom.966.725.suffix/1475812848422.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cafe du Monde, New Orleans, La.
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            New Orleans is all about tradition, so although you can get an amazing shot at Cherry Espresso Bar, the best in show is the classic at Cafe du Monde.
        </p>
        <div class="p-5">
        <!-- เพิ่มปุ่ม Booking และ Modal ในตำแหน่งนี้ -->
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="showBookingModal = true"
        >
          Booking
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/4"
          >View More</RouterLink>
      </div>
      </div>
    </div>

    <div
      class="w-[500px] h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="w-[500px] h-[275px] rounded-t-lg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/6/1/FN_best-coffee-shop-pennsylvania-la-colombe_s4x3.jpg.rend.hgtvcom.966.725.suffix/1475812848998.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            La Colombe: Philadelphia, Pa.
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            La Colombe is a coffee company that might be coming soon to a corner near you. The Philly-based coffee roaster is helmed by one of the world's boldest coffee hunters 
        </p>
        <div class="p-5">
        <!-- เพิ่มปุ่ม Booking และ Modal ในตำแหน่งนี้ -->
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="showBookingModal = true"
        >
          Booking
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/5"
          >View More</RouterLink>
      </div>
      </div>
    </div>
    <div
      class="w-[500px] h-[550px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="w-[500px] h-[275px] rounded-t-lg" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/6/1/FN_best-coffee-shop-texas-cuvee_s4x3.jpg.rend.hgtvcom.966.725.suffix/1475812854821.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cuvée: Austin, Texas
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Cuvée has been instrumental in jump-starting the city's specialty coffee culture, from supplying countless shops with wholesale beans to cracking the nitro cold brew market with its canned Black and Blue. After nearly a decade in the business, 
        </p>
        <div class="p-5">
        <!-- เพิ่มปุ่ม Booking และ Modal ในตำแหน่งนี้ -->
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="showBookingModal = true"
        >
          Booking
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/6"
          >View More</RouterLink>
      </div>
      </div>
    </div>
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      v-show="showBookingModal"
    >
      <div class="relative w-auto max-w-md">
        <div class="bg-white rounded-lg shadow-lg relative flex flex-col w-full p-6">
          <form>
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-700 dark:text-gray-400 text-lg font-semibold mb-2"
              >
                ชื่อ:
              </label>
              <input
                type="text"
                id="name"
                v-model="bookingData.name"
                class="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div class="mb-4">
              <label
                for="tableCount"
                class="block text-gray-700 dark:text-gray-400 text-lg font-semibold mb-2"
              >
                จำนวนโต๊ะ:
              </label>
              <input
                type="number"
                id="tableCount"
                v-model="bookingData.tableCount"
                class="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div class="mt-8 text-center">
              <button
                type="button"
                @click="showBookingModal = false"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                ยืนยัน
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
