<template>
  <div id="app">
    <NavbarAllproductpage/>
    <BrandGrid/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import BrandGrid from "./components/BrandGrid.vue";
import NavbarAllproductpage from "./components/Navbar.vue";
export default {
  name: "App",
  components: { 
    NavbarAllproductpage,
    BrandGrid,
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
