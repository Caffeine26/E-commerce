<template>
  <div>
    <Header/>
    <h1 class="container_text">
      <div class="content">
        ALL PRODUCTS
      </div>
     </h1>
    <ProductGrid :products="products"/>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "@/components/Header.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import Footer from "@/components/Footer.vue";

// Importing images for the products
import img1 from "@/assets/img/p1.jpg";

// Define the products array with different product details
const products = ref([
  {
    img: img1,
    sale: true,
    name: "Numbuzin Sunscreen",
    price: "$32.00",
  },
  {
    img: "@/assets/img/p1.jpg",
    sale: false,
    name: "Product 2",
    price: "$20.00",
  },
  {
    img: "@/assets/img/p1.jpg",
    sale: true,
    name: "Product 3",
    price: "$50.00",
  },
  {
    img: "@/assets/img/p1.jpg",
    sale: false,
    name: "Product 4",
    price: "$25.00",
  },
  {
    img: "@/assets/img/p1.jpg",
    sale: false,
    name: "Product 5",
    price: "$25.00",
  },
  {
    img: "@/assets/img/p1.jpg",
    sale: false,
    name: "Product 6",
    price: "$25.00",
  },
  {
    img: "@/assets/img/p1.jpg",
    sale: false,
    name: "Product 7",
    price: "$25.00",
  },
]);
</script>
<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensure full viewport height */
}

.container_text {
  text-align: center;
  font-size: 65px;
  color: white;
  width: calc(100% + 300px); /* Match the Header's width */
  margin-left: -150px; /* Match the Header's left margin */
  margin-bottom: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  height: 350px; /* Min height */
  background-image: url('@/assets/img/banner1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}


.content {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  width: 100%; /* Adjust width to fit within the parent container */
  height: 30%; /* Ensure the height is 100% of the parent */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Center the text inside content */
}







  
  </style>
  


