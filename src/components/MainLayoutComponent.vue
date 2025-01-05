<template>
    <div id="main-layout">
      <Navbar />
      <GridComponent :categories="categories" />
      <Footer />
    </div>
    
</template>
  
<script>
import GridComponent from './GridComponent.vue';
import Navbar from './NavbarCategory.vue';  
import Footer from './Footer.vue';
  export default {
    name: "MainLayoutComponent",
    components: {
      Navbar,
      GridComponent,
      Footer,
    },
    data() {
      return {
        categories: [
          { name: "Toners", image: "src/assets/img/toner.png" },
          { name: "Hair Products", image: "src/assets/img/hair.png" },
          { name: "Shower", image: "src/assets/img/shower.png" },
          { name: "Moisturizer", image: "src/assets/img/moisturizer.png" },
          { name: "Pimple Patches", image: "src/assets/img/patch.png" },
          { name: "Sunscreen", image: "src/assets/img/sunscreen.png" },
          { name: "Make Up", image: "src/assets/img/makeup.png" },
          { name: "Cleansers", image: "src/assets/img/foam.png" },
          { name: "Essence/Serum", image: "src/assets/img/serum.png" },
          { name: "Double Cleansing", image: "src/assets/img/double.png" },
          { name: "Masks", image: "src/assets/img/mask.png" },
          { name: "Skincare Set", image: "src/assets/img/set.png" },
        ],
      };
    },
  };
  </script>
  

  