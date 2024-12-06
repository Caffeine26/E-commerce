<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'


</script> -->

<template>
  <product-description
  :id="products[0].pid"
  :name="products[0].name"
  :reviewAmount="products[0].reviewAmount"
  :price="products[0].price"
  :imgUrl="products[0].imgUrl"
  :briefDescription="products[0].briefDescription"
  ></product-description>

</template>

<script>
export default{
  components : {
    
  },

  data(){
    return{
      products : [
        {
          pid : '001',
          name: 'Cetaphil Brightening Healthy Radiance Perfecting Serum 7X Power With Antioxidant C & Advanced Peptide',
          reviewAmount : 30,
          price : '21.88',
          imgUrl : '../assets/img/cetaphil_green.png',
          briefDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum'
        }
      ]
    }
  }
}
</script>

<style>
.star{
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #faf604 50%, #a6a6a6 50%);
}
#starimg{
  /* background-color: #faf604; */
  color:aqua
}
</style>

