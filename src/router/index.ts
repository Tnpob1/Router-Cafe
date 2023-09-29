
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/cafe/:id', // เพิ่มพารามิเตอร์ id เพื่อระบุร้านกาแฟแต่ละร้าน
    name: 'CafeDetail',
    component: () => import('@/views/CafeDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;