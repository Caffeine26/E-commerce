<template>
  <div>
    <div class="container">
      <h3>ALL Product</h3>
      <div class="category-header">
        
      </div>
      <div class="products-wrapper">
        <button class="scroll-btn left" @click="scrollLeft">
          &#x276E; <!-- Unicode for a left arrow -->
        </button>
        <div class="products" ref="productsContainer">
          <!-- Use the SingleProduct component and pass the product data -->
          <SingleProduct v-for="product in store.products" 
          :key="product.id" 
          :product="product"
          />
        </div>
        <button class="scroll-btn right" @click="scrollRight">
          &#x276F; <!-- Unicode for a right arrow -->
        </button>
      </div>
      <router-link to="/all-products">
        <button class="btn">SEE ALL</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from './../stores/Products'
import SingleProduct from './SingleProduct.vue'; // Import the new SingleProduct component

// Import images for products
import p1 from "@/assets/img/p1.jpg";
import p2 from "@/assets/img/banner1.jpg";

const store = useProductStore()


const activeIndex = ref(0);

// Define tabs (for categories or filter options)

// Define products data (including images)
const products = ref([
  {
    img: p2,
    sale: true,
    name: "Numbuzin Sunscreen",
    price: "$32.00",
  },
  {
    img: p1,
    sale: false,
    name: "Product 2",
    price: "$20.00",
  },
  {
    img: p1,
    sale: true,
    name: "Product 3",
    price: "$50.00",
  },
  {
    img: p1,
    sale: false,
    name: "Product 4",
    price: "$25.00",
  },
  {
    img: p1,
    sale: false,
    name: "Product 5",
    price: "$25.00",
  },
  // Add more products as needed
]);

// Scrolling logic
const productsContainer = ref(null);

const scrollLeft = () => {
  productsContainer.value.scrollBy({
    left: -300, // Adjust scroll amount
    behavior: "smooth",
  });
};

const scrollRight = () => {
  productsContainer.value.scrollBy({
    left: 300, // Adjust scroll amount
    behavior: "smooth",
  });
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.category-header h3 {
  font-size: 22px;
  font-weight: 600;
}

.tabs {
  display: flex;
  align-items: center;
}

.tabs .tab {
  font-weight: 600;
  font-size: 12px;
  opacity: 0.6;
  margin-right: 32px;
  cursor: pointer;
  transition: 0.3s;
}

.tabs .tab.active,
.tabs .tab:hover {
  opacity: 1;
}

.products-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.products {
  display: flex;
  overflow-x: hidden;
  gap: 30px;
  scroll-behavior: smooth;
}

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.scroll-btn.left {
  left: -20px;
}

.scroll-btn.right {
  right: -20px;
}

.scroll-btn:hover {
  background-color: #999594;
  color: #fff;
  transform: scale(1.1);
}

.btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #88817f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #e6e0db;
}

h3 {
  font-size: 50px;
  padding-top: 30px;
  font-family: 'Times New Roman', serif;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  letter-spacing: 1px;
  text-align: center;
  margin: auto;
}
</style>
