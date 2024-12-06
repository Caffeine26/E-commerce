<template>
  
  <nav class="navbar">
    <ul class="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">All Products</a></li>
      <li><a href="#">Promotions</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#">Shop by Skin Concern</a></li>
      <li><a href="#">Shop by Brands</a></li>
    </ul>
  </nav>
  
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Navbar container */
.navbar {
  width: 1000px;
  display: flex;
  justify-content: center;
  background-color: #87999d;
  box-shadow: 0 2px 5px rgba(104, 122, 125, 0.1);
  padding: 1rem 2rem;
  margin-left: 70px;
}

/* List styling */
.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin-left: 220px;
  gap: 2rem;
}

.nav-list a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
}

/* Hover effect */
.nav-list a:hover {
  color: #007bff;
}
</style>
