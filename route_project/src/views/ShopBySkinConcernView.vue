<template>
  <div>
    <Header />
    <PosterGrid :posters="posters" />
    <ProductGrid :products="products" />
    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import PosterGrid from "@/components/PosterGrid.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import Footer from "@/components/Footer.vue";


import img1 from "@/assets/img/p1.jpg";

// Define the posters array for PosterGrid
const posters = ref([
  {
    title: "Special Promotion 1",
    description: "Exclusive deal just for you!",
    image: img1,
    buttonText: "Shop Now",
  },
  {
    title: "Special Promotion 2",
    description: "Limited-time offer!",
    image: img1,
    buttonText: "Learn More",
  },
  {
    title: "Special Promotion 3",
    description: "Don't miss out!",
    image: img1,
    buttonText: "Buy Now",
  },
  {
    title: "Special Promotion 3",
    description: "Don't miss out!",
    image: img1,
    buttonText: "Buy Now",
  },
  {
    title: "Special Promotion 3",
    description: "Don't miss out!",
    image: img1,
    buttonText: "Buy Now",
  },
  {
    title: "Special Promotion 3",
    description: "Don't miss out!",
    image: img1,
    buttonText: "Buy Now",
  },
  {
    title: "Special Promotion 3",
    description: "Don't miss out!",
    image: img1,
    buttonText: "Buy Now",
  },
  {
    title: "Special Promotion 3",
    description: "Don't miss out!",
    image: img1,
    buttonText: "Buy Now",
  },
]);

// Define the products array for ProductGrid
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

<style scoped>
/* Make sure PosterGrid displays 3 posters in a row */
.poster-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* This will create 3 columns */
  gap: 20px;
  padding: 20px;
}

/* Optional: Styling for individual posters */
.poster {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.poster img {
  width: 100%;
  height: 150px; /* Adjust height if needed */
  object-fit: cover;
}

.poster h3 {
  font-size: 18px;
  margin-top: 10px;
}

.poster p {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

.poster button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

.poster button:hover {
  background-color: #e04e4e;
}

</style> 