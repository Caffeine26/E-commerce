<template>
   <div>
      <Header/>
      <Banner/>
      <star-rating></star-rating>
      <SectionAllProduct />
      <SectionShopBySkinConcern/>
      <SectionNewArrivial/>
      <Footer></Footer>
  
   </div>
</template>
<script setup>
import StarRating from "@/components/StarRating.vue";
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import SectionAllProduct from "@/components/SectionAllProduct.vue";
import SectionShopBySkinConcern from "@/components/SectionShopByskin.vue"
import Footer from "@/components/Footer.vue";
import SectionNewArrivial from "@/components/SectionNewArrivial.vue";

</script>