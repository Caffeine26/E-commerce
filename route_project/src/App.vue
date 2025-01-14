<template>

  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import { useProductStore } from './stores/Products'
import axios from 'axios'

export default{
  setup(){
    const store = useProductStore()
    const hello = "hello world"
    return { store, hello }
  },

  methods : {
    // fetchProducts(){
    //   axios.get('http://localhost:3000/api/products')
    //   .then(response => {
    //     this.store.products = response.data
    //     console.log(this.store.products)
    //     this.store.getProductImgs()
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data: ', error);
    //   })
    // }
  },

  async created(){
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      this.store.products = data;
      
      this.store.getProductImgs()
      console.log(this.store.products)

    } catch (error) {
      console.error('Error during mounted lifecycle hook:', error);
    } finally {
      this.loading = false;
    }
    
  }
}

</script>

<style scoped>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}

</style>
