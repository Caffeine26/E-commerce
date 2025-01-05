<template>
    <div class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(banner, index) in banners" :key="index">
          <img :src="banner.img" :alt="banner.alt" />
          <div class="img-content">
            <h2>{{ banner.title }}</h2>
            <p>{{ banner.subtitle }}</p>
          </div>
        </div>
      </div>
  
      <!-- Navigation Buttons -->
      <button class="nav-button left" @click="prevSlide">&#8249;</button>
      <button class="nav-button right" @click="nextSlide">&#8250;</button>
    </div>
  </template>
  
  <script setup>
  import banner1 from "@/assets/banner1.jpg";
  import banner2 from "@/assets/banner2.jpg";
  import banner3 from "@/assets/banner3.jpg";
  import banner4 from "@/assets/banner4.jpg";
  
  import { ref, onMounted, onUnmounted } from "vue";
  
  // Banner data
  const banners = [
    { img: banner1, title: "Exclusive Offer", subtitle: "Shop Now", alt: "Banner 1" },
    { img: banner2, title: "Numbuzin Deals", subtitle: "Discover More", alt: "Banner 2" },
    { img: banner3, title: "Innisfree Special", subtitle: "Natural Beauty", alt: "Banner 3" },
    { img: banner4, title: "Round Lab Favorites", subtitle: "Shop the Collection", alt: "Banner 4" },
  ];
  
  // State to track the current slide
  const currentSlide = ref(0);
  
  // Function to navigate to the next slide
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % banners.length;
  };
  
  // Function to navigate to the previous slide
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + banners.length) % banners.length;
  };
  
  // Auto-scroll functionality
  let autoScrollInterval;
  
  onMounted(() => {
    autoScrollInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-scroll every 2.5 seconds
  });
  
  onUnmounted(() => {
    clearInterval(autoScrollInterval); // Clear interval on component unmount
  });
  </script>
  
  <style scoped>
  /* Main Carousel Container */
  .carousel {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
  }
  
  /* Carousel Track */
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }
  
  /* Individual Slide */
  .carousel-slide {
    flex: 0 0 100%;
    position: relative;
  }
  
  .carousel-slide img {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
    object-position: center center;
  }
  
  /* Text Content Overlay */
  .img-content {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .img-content h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .img-content p {
    font-size: 1rem;
  }
  
  /* Navigation Buttons */
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s ease;
  }
  
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .nav-button.left {
    left: 20px;
  }
  
  .nav-button.right {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    .nav-button {
      width: 40px;
      height: 40px;
      font-size: 1.25rem;
    }
  }
  </style>
  