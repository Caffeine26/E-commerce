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
  // Import banner images
  import banner1 from "@/assets/images/banner1.jpg";
  import banner2 from "@/assets/images/banner2.jpg";
  import banner3 from "@/assets/images/banner3.jpg";
  import banner4 from "@/assets/images/banner4.jpg";
  
  import { ref } from "vue";
  
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
  </script>
  
  <style scoped>
  /* Main Carousel Container */
  .carousel {
    position: relative;
    width: 100%;
    height: 80vh; /* Set a specific height for the carousel */
    overflow: hidden;
  }
  
  /* Carousel Track */
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out; /* Smooth sliding animation */
    width: 100%;
  }
  
  /* Individual Slide */
  .carousel-slide {
    flex: 0 0 100%; /* Each slide takes full width */
    position: relative;
  }
  
  /* Adjust the image size to prevent overflow */
  .carousel-slide img {
    width: 100%; /* Image takes full width of the container */
    max-height: 80vh; /* Ensure the image height is within 80% of the viewport height */
    object-fit: cover; /* Ensure the image scales properly without distortion */
    object-position: center center; /* Center the image within the container */
  }
  
  /* Text Content Overlay */
  .img-content {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(0, 0, 0, 0.5); /* Transparent black background */
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
    top: 50%; /* Vertically center the button */
    transform: translateY(-50%); /* Ensure perfect vertical alignment */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: #fff; /* Button text/icon color */
    border: none; /* Remove default button borders */
    border-radius: 50%; /* Make the button circular */
    width: 50px; /* Button size */
    height: 50px;
    display: flex; /* Center the icon inside the button */
    justify-content: center;
    align-items: center;
    font-size: 1.5rem; /* Icon size */
    cursor: pointer; /* Pointer cursor for interactivity */
    z-index: 10; /* Ensure the button appears above other elements */
    transition: background-color 0.3s ease; /* Smooth hover effect */
  }
  
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Darker background on hover */
  }
  
  /* Left Button Position */
  .nav-button.left {
    left: 20px; /* Adjust horizontal positioning for the left button */
  }
  
  /* Right Button Position */
  .nav-button.right {
    right: 20px; /* Adjust horizontal positioning for the right button */
  }
  
  /* Ensure Buttons Adapt Responsively */
  @media (max-width: 768px) {
    .nav-button {
      width: 40px; /* Reduce button size for smaller screens */
      height: 40px;
      font-size: 1.25rem; /* Adjust icon size */
    }
  }
  </style>
  