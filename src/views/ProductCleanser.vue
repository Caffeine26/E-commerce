<template>
    <div>
      <img :src="imageSrc" >
      <Navbar />
      <ProductGrid :products="products" />
    </div>
  </template>
  <script>
  import Navbar from "../components/NavbarCleanser.vue";
  import ProductGrid from "../components/ProductGrid.vue";
    export default {
      name: "Products",
  
      components: { Navbar, ProductGrid },
      data() {
        return {
          products: [
            {
              id: 1,
              name: "Numbuzin No.1 Panthenol",
              originalPrice: "$16.00",
              discountedPrice: "$11.88",
              image: "src/assets/img//p.png",
            },
            {
            id: 2,
            name: "Axis-Y Dark Spot Dark Serum",
            originalPrice: "$18.00",
            discountedPrice: "$11.88",
            image: "src/assets/img//p2.png",
          },
          {
            id: 3,
            name: "Roundlab Dokdo Cleanser",
            originalPrice: "$13.00",
            discountedPrice: "$9.00",
            image: "src/assets/img//p3.png",
          },
          {
            id: 4,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p4.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 6,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p6.png",
          },
          {
            id: 7,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p7.png",
          },
          {
            id: 8,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p8.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          {
            id: 5,
            name: "Anua BHA 2% Gentle Exfoliting",
            originalPrice: "$17.00",
            discountedPrice: "$14.88",
            image: "src/assets/img//p5.png",
          },
          
          ],
        };
      },
    };
    </script>
  <style>
  
  </style>