import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Promotions from '@/views/PromotionsView.vue';
import AllProducts from '@/views/AllProductView.vue';
import Categories from '@/views/CategoriesView.vue';
import ShopBySkinConcern from '@/views/ShopBySkinConcernView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/promotions', name: 'Promotions', component: Promotions },
  { path: '/all-products', name: 'AllProducts', component: AllProducts },
  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/shop-by-skin-concern', name: 'ShopBySkinConcern', component: ShopBySkinConcern },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
