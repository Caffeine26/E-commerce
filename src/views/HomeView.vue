<template>
   <div>
      <Header/>
      <Banner/>
      <SectionAllProduct />
      <SectionShopBySkinConcern/>
      <SectionNewArrivial/>
      <Footer></Footer>
  
   </div>
</template>
<script setup>
import Banner from "@/components/Banner.vue";
import Header from "@/components/Header.vue";
import SectionAllProduct from "@/components/SectionAllProduct.vue";
import SectionShopBySkinConcern from "@/components/SectionShopByskin.vue"
import Footer from "@/components/Footer.vue";
import SectionNewArrivial from "@/components/SectionNewArrivial.vue";

</script>