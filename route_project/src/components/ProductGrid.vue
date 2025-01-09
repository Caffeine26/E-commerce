<template>
  <div class="container">
    <div class="filterBox">
      <input id="search" type="text" placeholder="Search product">
      <label for="filter"></label>
      <select name="filter" id="filter" @change="filter">
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="ascPrice">(Price) Low to High</option>
        <option value="descPrice">(Price) High to Low</option>
        <option value="popularity">Popular</option>
        <option value="rating">Rating</option>
      </select>
    </div>
    
    
    <div class="product-grid">
      <SingleProduct v-for="product in products" :key="product.id" :product="product" />
    </div>
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
  computed : {
    fiter(){
      console.log("hello")
    }
  }
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filterBox{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.product-grid {
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-left: 70px;
  margin-top: 50px;
}
#search{
  width: 500px;
  
}
#search, #filter{
  height: 50px;
  padding: 10px;
  font-size: 14px;
}
</style>
