import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue'; 

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  // autres routes ici
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
