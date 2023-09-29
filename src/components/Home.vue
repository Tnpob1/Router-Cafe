<template>
    <div>
      <h1>ร้านกาแฟ</h1>
      <div class="row">
        <div class="col-md-4" v-for="(cafe, index) in travelList" :key="index">
          <div class="card mb-4">
            <!-- ... ส่วนอื่น ๆ ของ Card ... -->
            <router-link :to="'/cafe/' + index">BOOKING</router-link>
          </div>
        </div>
      </div>
      <!-- ... ส่วนอื่น ๆ ของหน้า Home ... -->
    </div>
  </template>
  
  <script setup>
  // นำเข้า travelList และอื่น ๆ จาก <script setup> ที่คุณให้มา
  </script>