<!-- SingleProduct.vue -->
<template>
    <div class="single-product">
      <div class="img-container">
        <img :src="product.image" alt="Product Image" />
        <div v-if="product.promotionAsPercentage" class="sale">-{{product.promotionAsPercentage}}%</div>
      </div>
      <div class="product-content">
        <h5 class="name">{{ product.name }}</h5>
        <div class="rating">
          <span class="price">${{ product.price }}</span>
          <span class="icon">
            <img src="@/assets/heart.svg" alt="Favorite Icon" />
            <img src="@/assets/cart.svg" alt="Cart Icon" />
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .single-product {
    flex: 0 0 calc(25% - 30px); /* Adjust for four products per row */
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  .single-product .img-container {
    position: relative;
  }
  .single-product .img-container .sale {
    position: absolute;
    top: 0;
    left: 0;
    padding: 9px;
    background: red;
    right: auto;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    color: white;
  }
  .single-product:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .img-container {
    height: 200px;
    width: 100%;
    overflow: hidden;
  }
  .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .product-content {
    padding: 10px;
    text-align: center;
  }
  .product-content .name {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  .product-content .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rating .price {
    font-size: 16px;
    color: #e74c3c;
    font-weight: bold;
  }
  .rating .icon img {
    height: 20px;
    width: 20px;
    margin-left: 8px;
    cursor: pointer;
  }
  </style>
  