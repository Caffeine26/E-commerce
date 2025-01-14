<template>
    <div>
      <h1 class="container_text">
        <div class="content">CATEGORY</div>
      </h1>
      <!-- Pass categories to GridComponent and handle category-click event -->
      <GridComponent :categories="categories" @category-click="handleCategoryClick" />
    </div>
  </template>
  
  <script>
  import GridComponent from './GridComponent.vue';
  
  export default {
    name: "Category",
    components: {
      GridComponent,
    },
    data() {
      return {
        categories: [
          { id: 1, name: "Toners", image: "/src/assets/img/toner.png" },
          { id: 2, name: "Hair Products", image: "/src/assets/img/hair.png" },
          { id: 3, name: "Shower", image: "/src/assets/img/shower.png" },
          { id: 4, name: "Moisturizer", image: "/src/assets/img/moisturizer.png" },
          { id: 5, name: "Pimple Patches", image: "/src/assets/img/patch.png" },
          { id: 6, name: "Sunscreen", image: "/src/assets/img/sunscreen.png" },
          { id: 7, name: "Make Up", image: "/src/assets/img/makeup.png" },
          { id: 8, name: "Cleansers", image: "/src/assets/img/foam.png" },
          { id: 9, name: "Essence/Serum", image: "/src/assets/img/serum.png" },
          { id: 10, name: "Double Cleansing", image: "/src/assets/img/double.png" },
          { id: 11, name: "Masks", image: "/src/assets/img/mask.png" },
          { id: 12, name: "Skincare Set", image: "/src/assets/img/set.png" },
        ],
      };
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
  