<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-white shadow dark:bg-white-800 top-0 sticky">
    <div
      class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300"
    >
      <RouterLink
        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        to="/"
        >Home</RouterLink
      >
      <div>
        <RouterLink
          class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          to="/booking"
          >Booking-List</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<style></style>
