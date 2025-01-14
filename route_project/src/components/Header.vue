<template>
  <!-- Action Icons -->
  <div class="action-icons">
    <img src="@/assets/img/image1.png" alt="Translate" />
    <img src="@/assets/search.svg" alt="Search" @click="toggleSearch" />
    <div class="favorite-icon" @click="toggleFavoriteSidebar">
      <img src="@/assets/heart.svg" alt="Favorites" />
      <span v-if="favoriteCount > 0" class="favorite-count">{{ favoriteCount }}</span>
    </div>
    <img src="@/assets/user.svg" alt="User" @click="goToLogin" />
    
    <img src="@/assets/cart.svg" alt="Cart" @click="goToCart" />
    <div v-if="countCartProducts" id="qty">{{ countCartProducts }}</div>
     
    
  </div>

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

  <!-- Favorite Sidebar -->
  <div v-if="isFavoriteSidebarVisible" class="favorite-sidebar">
    <div class="favorite-header">
      <h3>Your Favorites</h3>
      <button @click="toggleFavoriteSidebar">Close</button>
    </div>
    <div class="favorite-list">
      <div v-if="favorites.length > 0">
        <div v-for="product in favorites" :key="product.id" class="favorite-item">
          <img :src="product.image" alt="Product Image" />
          <div>
            <h4>{{ product.name }}</h4>
            <p>{{ product.price }}</p>
          </div>
        </div>
      </div>
      <p v-else>No favorite products added yet.</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/Products';

export default {
  setup(){
    const store = useProductStore()
    return { store }
  },
  data() {
    return {
      isSearchVisible: false,
      isFavoriteSidebarVisible: false,
      searchQuery: '',
      favorites: [], // List of favorite products
    };
  },
  computed: {
    favoriteCount() {
      return this.favorites.length;
    },
    countCartProducts(){
      return this.store.cart.length
    }
  },
  methods: {
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    },
    toggleFavoriteSidebar() {
      this.isFavoriteSidebarVisible = !this.isFavoriteSidebarVisible;
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToCart(){
      this.$router.push('/shopping-cart');
    },
    handleSearch() {
      const query = this.searchQuery.trim().toLowerCase();

      const routes = {
        promotions: '/promotions',
        products: '/all-products',
        categories: '/categories',
        "skin concern": '/shop-by-skin-concern',
        brands: '/brands',
      };

      const matchedRoute = Object.keys(routes).find((key) =>
        query.includes(key)
      );

      if (matchedRoute) {
        this.$router.push(routes[matchedRoute]);
        this.toggleSearch();
      } else {
        alert('No results found for your search.');
      }
    },
  },
};
</script>

<style scoped>
.favorite-icon {
  position: relative;
  cursor: pointer;
}

.favorite-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.favorite-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  transform: translateX(0);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.favorite-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2c0e4;
  border-bottom: 1px solid #ddd;
}

.favorite-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.favorite-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.favorite-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
/* In your global CSS file */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #app {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Header styling */

.container {
  width: calc(100% + 300px); /* This adds extra width to the container */
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2c0e4;
  margin-left: -150px; /* Move the container to the left by 150px */
  margin-bottom:1px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds shadow below the header */
}

.logo {
  padding-right: 170px;
}

.logo img {
  height: 70px;
  width: auto;
  margin-left:100px;
}

.nav-links {
  display: flex;
  gap: 20px;

  align-items: center;
}

.nav-item {
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #120808;
  transition: color 0.3s ease;
  margin: 17px;
  padding-left: 5px;
}

.nav-item:hover {
  color: #ff6b6b;
}

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

.action-icons {
  display: flex;
  justify-content: flex-end;
  /* background-color: #ff6b6b; */
}

.action-icons img {
  height: 30px;
  width: 34px;
  margin-left: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.action-icons img:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger-menu {
    display: block;
  }
}

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
#qty{
  color: whitesmoke;
  font-size: 10px;
  font-weight: 700;
  background-color: #ff6b6b;
  padding: 0px 5px 0px 5px;
  border-radius: 50%;
  float: right;
  margin-left: -10px;
  height: fit-content;
 
}
</style>
