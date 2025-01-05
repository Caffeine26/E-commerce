<template>
    <div id="app">
      <Products />
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from "./components/Footer.vue";
  import Products from "./ProductAllproductpage.vue";
  export default {
    name: "App",
    components: { 
      Products,
      Footer,
     },
  };
  </script>
  <style>
    #app {
    display: flex;
    flex-direction: column;
  }
  
  </style>
  