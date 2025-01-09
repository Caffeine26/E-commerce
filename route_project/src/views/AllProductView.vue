<template>
  <div>
    <Header/>
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
