import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components
import Home from './views/Home.vue';
import Igbooster from './views/Igbooster.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/igbooster',
    name: 'Igbooster',
    component: Igbooster,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
