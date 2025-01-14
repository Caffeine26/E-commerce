<template>
    <div>
      <Header />
      <div>
        <h1 class="CC">{{ categoryName }} Products</h1>
  
        <div v-if="filteredProducts.length === 0">No products found for this category.</div>
        <div v-else class="product-list">
          <SingleProduct
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/stores/Products';
import Footer from './Footer.vue';
  import Header from './Header.vue';
  import SingleProduct from './SingleProduct.vue';
  
  export default {
    name: 'CategoryProduct',
    components: {
      SingleProduct,
      Header,
      Footer,
    },
    setup(){
      const store=useProductStore()
      return { store }
    },
    props: ['id'],  // Receive 'id' as a prop from the router
    data() {
      return {
        products: [
          { id: 1, name: 'Toner 1', category: 'Toners', price: 15, image: '/src/assets/img/toner1.png' },
          { id: 2, name: 'Toner 2', category: 'Toners', price: 20, image: '/src/assets/img/toner2.png' },
          { id: 3, name: 'Shampoo', category: 'Hair Products', price: 25, image: '/src/assets/img/shampoo.png' },
          { id: 4, name: 'Conditioner', category: 'Hair Products', price: 18, image: '/src/assets/img/conditioner.png' },
          { id: 5, name: 'Sunscreen', category: 'Sunscreens', price: 30, image: '/src/assets/img/sunscreen.png' },
          // Add more products here...
        ],
        categoryMapping: {
          '1': 'Toners',
          '2': 'Hair Products',
          '3': 'Sunscreens',
          '4': 'Shower',
          '5': 'Pimple Patches',
          '6': 'Sunscreen',
          '7': 'Make Up',
          '8': 'Cleansers',
          '9': 'Essence/Serum',
          '10': 'Double Cleansing',
          '11': 'Masks',
          '12': 'Skincare Set',
        },
        categoryName: '',  // Will be dynamically set based on the id
        catId : 0
      };
    },
    computed: {
      filteredProducts() {
        return this.store.products.filter(product => {
          let str = product.categoryId
          console.log('pid= ',str)
          console.log('catid=',this.catId)
          product.categoryId === this.catId});
      },
    },
    watch: {
      id(newId) {
        this.updateCategory(newId);
      },
    },
    methods: {
      updateCategory(id) {
        this.categoryName = this.categoryMapping[id] || 'Unknown Category';
        this.catId = id
      },
    },
    mounted() {
      this.updateCategory(this.id);
    },
  };
  </script>
  
  <style scoped>
  .CC {
    text-align: center;
    font-size: 65px;
    color: white;
    width: calc(100% + 300px); /* Match the Header's width */
    margin-left: -150px; /* Match the Header's left margin */
    margin-bottom: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100px; /* Min height */
    background-color: darkgreen;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  </style>
  