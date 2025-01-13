<template>
    <div class="brand-grid">
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="brand-item"
        @click="chooseBrand(brand)"
      >
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
          { name: "Numbuzin", logo: "/src/assets/img/numbuzin.png" },
          { name: "The Ordinary", logo: "/src/assets/img/photo_2024-11-26_20-36-54.jpg" },
          { name: "Torriden", logo: "/src/assets/img/Torriden.png" },
          { name: "Fwee", logo: "/src/assets/img/Fwee.png" },
          { name: "Jumiso", logo: "/src/assets/img/Jumiso.png" },
          { name: "Mary & May", logo: "/src/assets/img/Mary&May.png" },
          { name: "Cosrx", logo: "/src/assets/img/Cosrx.png" },
          { name: "Some By Mi", logo: "/src/assets/img/SomeByMi.png" },
          { name: "Aromatica", logo: "/src/assets/img/Aromatica.png" },
          { name: "Benton", logo: "/src/assets/img/numbuzin.png" },
          { name: "Rohto", logo: "/src/assets/img/Rotho.jpg" },
          { name: "Biore", logo: "/src/assets/img/Biore.jpg" },
          { name: "Missha", logo: "/src/assets/img/Missha.jpg" },
          { name: "Isntree", logo: "/src/assets/img/Istree.jpg" },
          { name: "Goodal", logo: "/src/assets/img/photo_2024-11-26_20-36-37.jpg" },
          { name: "TOCOBO", logo: "/src/assets/img/photo_2024-11-26_20-37-04.jpg" },
          { name: "Dove", logo: "/src/assets/img/photo_2024-11-26_20-36-43.jpg" },
          { name: "Skin and Lab", logo: "/src/assets/img/photo_2024-11-26_20-36-59.jpg" },
          { name: "Dr.G", logo: "/src/assets/img/photo_2024-11-26_20-36-56.jpg" },
          { name: "Avene", logo: "/src/assets/img/photo_2024-11-26_20-51-42.jpg" },
          { name: "AnUa", logo: "/src/assets/img/AnUa.png" },
          { name: "Axis", logo: "/src/assets/img/Axis-y.png" },
          { name: "Cosrx", logo: "/src/assets/img/Cosrx.png" },
          { name: "DrAlthea", logo: "/src/assets/img/DrAlthea.png" },
        ],
      };
    },
    methods: {
      chooseBrand(brand) {
        // Navigate to the BrandProducts page, passing brandName as a parameter
        this.$router.push({ name: 'BrandProducts', params: { brandName: brand.name } });
      },
    },
  };
  </script>
  
  <style scoped>
  .brand-grid {
  display: flex; /* Use flexbo x for layout */
  flex-wrap: wrap; /* Wrap items to avoid overflow */
  justify-content: space-around; /* Center items */
  width: 100%; /* Ensure full width of parent container */
  margin: 0 auto; /* Center grid within parent */
  padding: 20px; /* Optional inner spacing */
  box-sizing: border-box; /* Include padding in width calculation */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.brand-item {
  flex: 1 1 200px; /* Adjusts item size responsively */
  margin: 10px; /* Space between items */
  max-width: 300px; /* Optional limit for item width */
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
  