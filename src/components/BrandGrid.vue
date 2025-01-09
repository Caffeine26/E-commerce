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
          { name: "Round Lab", logo: "path-to-logo3.png" },
          { name: "Torriden", logo: "src/assets/img/Torriden.png" },
          { name: "Anua", logo: "path-to-logo5.png" },
          { name: "Jumiso", logo: "path-to-logo6.png" },
          { name: "Mary & May", logo: "path-to-logo7.png" },
          { name: "Cosrx", logo: "path-to-logo8.png" },
          { name: "Some By Mi", logo: "path-to-logo9.png" },
          { name: "Aromatica", logo: "src/assets/img/Aromatica.png" },
          { name: "Benton", logo: "path-to-logo11.png" },
          { name: "Rohto", logo: "path-to-logo12.png" },
          { name: "Biore", logo: "path-to-logo13.png" },
          { name: "Missha", logo: "path-to-logo14.png" },
          { name: "Isntree", logo: "path-to-logo15.png" },
          { name: "Goodal", logo: "path-to-logo16.png" },
          { name: "Atopalm Real Barrier", logo: "path-to-logo17.png" },
          { name: "Dove", logo: "path-to-logo18.png" },
          { name: "Baby Bright", logo: "path-to-logo19.png" },
          { name: "Dr.G", logo: "path-to-logo20.png" },
          { name: "The Ordinary", logo: "path-to-logo21.png" },
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
  