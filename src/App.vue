<template>
  <HomeView></HomeView>
</template>

<script>
import { useProductStore } from './store/Products';
import HomeView from './views/HomeView.vue';
import RegisterView from './views/RegisterView.vue';
import LoginView from './views/LoginView.vue';
import axios from 'axios';
import ProductView from './views/ProductView.vue';
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import SectionAllProduct from "@/components/SectionAllProduct.vue";
import SectionShopBySkinConcern from "@/components/SectionShopByskin.vue"
import Footer from "@/components/Footer.vue";
import SectionNewArrivial from "@/components/SectionNewArrivial.vue";
import { ref } from 'vue';
import ProductDescription from './components/ProductDescription.vue';

export default {
  name: "App",
  components: {
    HomeView, // Ensure HomeView is registered
    RegisterView,
    LoginView,
    ProductView,
    Banner,
    Header,
    SectionAllProduct,
    SectionShopBySkinConcern,
    Footer,
    SectionNewArrivial
  },
  setup(){
    const store = useProductStore()
    const hello = "hello world"
    return { store, hello }
  },
  methods : {
    fetchProducts(){
      axios.get('http://localhost:3000/api/products')
      .then(response => {
        this.store.products = response.data
        console.log(this.store.products)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
    }
  },

  mounted(){
    this.fetchProducts()
  }

};
</script>
