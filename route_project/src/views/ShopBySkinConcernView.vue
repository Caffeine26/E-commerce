<template>
    <div class="bigger-page">
      <Header />
      <Skin class="scrollable-section" />
      <AllProduct class="scrollable-section" />
      <SectionNewArrivial class="scrollable-section" />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "@/components/Header.vue";
  import Skin from "@/components/skin.vue";
  import Footer from "@/components/Footer.vue";
  </script>
  
  <style scoped>
  /* Ensure the parent container fills the viewport */
  .bigger-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh; /* Full screen height */
  }
  
  /* Let sections grow and shrink */
  .bigger-page > * {
    flex-grow: 1;
  }
  
  header,
  footer {
    flex-shrink: 0; /* Fixed size for header and footer */
  }
  
  /* Enable scroll for overflowing sections */
  .scrollable-section {
    overflow-y: auto;
  }
  
  /* Reset global styles */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  