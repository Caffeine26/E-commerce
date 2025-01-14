<template>
  <div>
    <Header />
    <Promotion />
    <ProductGrid :myproducts="promoProducts()" />
  
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Header from "@/components/Header.vue";
import Promotion from "@/components/Promotion.vue";
import Footer from "@/components/Footer.vue";
import ProductGrid from "@/components/ProductGrid.vue";

// Correct image import
import img1 from "@/assets/img/p1.jpg"; // Adjust the path to the correct image file
import { useProductStore } from "@/stores/Products";

const store = useProductStore()

function promoProducts(){
  let promoProducts = this.store.products.filter(product => product.promotionAsPercentage > 0)
  console.log(promoProducts)
  return promoProducts
}


// Define the products array
const products = ref([
  {
    img: img1, // Use the imported image here
    sale: true,
    name: "Numbuzin Sunscreen",
    price: "$32.00",
  },
  {
    img: "@/assets/img/p1.jpg", // Keep as is if you want to use the direct path
    sale: false,
    name: "Product 2",
    price: "$20.00",
  },
  {
    img: "@/assets/img/p1.jpg", // Same here
    sale: true,
    name: "Product 3",
    price: "$50.00",
  },
  {
    img: "@/assets/img/p1.jpg", // Same here
    sale: false,
    name: "Product 4",
    price: "$25.00",
  },
  {
    img: "@/assets/img/p1.jpg", // Same here
    sale: false,
    name: "Product 5",
    price: "$25.00",
  },
  {
    img: "@/assets/img/p1.jpg", // Same here
    sale: false,
    name: "Product 6",
    price: "$25.00",
  },
  {
    img: "@/assets/img/p1.jpg", // Same here
    sale: false,
    name: "Product 7",
    price: "$25.00",
  },
]);
</script>
