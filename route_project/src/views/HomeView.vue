<template>
   <div>
    <Header />
      <Banner />
      <SectionAllproduct />
      <Promotion />
      <ShopBySkinConcern />
      <SectionNewArrivial />
      <AllBrand/>
      <Footer />
   </div>
     
    
  </template>
  
  <script setup>
  import Header from "@/components/Header.vue";
  import Banner from "@/components/Banner.vue";
  import SectionAllproduct from "@/components/AllProduct.vue";
  import Promotion from "@/components/Promotion.vue";
  import ShopBySkinConcern from "@/components/skin.vue";
  import SectionNewArrivial from "@/components/SectionNewArrival.vue";
  import AllBrand from "@/components/AllBrand.vue";
  import Footer from "@/components/Footer.vue";
  </script>
  
  <style scoped>
  /* Additional global styles for the homepage can go here */
  </style>
  