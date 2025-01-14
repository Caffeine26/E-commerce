import { createRouter, createWebHistory } from 'vue-router';

// Import views
import Home from '@/views/HomeView.vue';
import Promotions from '@/views/PromotionsView.vue';
import AllProducts from '@/views/AllProductView.vue';
import Categories from '@/views/CategoriesView.vue';
import ShopBySkinConcern from '@/views/ShopBySkinConcernView.vue';
import Login from '@/views/LoginView.vue';
import ShopByBrand from '@/views/ShopByBrand.vue'; // Renamed for consistency
import BrandProducts from '@/components/BrandProduct.vue'; // Fixed import name for consistency
import SignUP from '@/views/SignUP.vue';
import CategoryProduct from '@/components/CategoryProduct.vue';
import ProductView from '@/views/ProductView.vue';
import SearchResult from '@/views/SearchResult.vue';


// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Promotions,
  },
  {
    path: '/all-products',
    name: 'AllProducts',
    component: AllProducts,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    
  },
  

  {
    path: '/categories/:id',
    name: 'CategoryProduct',
    component: CategoryProduct,
    props: true, // Pass route params as props
  },
  
  {
    path: '/shop-by-skin-concern',
    name: 'ShopBySkinConcern',
    component: ShopBySkinConcern,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/brands',
    name: 'ShopByBrand',
    component: ShopByBrand,
  },
  {
    path: '/brand/:brandName',
    name: 'BrandProducts',
    component: BrandProducts,
    props: true, // Enable route params to be passed as props
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUP,
  },
  { 
    path: '/product', 
    name: 'Product', 
    component: ProductView 
  },
  { 
    path: '/all-products/:productId', 
    component: ProductView 
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: SearchResult,
  },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
