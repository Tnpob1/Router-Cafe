<script setup>
import { ref } from "vue";

//ตัวแปร
const travelList=ref([
  {name:"CJ's Coffee",price:100,size:{s:80,m:150,l:120}, img:"https://cjscoffeecafe.com/wp-content/uploads/elementor/thumbs/CJs-on-Main-scaled-q10atybl2s13qfobp6otqzqbicz9ja0l9oczpyuqo8.jpg"},
  {name:"shop2",price:100,size:{s:80,m:150,l:120}, img:"https://cjscoffeecafe.com/wp-content/uploads/elementor/thumbs/IMG_1549-q10aegxai0u2ho5z3zr26edz8valqrjrh1i24vt760.jpg"},
  {name:"shop3",price:100,size:{s:80,m:150,l:120}, img:"https://cjscoffeecafe.com/wp-content/uploads/elementor/thumbs/002-1-p30r7ga6bkf74ygmnd9tkiufelx22td4flnem1ju6g.jpg"},
  {name:"Starbuck Coffee",price:100,size:{s:80,m:150,l:120}, img:"https://imgs.search.brave.com/dzzlQ6KjvQtF6cELZJARYOhYQUxor9OsFnPByJM33ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MzQ4MDI1My9waG90/by9zdGFyYnVja3Mt/Y29mZmVlLXNob3Au/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV9Pa0M2VFFvdER0/X0EwbDBpME1YQXEx/a3NZUE5jY2pCUnU1/RW9FMXlTSFk9"},
  {name:"Dutch Bros Coffee",price:100,size:{s:80,m:150,l:120}, img:"https://imgs.search.brave.com/od39rnM9L9_mQkQEAPopnkTVBWqj5Ef3aXho3S-AYIw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvLzJMTWh3aS0z/OGVCcXhYWjJJZV9h/NGcvMzQ4cy5qcGc"},
  {name:"410 Collective + Coffee",price:100,size:{s:80,m:150,l:120}, img:"https://imgs.search.brave.com/w4pEV0t1imk-X3BME6E_IkPoa4LklKFf5sQ89KiJtg8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwUEc3YkMw/UjJ2QTZEYWp2bHEy/aTE2SWdvUG1FX0Fp/TlRyUHlId1E9czEw/MjQ.jpeg"},
]);
</script>

<template>

<nav class="navbar">
  <a class="navbar-brand" href="#">
    <div class="d-flex align-items-center">
      <img src="https://imgs.search.brave.com/5vIwuKr0dF0rObOZUr0pq8CBHAWxoyUj_dmr7sFElJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2NvZmZlZS1sb2dv/LXBuZy9jb2ZmZWUt/bG9nby1sb2dvLWVs/ZW1lbnRzLWxvZ28t/b2JqZWN0cy0zLnBu/Zw" width="80" height="95" class="d-inline-block align-top" alt="">
      <p class="logo-text m-0 ml-2">COFFEE</p>
    </div>
  </a>
</nav>

<div class="container mt-5">
      <h1>ร้านกาแฟ</h1>
      <div class="row">
        <div class="col-md-4" v-for="(cafe, index) in travelList" :key="index">
          <div class="card mb-4">
            <img :src="cafe.img" class="card-img-top" alt="..." style="border-radius: 15px; min-height: 400px; max-height: 400px;">
            <div class="card-body">
              <h5 class="card-title">{{ cafe.name }}</h5>
              <p class="card-text">
                Price: {{ cafe.price }}<br>
                size-m: {{ cafe.size.m }}<br>
                <!-- แผนที่ -->
              </p>
              <a @click="showBookingModal(index)" class="btn btn-primary">BOOKING</a>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- <div>
  <button type="button" class="btn btn-primary">Booking</button>
  <div v-for="(i,index) in travelList" :key="index">
    {{ index+1 }}
    ชื่อ {{ i.name }} 
    ราคา {{ i.priec }}
    size-m {{ i.size.m }}
    รูป {{ i.img }}
    แผนที่
  </div>
</div> -->

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

.navbar {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}
.navbar-brand{
  margin: 0;
  height: 75px;
  padding: 0 auto;
  padding-left: 20px;
  display: flex;
}
.navbar-brand img {
  margin-right: 20px;
}
.logo-text {
  margin: 0 auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 45px;
  font-weight: bold;
  color:rgba(187, 88, 7, 0.829);
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 4px 4px 0px #000, 
      -4px 0 0px #000,
      7px 4px 0 #fff;
  text-decoration: underline;
  text-decoration-color: #ffffff;
}

.navbar{
  background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(170, 120, 44));
}

.card{
  border-radius: 15px;
  border: solid rgb(153, 153, 153);
  background-image: linear-gradient(to bottom, rgb(255, 255, 255), rgb(253, 247, 233));
}

.btn {
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow: rgba(112, 57, 4, 0.2) 0 -25px 18px -14px inset,rgba(170, 83, 1, 0.2) 0 1px 2px,rgba(170, 83, 1, 0.2) 0 2px 4px,rgba(124, 60, 0, 0.2) 0 4px 8px,rgba(170, 83, 1, 0.2) 0 8px 16px,rgba(170, 83, 1, 0.2) 0 16px 32px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:hover {
  background-color: #814018 ;
  box-shadow: rgba(207, 118, 1, 0.35) 0 -25px 18px -14px inset,rgba(207, 118, 1, 0.35) 0 1px 2px,rgba(207, 118, 1, 0.35) 0 2px 4px,rgba(207, 118, 1, 0.35) 0 4px 8px,rgba(207, 118, 1, 0.35) 0 8px 16px,rgba(207, 118, 1, 0.35) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  color: white;
}

.card-text{
  font-size: 18px;
}
</style>