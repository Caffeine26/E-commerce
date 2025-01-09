<template>
  <div class="container">
    <!-- Category Header -->
    <div class="category-header">
      <h2>New Arrival Product</h2>
    </div>
    
    <!-- Posters Section -->
    <div class="posters-section">
      <!-- First Poster -->
      <Poster
        v-for="(poster, index) in posters"
        :key="index"
        :title="poster.title"
        :description="poster.description"
        :backgroundImage="poster.backgroundImage"
        :buttonText="poster.buttonText"
      />
    </div>

    <!-- Single Product Section (Horizontal Scroll) -->
    <div class="single-product-section">
      <SingleProduct v-for="product in products" :key="product.name" :product="product" />
    </div>

    <!-- SEE ALL Button -->
    <router-link to="/categories">
      <button class="btn">SEE ALL</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SingleProduct from './SingleProduct.vue'; // Import the new SingleProduct component
import Poster from "./Poster.vue"; // Import the Poster component

// Import images for promotions/posters
import promo1 from "@/assets/img/banner1.jpg";
import promo2 from "@/assets/img/banner2.jpg";

const posters = ref([
  {
    title: "Summer Sale - Up to 50% Off",
    description: "Grab your favorite products at discounted prices!",
    backgroundImage: promo1,
    buttonText: "Shop Now"
  },
  {
    title: "Exclusive Deals on New Arrivals",
    description: "Check out our latest arrivals and enjoy exclusive deals.",
    backgroundImage: promo2,
    buttonText: "Discover More"
  }
]);

const products = ref([
  {
    img: promo1,
    sale: true,
    name: "Numbuzin Sunscreen",
    price: "$32.00",
  },
  {
    img: promo2,
    sale: false,
    name: "Moisturizing Lotion",
    price: "$24.00",
  },
  {
    img: "@/assets/images/p3.jpg",
    sale: true,
    name: "Hydrating Serum",
    price: "$40.00",
  },
  {
    img: "@/assets/images/p4.jpg",
    sale: false,
    name: "Anti-aging Cream",
    price: "$28.00",
  },
  {
    img: "@/assets/images/p5.jpg",
    sale: true,
    name: "Vitamin C Face Mask",
    price: "$22.00",
  },
  {
    img: "@/assets/images/p6.jpg",
    sale: false,
    name: "Eye Care Gel",
    price: "$18.00",
  },
  {
    img: "@/assets/images/p7.jpg",
    sale: true,
    name: "Sunscreen SPF 50+",
    price: "$35.00",
  },
  {
    img: "@/assets/images/p8.jpg",
    sale: false,
    name: "Facial Cleanser",
    price: "$20.00",
  },
]);
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

/* Posters Section */
.posters-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.poster {
  flex: 1;
  margin-right: 20px;
  box-sizing: border-box;
}

/* Single Product Section */
.single-product-section {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  gap: 30px;
  padding-bottom: 20px;
}

.single-product-section .product {
  flex: 0 0 auto; /* Prevent products from shrinking */
  box-sizing: border-box;
  width: 200px; /* Adjust product width as needed */
}

/* Scroll Button and SEE ALL Button */
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

h2 {
  font-size: 40px;
  padding-top: 40px;

  font-family: 'Times New Roman', serif;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  text-shadow: 20px 2px 10px rgba(0, 0, 0, 0.15);
  letter-spacing: 1px;
  text-align: center; /* Centers horizontally */
  margin: auto; /* Removes default margin */

  display: flex;
  justify-content: center; /* Centers horizontally in its parent container */
  align-items: center; /* Centers vertically in its parent container */
}
</style>
