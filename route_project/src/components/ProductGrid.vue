<template>
  <div class="product-grid">
    <SingleProduct v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import SingleProduct from "./SingleProduct.vue";

export default {
  name: "ProductGrid",
  components: { SingleProduct }, // Register the correct component
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
