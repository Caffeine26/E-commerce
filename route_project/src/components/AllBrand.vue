<template>
  <div class="brands-container">
    <h2>Shop by Brands</h2>
    <div class="brands-list">
      <!-- Loop through each brand -->
      <div 
        class="brand-card" 
        v-for="(brand, index) in brands" 
        :key="index"
      >
        <router-link :to="'/brand/' + brand.name.trim()" class="brand-link">
          <div class="brand-image" :style="{ backgroundImage: `url(${brand.image})` }"></div>
        </router-link>
      </div>
    </div>
    <router-link to="/brands">
        <button class="btn">SEE ALL</button>
      </router-link>
  </div>
</template>

<script setup>
import brand1 from "@/assets/img/banner1.jpg";
import brand2 from "@/assets/img/banner2.jpg";
import brand3 from "@/assets/img/banner3.jpg";
import brand4 from "@/assets/img/banner4.jpg";

import { ref } from 'vue';

// Define the brands data
const brands = ref([
  { name: 'Dr. Althea', image: brand1 },
  { name: 'Brand B', image: brand2 },
  { name: 'Brand C', image: brand3 },
  { name: 'Brand D', image: brand4 },
]);
</script>

<style scoped>
.brands-container {
  padding: 20px;
  text-align: center;
}

.brands-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.brand-card {
  width: 23%;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px; /* Added margin for better spacing */
}

.brand-card:hover {
  transform: translateY(-5px);
}

.brand-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.brand-image {
  width: 100%;
  height: 200px;
  background-size: cover; /* Ensures full coverage of the image */
  background-position: center;
  background-repeat: no-repeat; /* Prevents image from repeating */
}

/* Responsive design */
@media (max-width: 768px) {
  .brand-card {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .brand-card {
    width: 90%;
  }
}

h2 {
  font-size: 50px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-family: 'Times New Roman', serif;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  letter-spacing: 1px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px; /* Added margin-bottom for spacing below heading */
}
.btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #88817f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
