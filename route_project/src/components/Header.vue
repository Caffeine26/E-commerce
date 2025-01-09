<template>
  <!-- Action Icons -->
  <div class="action-icons">
    <img src="@/assets/img/image1.png" alt="Translate" />
    <img src="@/assets/search.svg" alt="Search" @click="toggleSearch" />
    <img src="@/assets/heart.svg" alt="Favorites" />
    <img src="@/assets/user.svg" alt="User" @click="goToLogin" />
    <img src="@/assets/cart.svg" alt="Cart" />
  </div>

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

<script>
import Banner from './Banner.vue';
export default {
  components: {
    Banner, // Register the Banner component
  },
  data() {
    return {
      isSearchVisible: false,
      searchQuery: '',
    };
  },
  methods: {
    // Toggle the search modal visibility
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    },
    
    // Navigate to the login page
    goToLogin() {
      this.$router.push('/login'); // Navigate to the login route
    },

    // Handle search logic (you can define this further)
    handleSearch() {
      console.log('Searching for:', this.searchQuery);
      // Add search functionality here
    },
  },
};
</script>

<script setup>
import { ref } from 'vue';

// State variables
const isSearchVisible = ref(false);
const searchQuery = ref('');

// Toggle search modal
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

// Handle search functionality
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value);
    // Add your search logic here
    toggleSearch(); // Close the search modal after searching
  }
};
</script>

<style scoped>
/* Ensure the header spans the full width */
.header {
  width: 100%; /* Full viewport width */
  height: 10vh; /* Height relative to viewport */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Align vertically to the center */
  align-items: center; /* Align horizontally to the center */
  background-color: rgb(244, 201, 227);
  padding: 5px 0; /* Inner spacing */
  position: relative;
  z-index: 1000;
}

/* Adjust the container to span full width */
.container {
  width: 100%; /* Full width */
  margin: 0; /* Remove default margin */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  padding-left: 10px;
  margin: 20px;
  box-sizing: border-box;
}

.logo {
  padding-right: 200px;
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
.action-icons {
  display: flex;
  justify-content: flex-end;
}

/* Action Icons Styling */
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

/* Search Overlay Styles */
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
