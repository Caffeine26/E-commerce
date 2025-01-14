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
import SignupOptions from '@/components/SignupOptions.vue';
import ProductView from '@/views/ProductView.vue';
import Cart from '@/views/Cart.vue';
import DeliveryView from '@/views/DeliveryView.vue';
import PaymentView from '@/views/PaymentView.vue';
import SuccessView from '@/views/SuccessView.vue';


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
    path: '/shopping-cart', 
    name: 'Cart', 
    component: Cart 
  },
  { 
    path: '/delivery', 
    name: 'DeliveryView', 
    component: DeliveryView 
  },
  { 
    path: '/payment', 
    name: 'PaymentView', 
    component: PaymentView 
  },
  { 
    path: '/success', 
    name: 'SuccessView', 
    component: SuccessView 
  },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
