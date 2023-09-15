<template>
  <div>
    <h1>ร้านกาแฟ</h1>
    <div class="row">
      <div class="col-md-6">
        <h2>รายชื่อร้านกาแฟ</h2>
        <ul>
          <li v-for="(cafe, index) in cafes" :key="index">
            {{ cafe.name }}
            <button @click="reserveTable(index)">จองโต๊ะ</button>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>รายละเอียดการจอง</h2>
        <div v-if="selectedCafe !== null">
          <h3>{{ selectedCafe.name }}</h3>
          <form @submit.prevent="submitReservation">
            <label for="name">ชื่อ:</label>
            <input type="text" id="name" v-model="reservation.name" required>
            <br>
            <label for="phone">เบอร์โทร:</label>
            <input type="tel" id="phone" v-model="reservation.phone" required>
            <br>
            <label for="date">วันที่:</label>
            <input type="date" id="date" v-model="reservation.date" required>
            <br>
            <label for="time">เวลา:</label>
            <input type="time" id="time" v-model="reservation.time" required>
            <br>
            <label for="tableCount">จำนวนโต๊ะ:</label>
            <input type="number" id="tableCount" v-model="reservation.tableCount" required>
            <br>
            <button type="submit">ยืนยันการจอง</button>
          </form>
        </div>
        <div v-else>
          <p>กรุณาเลือกร้านกาแฟเพื่อจองโต๊ะ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cafes: [
        { name: "ร้านกาแฟ A", reserved: false },
        { name: "ร้านกาแฟ B", reserved: false },
        { name: "ร้านกาแฟ C", reserved: false },
        { name: "ร้านกาแฟ D", reserved: false },
        { name: "ร้านกาแฟ E", reserved: false },
        { name: "ร้านกาแฟ F", reserved: false },
        
      ],
      selectedCafe: null,
      reservation: {
        name: "",
        phone: "",
        date: "",
        time: "",
        tableCount: 0,
      },
    };
  },
  methods: {
    reserveTable(index) {
      this.selectedCafe = this.cafes[index];
      this.reservation = {
        name: "",
        phone: "",
        date: "",
        time: "",
        tableCount: 0,
      };
    },
    submitReservation() {
      // สร้างการจองของคุณที่นี่
      console.log("รายละเอียดการจอง:", this.reservation);
      this.selectedCafe.reserved = true;
      this.selectedCafe = null;
    },
  },
};
</script>

<style scoped>
.box{
  border: solid red;
}
</style>