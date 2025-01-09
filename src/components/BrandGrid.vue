<template>
    <div class="brand-grid">
      <div v-for="(brand, index) in brands" :key="index" class="brand-item">
        <img :src="brand.logo" :alt="brand.name" />
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "BrandGrid",
    data() {
      return {
        brands: [
          { name: "Dr. Althea", logo: "/src/assets/img/DrAlthea.png" },
          { name: "Numbuzin", logo: "src/assets/img/Numbuzin.png" },
          { name: "The Odinary", logo: "src/assets/img/photo_2024-11-26_20-36-54.jpg" },
          { name: "Torriden", logo: "src/assets/img/Torriden.png" },
          { name: "Fwee", logo: "src/assets/img/Fwee.png" },
          { name: "Jumiso", logo: "src/assets/img/Jumiso.png" },
          { name: "Mary & May", logo: "src/assets/img/Mary&May.png" },
          { name: "Cosrx", logo: "src/assets/img/Cosrx.png" },
          { name: "Some By Mi", logo: "src/assets/img/SomeByMi.png" },
          { name: "Aromatica", logo: "src/assets/img/Aromatica.png" },
          { name: "Benton", logo: "src/assets/img/Benton.jpg" },
          { name: "Rohto", logo: "src/assets/img/Rotho.jpg" },
          { name: "Biore", logo: "src/assets/img/Biore.jpg" },
          { name: "Missha", logo: "src/assets/img/Missha.jpg" },
          { name: "Isntree", logo: "src/assets/img/Istree.jpg" },
          { name: "Goodal", logo: "src/assets/img/photo_2024-11-26_20-36-37.jpg" },
          { name: "TOCOBO", logo: "src/assets/img/photo_2024-11-26_20-37-04.jpg" },
          { name: "Dove", logo: "src/assets/img/photo_2024-11-26_20-36-43.jpg" },
          { name: "Skin and Lab", logo: "src/assets/img/photo_2024-11-26_20-36-59.jpg" },
          { name: "Dr.G", logo: "src/assets/img/photo_2024-11-26_20-36-56.jpg" },
          { name: "Avene", logo: "src/assets/img/photo_2024-11-26_20-51-42.jpg" },
          { name: "AnUa", logo: "src/assets/img/AnUa.png" },
          { name: "Axis", logo: "src/assets/img/Axis-y.png" },
          { name: "Corx", logo: "src/assets/img/Cosrx.png" },
          { name: "DrAlthea", logo: "src/assets/img/DrAlthea.png" },
        ],
      };
    },
  };
  </script>
  <style scoped>
  .brand-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Adjust to fit desired columns */
    gap: 20px;
    padding: 20px;
    margin-left: 70px;
    width: 1000px;
  }
  
  .brand-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; /* Optional background */
    border: 1px solid #ddd; /* Optional border */
    border-radius: 8px;

    transition: transform 0.3s ease;
  }
  
  .brand-item img {
    max-width: 100%;
    max-height: 100%; /* Adjust for logo size */
    object-fit: contain;
    background-color: white;
    
  }
  
  .brand-item:hover {
    transform: scale(1.05);
  }
  </style>
  