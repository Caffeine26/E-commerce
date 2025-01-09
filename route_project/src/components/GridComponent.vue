<template>
    <div class="grid">
      <div class="category" v-for="(item, index) in categories" :key="index">
        <img :src="item.image" :alt="item.name" />
        <div class="overlay">{{ item.name }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "GridComponent",
    props: {
      categories: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .grid {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px; /* Make container more flexible */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px; /* Adjust gap for better spacing */
    padding: 0 20px; /* Add padding for container */
  }
  
  .category {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add shadow for better visuals */
  }
  
  .category img {
    width: 100%;
    height: 200px; /* Set a fixed height for consistency */
    object-fit: cover; /* Ensure images are not distorted */
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }
  </style>
  