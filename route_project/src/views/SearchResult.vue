<template>
    <Header />
    <div class="search-results">
      <h1>Search Results</h1>
      <div v-if="results.length > 0" class="product-list">
        <SingleProduct
          v-for="product in results"
          :key="product.id"
          :product="product"
        />
      </div>
      <p v-else>No products found for your search.</p>
    </div>
    <Footer />
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import SingleProduct from "@/components/SingleProduct.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    components: {
        Header,
      SingleProduct,
      Footer,
    },
    data() {
      return {
        results: [], // Search results data
      };
    },
    created() {
      // Parse the query parameter for search results
      const queryResults = this.$route.query.results;
  
      if (queryResults) {
        try {
          this.results = JSON.parse(queryResults);
        } catch (e) {
          console.error("Failed to parse search results:", e);
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .search-results {
    padding: 20px;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  