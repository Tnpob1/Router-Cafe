<script>
export default {
  data() {
    return {
      bookings: [],
    };
  },
};

</script>

<template>
<div>
    <div>
    <h2 class="text-2xl font-semibold mb-4">รายการจอง</h2>
    <table class="min-w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">ชื่อ</th>
          <th class="px-4 py-2">จำนวนโต๊ะ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(booking, index) in bookings" :key="index">
          <td class="px-4 py-2">{{ booking.name }}</td>
          <td class="px-4 py-2">{{ booking.tableCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style>
</style>