// stores/Favorite.js (Pinia Store)
import { defineStore } from 'pinia';

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorites: [],
  }),
  getters: {
    // Get all favorites
    favoriteCount(state) {
      return state.favorites.length;
    },
  },
  actions: {
    // Add product to favorites
    addFavorite(product) {
      this.favorites.push(product);
    },
    // Remove product from favorites by ID
    removeFavorite(productId) {
      this.favorites = this.favorites.filter(fav => fav.id !== productId);
    },
  },
});
