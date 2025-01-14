// Inside your product store (e.g., `stores/product.js`)

import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      // Example product list
      { id: 1, name: 'Product A', brand: 'Brand X', price: 100, img: '/path/to/img1' },
      { id: 2, name: 'Product B', brand: 'Brand Y', price: 200, img: '/path/to/img2' },
      { id: 3, name: 'Product C', brand: 'Brand X', price: 150, img: '/path/to/img3' },
      { id: 4, name: 'Product d', brand: 'Brand X', price: 100, img: '/path/to/img1' },
      { id: 5, name: 'Product e', brand: 'Brand Y', price: 200, img: '/path/to/img2' },
      { id: 6, name: 'Product f', brand: 'Brand X', price: 150, img: '/path/to/img3' },
      // Add your product data here
    ],
  }),
  getters: {
    getProductsByName: (state) => (query) => {
      return state.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    getProductsByBrand: (state) => (query) => {
      return state.products.filter(product =>
        product.brand.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  actions: {
    // You can add any other actions here as needed
  },
});
