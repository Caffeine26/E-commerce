<template>
    <header class="header">
      <div class="container">
        <!-- Logo Section -->
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/Logo.png" alt="Website Logo" />
          </router-link>
        </div>
  
        <!-- Navigation Links -->
        <nav class="nav-links">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/all-products" class="nav-item">All Products</router-link>
          <router-link to="/promotions" class="nav-item">Promotions</router-link>
          <div class="dropdown">
            <router-link to="/categories" class="nav-item">Categories</router-link>
            <div class="dropdown-menu">
              <router-link to="/categories/1">Category 1</router-link>
              <router-link to="/categories/2">Category 2</router-link>
              <router-link to="/categories/3">Category 3</router-link>
            </div>
          </div>
          <router-link to="/shop-by-skin-concern" class="nav-item">Shop by Skin Concern</router-link>
          <router-link to="/brands" class="nav-item">Shop by Brands</router-link>
        </nav>
  
        <!-- Action Icons -->
        <div class="action-icons">
          <img src="@/assets/search.svg" alt="Search"  @click="toggleSearch"/>
          <img src="@/assets/heart.svg" alt="Favorites" />
          <img src="@/assets/user.svg" alt="User" />
          <img src="@/assets/cart.svg" alt="Cart" />
        </div>
      </div>
      <!-- Search Modal -->
    <div v-if="isSearchVisible" class="search-overlay" @click.self="toggleSearch">
      <div class="search-box">
        <input
          type="text"
          placeholder="Search for products..."
          v-model="searchQuery"
        />
        <button @click="handleSearch">Search</button>
      </div>
    </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  // State variables
const isSearchVisible = ref(false);
const searchQuery = ref("");
// Toggle search modal
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

// Handle search functionality
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log("Searching for:", searchQuery.value);
    // Add your search logic here
    toggleSearch(); // Close the search modal after searching
  }
};
  </script>
  
  <style scoped>
  /* Header Styles */
  .header {
    background-color: #ffffff;
    border-bottom: 2px solid #f0f0f0;
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    left: 0;
    right: 0;
    /* Full width */
  }
  
  /* Container */
  .container {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Logo */
  .logo img {
    height: 50px;
    width: auto;
  }
  
  /* Navigation Links */
  .nav-links {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .nav-item {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    transition: color 0.3s ease;
  }
  
  .nav-item:hover {
    color: #ff6b6b;
  }
  
  /* Dropdown */
  .dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 0;
    z-index: 10;
  }
  
  .dropdown:hover .dropdown-menu {
    display: flex;
    flex-direction: column;
  }
  
  .dropdown-menu a {
    text-decoration: none;
    color: #333333;
    font-size: 14px;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
  }
  
  .dropdown-menu a:hover {
    background-color: #f8f8f8;
  }
  
  /* Action Icons */
  .action-icons img {
    height: 24px;
    width: 24px;
    margin-left: 15px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .action-icons img:hover {
    transform: scale(1.1);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  
    .hamburger-menu {
      display: block;
    }
  }
  /* New styles for search functionality */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.search-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 10px;
}

.search-box input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.search-box button {
  padding: 8px 16px;
  background-color: #ff6b6b;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-box button:hover {
  background-color: #ff4a4a;
}

  </style>
  