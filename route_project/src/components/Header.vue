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
    <img src="@/assets/cart.svg" alt="Cart" />
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
            <router-link to="/categories/1">Toner</router-link>
            <router-link to="/categories/2">Hair Product</router-link>
            <router-link to="/categories/3">Shower</router-link>
            <router-link to="/categories/4">Pimple Patches</router-link>
            <router-link to="/categories/5">Sunscreen</router-link>
            <router-link to="/categories/6">Make Up</router-link>
            <router-link to="/categories/7">Essence/Serum</router-link>
            <router-link to="/categories/8">Double Cleansing</router-link>
            <router-link to="/categories/9">Masks</router-link>
            <router-link to="/categories/10">Skincare Set</router-link>
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
      <h3>My wishlist</h3>
      <button @click="toggleFavoriteSidebar">Close</button>
    </div>
    <div class="favorite-list">
      <div v-if="favorites.length > 0">
        <div v-for="product in favorites" :key="product.id" class="favorite-item">
          <img :src="product.img" alt="Product Image" />
          <div>
            <h4>{{ product.name }}</h4>
            <p>${{ product.price }}</p>
            <button @click="removeFromFavorites(product.id)">Remove</button>
          </div>
        </div>
      </div>
      <p v-else>No favorite products added yet.</p>
    </div>
    <button>View Cart</button>
    <button>Check Out</button>
  </div>
</template>

<script>
import { useFavoriteStore } from '@/stores/Favorite';
import { useProductStore } from '@/stores/Products';

export default {
  data() {
    return {
      isSearchVisible: false,
      isFavoriteSidebarVisible: false,
      searchQuery: '',
    };
  },
  computed: {
    // Get the list of favorite products from the store
    favorites() {
      const favoriteStore = useFavoriteStore();
      return favoriteStore.favorites;
    },
    // Compute the count of favorite products
    favoriteCount() {
      return this.favorites.length;
    },
  },
  methods: {
    removeFromFavorites(productId) {
      const favoriteStore = useFavoriteStore();
      favoriteStore.removeFavorite(productId);
    },
    toggleSearch() {
      this.isSearchVisible = !this.isSearchVisible;
    },
    toggleFavoriteSidebar() {
      this.isFavoriteSidebarVisible = !this.isFavoriteSidebarVisible;
    },
    goToLogin() {
      this.$router.push('/login');
    },
    handleSearch() {
      const query = this.searchQuery.trim().toLowerCase();
      const productStore = useProductStore();

      // Search products by name and brand
      const productsByName = productStore.getProductsByName(query);
      const productsByBrand = productStore.getProductsByBrand(query);

      if (productsByName.length > 0 || productsByBrand.length > 0) {
        const searchResults = [...productsByName, ...productsByBrand];

        // Pass the results via route query
        this.$router.push({
          path: '/search',
          query: { results: JSON.stringify(searchResults) },
        });

        this.toggleSearch();
      } else {
        alert('No products found for your search.');
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
  top: -1px;
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
  width: 550px;
  height: 100%;
  background-image: linear-gradient(to bottom, #b0bfab, #71769e);
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.15);
  z-index: 2000;
  transform: translateX(0);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}


.favorite-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.favorite-header h3 {
  margin: 0;
  color: #302c2c;
  font-weight: 600;
  font-size: 30px;
}

.favorite-header button {
  background: #ff6b6b;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorite-header button:hover {
  background-color: #e54b4b;
}

.favorite-list {
  flex: 1;
  overflow-y: auto;
  margin-top: 15px;
}

.favorite-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding: 10px;
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.favorite-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.favorite-item h4 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.favorite-item p {
  font-size: 16px;
  color: #555;
}

.favorite-item button {
  background: #ff6b6b;
  color: #fff;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorite-item button:hover {
  background-color: #e54b4b;
}

.favorite-item button:last-child {
  margin-top: 10px;
}

.favorite-item button:first-child {
  margin-right: 10px;
}

.favorite-list p {
  font-size: 16px;
  color: #777;
  text-align: center;
  margin-top: 20px;
}

button {
  background: #ff6b6b;
  color: #fff;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
}

button:hover {
  background-color: #e54b4b;
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
</style>
