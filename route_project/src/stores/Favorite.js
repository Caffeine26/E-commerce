// store/Favorite.js
import { defineStore } from 'pinia';

export const useFavoriteStore = defineStore('Favorite', {
  state: () => ({
    // Retrieve the favorite list from localStorage or initialize it to an empty array
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  }),

  actions: {
    // Method to add a product to the favorites list
    addFavorite(product) {
      // Check if the product is already in the favorites list
      const exists = this.favorites.some((fav) => fav.id === product.id);
      
      // If the product is not in the list, add it
      if (!exists) {
        this.favorites.push(product);
        this.saveFavorites();
      }
    },

    // Method to save the favorites list to localStorage
    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },

    // Method to remove a product from the favorites list
    removeFavorite(productId) {
      this.favorites = this.favorites.filter((fav) => fav.id !== productId);
      this.saveFavorites();
    },
  },
});
