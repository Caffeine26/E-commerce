<template>
    <div class="single-brand">
      <div class="img-container">
        <div class="brand-image"></div> <!-- This div will be used as the background image container -->
      </div>
    </div>
  </template>
  
  <script setup>
  // You don't need to import the image directly in the script
  // Just use the correct path in the style section.
  </script>
  
  <style scoped>
  .single-brand {
    flex: 0 0 calc(25% - 30px); /* Adjust for four brands per row */
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .single-brand .img-container {
    height: 150px; /* Set the size of the image container */
    width: 100%;
    overflow: hidden;
  }
  
  .single-brand .brand-image {
    height: 100%;
    width: 100%;
    background-image: url('@/assets/img/p1.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    /* This div will have the background image */
    background-image: url('@/assets/img/banner1.jpg');
  }
  
  .single-brand:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  