<template>
    <div id="app">
      <Header />
      <h1 class="brand">Shop by Brands</h1>
      <BrandGrid/>
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from "@/components/Footer.vue";
  import BrandGrid from "@/components/BrandPage.vue";
  import Header from "@/components/Header.vue";
  export default {
    name: "App",
    components: { 
      Header,
      BrandGrid,
      Footer,
     },
  };
  </script>
  <style>
    #app {
    display: flex;
    flex-direction: column;
    height:100%;
  }
  .brand{
  text-align: center;
  font-size: 65px;
  color: white;
  width: calc(100% + 300px); /* Match the Header's width */
  margin-left: -150px; /* Match the Header's left margin */
  margin-bottom: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  height: 100px; /* Min height */
  background-image: url('@/assets/img/banner4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
  
  </style>
  