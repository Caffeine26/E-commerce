<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">
        <span class="original-price">{{ product.originalPrice }}</span>
        <span class="discounted-price">{{ product.discountedPrice }}</span>
      </p>
      <div class="i">
        <a href="#"  >
          <img src="@/assets/img/image2.png" alt="logo" class="add"/>
        </a>
        <a href="#" >
          <img src="@/assets/img/image3.png" alt="logo" class="add"/>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: Object,
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
  }
  .product-image {
    max-width: 100%;
    height: auto;
  }
  .product-name {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  .product-price {
    color: #333;
  }
  .original-price {
    text-decoration: line-through;
    margin-right: 0.5rem;
  }
  .discounted-price {
    color: red;
  }
  .add-to-cart {
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  .add{
    transform: scale(0.7);
  }
  .i{
  }
  
  </style>
  