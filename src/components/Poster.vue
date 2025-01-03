<template>
    <div class="poster">
      <div class="poster-content">
        <h2 class="poster-title">Special Promotion</h2>
        <p class="poster-description">Exclusive offer for a limited time only!</p>
        <button class="poster-btn">Shop Now</button>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can import any required data or logic here
  </script>
  
  <style scoped>
  .poster {
    width: 100%;
    height: 400px;
    background-image: url('@/assets/images/p1.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .poster-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    border-radius: 10px;
  }
  
  .poster-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .poster-description {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .poster-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff6347; /* Bright button color */
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .poster-btn:hover {
    background-color: #ff4500; /* Darker shade on hover */
  }
  </style>
  