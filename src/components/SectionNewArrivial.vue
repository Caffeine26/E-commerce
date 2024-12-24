<template>
  <div>
    <div class="container">
      <div class="category-header">
        <h3>Promotion</h3>
        <div class="tabs">
          <div
            v-for="(tab, i) in tabs"
            :key="tab"
            class="tab"
            @click="activeIndex = i"
            :class="{ active: activeIndex === i }"
          >
            {{ tab }}
          </div>
        </div>
      </div>
      
      <!-- Insert the Banner component here -->
      <Banner />  <!-- Use the Banner component -->
      
      <div class="products-wrapper">
        <button class="scroll-btn left" @click="scrollLeft">
          &#x276E; <!-- Unicode for a left arrow -->
        </button>
        <div class="products" ref="productsContainer">
          <!-- Use the SingleProduct component and pass the product data -->
          <SingleProduct v-for="product in products" :key="product.name" :product="product" />
        </div>
        <button class="scroll-btn right" @click="scrollRight">
          &#x276F; <!-- Unicode for a right arrow -->
        </button>
      </div>
      <button class="btn">SEE ALL</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SingleProduct from './SingleProduct.vue'; // Import the new SingleProduct component
import Poster from "./Poster.vue";


const tabs = ref([]);
const activeIndex = ref(0);

const products = ref([
  {
    img: "@/assets/images/p1.jpg",
    sale: true,
    name: "Numbuzin Sunscreen",
    price: "$32.00",
  },
  {
    img: "@/assets/images/p1.jpg",
    sale: false,
    name: "Product 2",
    price: "$20.00",
  },
  {
    img: "@/assets/images/p1.jpg",
    sale: true,
    name: "Product 3",
    price: "$50.00",
  },
  {
    img: "@/assets/images/p1.jpg",
    sale: false,
    name: "Product 4",
    price: "$25.00",
  },
  {
    img: "@/assets/images/p1.jpg",
    sale: false,
    name: "Product 4",
    price: "$25.00",
  },
  {
    img: "@/assets/images/p1.jpg",
    sale: false,
    name: "Product 4",
    price: "$25.00",
  },
  {
    img: "@/assets/images/p1.jpg",
    sale: false,
    name: "Product 4",
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
.header {
  font-size: 30px;
  padding-left: 190px; /* Adjust this value if needed */
  padding-top: 20px; /* You can add top padding if needed */
  margin-bottom: 50px; /* Add some margin at the bottom if you want space between header and content */
}

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
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}

.tabs {
  display: flex;
  align-items: center;
}

.tabs .tab {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
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
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 30px;
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
</style>
