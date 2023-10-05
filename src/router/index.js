import { createRouter, createWebHistory } from 'vue-router'
import BookingList from '../views/BookingList.vue'
import HomeView from '../views/HomeView.vue'
import Cafe1View from '../views/Cafe1View.vue'
import Cafe2View from '../views/Cafe2View.vue'
import Cafe3View from '../views/Cafe3View.vue'
import Cafe4View from '../views/Cafe4View.vue'
import Cafe5View from '../views/Cafe5View.vue'
import Cafe6View from '../views/Cafe6View.vue'

const routes = [
  {
    path: '/booking',
    name: 'Booking',
    component: BookingList
  },
  {
    path: '/',
    name: 'Home',
    component : HomeView
  },
  {
    path: '/1',
    name: 'Panther-Coffee',
    component : Cafe1View
  },
  {
    path: '/2',
    name: 'Cocoa-Cinnamon',
    component : Cafe2View
  },
  {
    path: '/3',
    name: 'Artifact-Coffee',
    component : Cafe3View
  },
  {
    path: '/4',
    name: 'Cafe-du-Monde',
    component : Cafe4View
  },
  {
    path: '/5',
    name: 'La-Colombe',
    component : Cafe5View
  },
  {
    path: '/6',
    name: 'Cuvée',
    component : Cafe6View
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;