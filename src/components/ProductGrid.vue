<template>
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>
  
<script>
import ProductCard from "./ProductCard.vue";
  
  export default {
    name: "ProductGrid",
    components: { ProductCard },
    props: {
      products: Array,
    },
  };
  </script>
  
  <style scoped>
  .product-grid {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-left: 70px;
    margin-top: 50px;
  }
  </style>
  