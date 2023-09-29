<template>
    <div>
      <h2>{{ cafe.name }}</h2>
      <img :src="cafe.img" alt="...">
      <p>Price: {{ cafe.price }}</p>
      <p>size-m: {{ cafe.size.m }}</p>
      <!-- เพิ่มฟอร์มและการส่งคำขอจองไปยังส่วนอื่น ๆ ของคุณที่นี่ -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useParams } from 'vue-router';
  
  // นำเข้า travelList และอื่น ๆ จาก <script setup> ที่คุณให้มา
  const { id } = useParams();
  const cafe = ref(travelList[id]);
  </script>