<template>
    <div>
      <h1 class="container_text">
        <div class="content">CATEGORY</div>
      </h1>
      <!-- Pass categories to GridComponent and handle category-click event -->
      <GridComponent :categories="store.categories" @category-click="handleCategoryClick" />
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/stores/Products';
import GridComponent from './GridComponent.vue';
  
  export default {
    name: "Category",
    components: {
      GridComponent,
    },
    setup(){
      const store = useProductStore()
      return { store }
    },
    methods: {
      handleCategoryClick(categoryId) {
        // Navigate to the category-product page with the clicked category ID
        this.$router.push({ name: 'CategoryProduct', params: { id: categoryId } });
      },
    },
  };
  </script>
  
  <style scoped>
  .container_text {
    text-align: center;
    font-size: 65px;
    color: white;
    width: calc(100% + 300px); /* Match the Header's width */
    margin-left: -150px; /* Match the Header's left margin */
    margin-bottom: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 350px; /* Min height */
    background-image: url('@/assets/img/banner1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  