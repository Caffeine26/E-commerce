<template>

  
    <div class="single-product" :id="product.id" @click="returnId">
    <router-link :to="productLink">
      <div class="img-container">

        <!-- Bind the image source dynamically -->
        <img v-if="product.image"
        :src="product.image[0]" :alt="product.name" />
        <div v-if="product.promotionAsPercentage" class="sale">-{{ product.promotionAsPercentage }}%</div>

      </div>
    </router-link>

    <div class="product-content">
      <h5 class="name">{{ product.name }}</h5>
      <div class="rating">
        <span class="discountedPrice">${{ discountedPrice }}</span>
        <span class="price">${{ product.price }}</span>
        
        <span class="icon">
          <!-- Favorite Icon -->
          <img
            src="@/assets/heart.svg"
            alt="Favorites"
            @click.stop="toggleFavorite(product)"
            :class="{ active: isFavorite(product.id) }"
          />
          <!-- Cart Icon -->
          <img src="@/assets/cart.svg" alt="Cart Icon" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoriteStore } from "@/stores/Favorite";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productLink() {
      return `/all-products/${this.product.id}`;
    },
    isFavorite() {
      const favoriteStore = useFavoriteStore();
      return (productId) => favoriteStore.favorites.some((fav) => fav.id === productId);
    },

    productLink(){
      return '/all-products/'+this.product.id
    },
    discountedPrice(){
      return parseFloat((this.product.price * ((100-this.product.promotionAsPercentage)/100)).toFixed(2))
    }

  },
  methods: {
    toggleFavorite(product) {
      const favoriteStore = useFavoriteStore();
      // Add product to favorites if it's not already in the list
      favoriteStore.addFavorite(product);
    },
  },
};
</script>

<style scoped>
.single-product {
  flex: 1 1 22%; /* Adjusted to fit 4 items per row */
  max-width: 22%; /* Optional: prevents it from growing too wide */
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  margin: 10px; /* Space between products */
}

.single-product:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.img-container {
  height: 200px; /* Set a fixed height for the image container */
  width: 100%;
  overflow: hidden;
}

.img-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product-content {
  padding: 10px;
  text-align: center;
}

.product-content .name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.product-content .rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating .discountedPrice {
  font-size: 16px;
  color: #e74c3c;
  font-weight: bold;
}

.price{
  font-size: 16px;
  text-decoration: line-through;
}

.rating .icon img {
  height: 20px;
  width: 20px;
  margin-left: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

.rating .icon img.favorite-icon:hover {
  transform: scale(1.2);
}
</style>
