<script setup lang="ts">
import { ref } from 'vue'
const travelList = ref([
  {
    name: "CJ's Coffee",
    price: 100,
    size: { s: 80, m: 150, l: 120 },
    img: 'https://cjscoffeecafe.com/wp-content/uploads/elementor/thumbs/CJs-on-Main-scaled-q10atybl2s13qfobp6otqzqbicz9ja0l9oczpyuqo8.jpg'
  },
  {
    name: "CJ's Coffee2",
    price: 100,
    size: { s: 80, m: 150, l: 120 },
    img: 'https://cjscoffeecafe.com/wp-content/uploads/elementor/thumbs/IMG_1549-q10aegxai0u2ho5z3zr26edz8valqrjrh1i24vt760.jpg'
  },
  {
    name: 'White Coffee',
    price: 89,
    size: { s: 80, m: 150, l: 120 },
    img: 'https://cjscoffeecafe.com/wp-content/uploads/elementor/thumbs/002-1-p30r7ga6bkf74ygmnd9tkiufelx22td4flnem1ju6g.jpg'
  },
  {
    name: 'Starbuck Coffee',
    price: 120,
    size: { s: 80, m: 150, l: 120 },
    img: 'https://imgs.search.brave.com/dzzlQ6KjvQtF6cELZJARYOhYQUxor9OsFnPByJM33ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MzQ4MDI1My9waG90/by9zdGFyYnVja3Mt/Y29mZmVlLXNob3Au/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV9Pa0M2VFFvdER0/X0EwbDBpME1YQXEx/a3NZUE5jY2pCUnU1/RW9FMXlTSFk9'
  },
  {
    name: 'Dutch Bros Coffee',
    price: 99,
    size: { s: 80, m: 150, l: 120 },
    img: 'https://imgs.search.brave.com/od39rnM9L9_mQkQEAPopnkTVBWqj5Ef3aXho3S-AYIw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvLzJMTWh3aS0z/OGVCcXhYWjJJZV9h/NGcvMzQ4cy5qcGc'
  },
  {
    name: '410 Collective + Coffee',
    price: 90,
    size: { s: 80, m: 150, l: 120 },
    img: 'https://imgs.search.brave.com/w4pEV0t1imk-X3BME6E_IkPoa4LklKFf5sQ89KiJtg8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwUEc3YkMw/UjJ2QTZEYWp2bHEy/aTE2SWdvUG1FX0Fp/TlRyUHlId1E9czEw/MjQ.jpeg'
  }
])

interface SizeType {
  s: number
  m: number
  l: number
}

interface TravelListType {
  name: string
  price: number
  size: SizeType
  img: string
}

let show = true

interface FormType {
  name: string
  tel: string
  date: string
  time: string | undefined
  amount: number | undefined
}

let form: FormType = {
  name: '',
  tel: '',
  date: '',
  time: undefined,
  amount: undefined
}

interface Booking {
  name: string
  tel: string
  date: string
  time: string | undefined
  amount: number | undefined
  TravelListName: string
}

const customerBooking = ref<Booking[]>([])

const onSubmit = (TravelListName: string) => {
  customerBooking.value.push({
    name: form.name,
    tel: form.tel,
    date: form.date,
    time: form.time,
    amount: form.amount,
    TravelListName
  })
}

</script>

<template>
    <div class="container mt-5">
    <h1>ร้านกาแฟ</h1>
    <div class="row">
      <div class="col-md-4" v-for="(cafe, index) in travelList" :key="index">
        <div class="card mb-4">
          <img
            :src="cafe.img"
            class="card-img-top"
            alt="..."
            style="border-radius: 15px; min-height: 400px; max-height: 400px"
          />
          <div class="card-body">
            <h5 class="card-title">{{ cafe.name }}</h5>
            <p class="card-text">
              Price: {{ cafe.price }}<br />
              size-m: {{ cafe.size.m }}<br />
            </p>
            <b-button v-b-modal.modal-1 class="btn btn-primary">BOOKING</b-button>
            <b-modal id="modal-1" title="กรุณากรอกข้อมูล" hide-footer="">
              <div>
                <b-form @submit="onSubmit(cafe.name)" v-if="show" class="form-input">
                  <b-form-group id="input-group-1" label="ชื่อ" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form.name"
                      type="text"
                      placeholder="ชื่อ"
                      required
                    />
                  </b-form-group>
                  <b-form-group id="input-group-2" label="เบอร์โทรศัพท์" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.tel"
                      type="text"
                      placeholder="เบอร์โทรศัพท์"
                      required
                    />
                  </b-form-group>

                  <b-form-group id="input-group-3" label="วันที่" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      v-model="form.date"
                      type="text"
                      placeholder="วันที่"
                      required
                    />
                  </b-form-group>

                  <b-form-group id="input-group-4" label="เวลา" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      v-model="form.time"
                      type="text"
                      placeholder="เวลา"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-5" label="จำนวนโต๊ะ" label-for="input-5">
                    <b-form-input
                      id="input-5"
                      v-model="form.amount"
                      type="text"
                      placeholder="จำนวนโต๊ะ"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <div class="form-footer">
                    <b-button type="submit" variant="primary">Submit</b-button>
                  </div>
                </b-form>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <b-table striped hover :items="customerBooking"></b-table>
  </div>
</template>

<style>
.card {
  border-radius: 15px;
  border: solid rgb(153, 153, 153);
  background-image: linear-gradient(to bottom, rgb(255, 255, 255), rgb(253, 247, 233));
}

.btn {
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow:
    rgba(112, 57, 4, 0.2) 0 -25px 18px -14px inset,
    rgba(170, 83, 1, 0.2) 0 1px 2px,
    rgba(170, 83, 1, 0.2) 0 2px 4px,
    rgba(124, 60, 0, 0.2) 0 4px 8px,
    rgba(170, 83, 1, 0.2) 0 8px 16px,
    rgba(170, 83, 1, 0.2) 0 16px 32px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: inline-block;
  font-family:
    CerebriSans-Regular,
    -apple-system,
    system-ui,
    Roboto,
    sans-serif;
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
  background-color: #814018;
  box-shadow:
    rgba(207, 118, 1, 0.35) 0 -25px 18px -14px inset,
    rgba(207, 118, 1, 0.35) 0 1px 2px,
    rgba(207, 118, 1, 0.35) 0 2px 4px,
    rgba(207, 118, 1, 0.35) 0 4px 8px,
    rgba(207, 118, 1, 0.35) 0 8px 16px,
    rgba(207, 118, 1, 0.35) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  color: white;
}

.card-text {
  font-size: 18px;
}
</style>