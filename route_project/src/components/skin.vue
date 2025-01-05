<template>
  <h3 class="header">Shop by skin concern</h3>
  <div class="shop-by-concern">
    <div class="carousel">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentSlide * 33.33}%)` }"
      >
        <!-- Loop through each banner -->
        <div
          class="carousel-slide"
          v-for="(banner, index) in banners"
          :key="index"
        >
          <router-link 
            :to="'/shop-by-skin-concern'" 
            class="banner-link"
          >
            <img :src="banner.img" :alt="banner.alt" />
            <div class="img-content">
              <h2>{{ banner.title }}</h2>
              <p>{{ banner.subtitle }}</p>
            </div>
          </router-link>
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
import banner1 from "@/assets/img/p1.jpg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3.jpg";
import banner4 from "@/assets/img/banner4.jpg";

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
.header {
    font-size: 50px;
    padding-top: 70px;
    padding-bottom: 20px;
    font-family: 'Times New Roman', serif;
    font-weight: 900;
    color: black;
    text-transform: uppercase;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    letter-spacing: 1px;
    text-align: center;
    margin: auto;
 
 
}

.shop-by-concern {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.carousel {
  position: relative;
  display: flex;
  width: 100%;
  height: 60vh;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex: 0 0 33.33%;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
}

.banner-link {
  display: block;
  width: 100%;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-content {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
}

.img-content h2 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.img-content p {
  font-size: 1rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}

@media (max-width: 768px) {
  .carousel-slide {
    flex: 0 0 50%;
  }
}

@media (max-width: 480px) {
  .carousel-slide {
    flex: 0 0 100%;
  }
}
</style>
