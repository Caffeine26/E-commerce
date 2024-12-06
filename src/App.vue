<template>
  <div id="app">
    <Products />
  </div>
</template>

<script>
import Products from "./views/Product.vue";
export default {
  name: "App",
  components: { 
    Products,
   },
};
</script>
<style>
  #app {
  display: flex;
  flex-direction: column;
}

</style>
