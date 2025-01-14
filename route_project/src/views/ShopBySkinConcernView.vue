<template>
  <div>
    <!-- Header Component -->
    <Header />

    
    <GridComponent :categories="categories" @category-click="handleCategoryClick" />

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import Footer from "@/components/Footer.vue";
import GridComponent from "@/components/GridComponent.vue";

export default {
  components: {
    Header,
    GridComponent,
    Footer,
  },
};
</script>

<style scoped>
/* Poster Grid: Display 3 posters in a row */
.poster-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* This creates 3 equal columns */
  gap: 20px;
  padding: 20px;
}

/* Styling for individual posters */
.poster {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.poster img {
  width: 100%;
  height: 150px; /* Adjust height as needed */
  object-fit: cover;
}

.poster h3 {
  font-size: 18px;
  margin-top: 10px;
}

.poster p {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

.poster button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.poster button:hover {
  background-color: #e04e4e;
}
</style>
