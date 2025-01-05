<template>
    <div class="promotion-container">
      <h2 class="section-title">Hot Promotion</h2>
      <div class="promotion-list">
        <!-- Loop through each promotion product -->
        <div
          class="promotion-card"
          v-for="(product, index) in promotionProducts"
          :key="index"
        >
          <router-link :to="'/product/' + product.id" class="product-link">
            <div
              class="product-image"
              :style="{ backgroundImage: `url(${product.image})` }"
            >
              <div class="promo-tag">Hot Deal</div>
            </div>
            <div class="product-info">
              <p class="price">
                <span class="old-price">${{ product.oldPrice }}</span>
                <span class="promotion-price">${{ product.price }}</span>
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import promotion images
  import promo1 from "@/assets/img/banner1.jpg";
  import promo2 from "@/assets/img/banner2.jpg";
  import promo3 from "@/assets/img/banner3.jpg";
  import promo4 from "@/assets/img/banner4.jpg";
  
  import { ref } from "vue";
  
  // Promotion Products Data
  const promotionProducts = ref([
    { id: 1, oldPrice: 29.99, price: 19.99, image: promo1 },
    { id: 2, oldPrice: 39.99, price: 29.99, image: promo2 },
    { id: 3, oldPrice: 49.99, price: 39.99, image: promo3 },
    { id: 4, oldPrice: 59.99, price: 49.99, image: promo4 },
  ]);
  </script>
  
  <style scoped>
  .promotion-container {
    padding: 40px 20px;
    text-align: center;
    background-color: #fafafa;
  }
  
  .section-title {
    font-size: 50px;
    padding-top: 10px;
    padding-bottom: 20px;
    font-family: "Times New Roman", serif;
    font-weight: 900;
    color: transparent;
    background-image: linear-gradient(90deg, #ff0054, #ff8a00, #faff00, #00ff6c, #00d0ff);
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradient-animation 3s ease infinite;
    text-transform: uppercase;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @keyframes gradient-animation {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
  
  .promotion-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .promotion-card {
    width: 23%;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .promotion-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .product-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  
  .product-image {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  .promo-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #ee310f;
    color: white;
    padding: 8px 15px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 3px;
  }
  
  .product-info {
    padding: 15px;
    text-align: center;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ee310f;
  }
  
  .old-price {
    font-size: 1rem;
    color: #999;
    text-decoration: line-through;
    margin-right: 10px;
  }
  
  .promotion-price {
    font-size: 1.8rem;
    font-weight: 600;
    color:#ee310f;
    background: linear-gradient(90deg, #f32d0a, #f54809);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (max-width: 768px) {
    .promotion-card {
      width: 45%;
    }
  }
  
  @media (max-width: 480px) {
    .promotion-card {
      width: 100%;
    }
  }
  </style>
  