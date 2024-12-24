<template>
    <div class="single-banner">
      <div class="img-container">
        <!-- Use imageSrc prop here -->
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
      <div class="banner-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="handleClick">{{ buttonText }}</button>
      </div>
      <!-- Optional navigation buttons -->
     
    </div>
   
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      imageAlt: {
        type: String,
        default: 'Banner Image',
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      buttonText: {
        type: String,
        default: 'Learn More',
      },
    },
    methods: {
      handleClick() {
        alert('Button clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  .single-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  .img-container img {
    width: 150px;
    height: auto;
    border-radius: 10px;
  }
  .banner-content {
    max-width: 500px;
    margin-left: 20px;
  }
  .banner-content h2 {
    font-size: 24px;
    margin: 10px 0;
  }
  .banner-content p {
    font-size: 16px;
    margin: 10px 0;
  }
  .banner-content button {
    padding: 10px 20px;
    background-color: #0073e6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .banner-content button:hover {
    background-color: #005bb5;
  }
  </style>
  