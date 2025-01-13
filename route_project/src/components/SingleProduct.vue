<template>
  <router-link :to="productLink">
    <div class="single-product" :id="product.id" @click="returnId">
    <div class="img-container">

      <!-- Bind the image source dynamically -->
      <img v-if="product.image"
       :src="product.image" :alt="product.name" />
      <div v-if="product.promotionAsPercentage" class="sale">-{{ product.promotionAsPercentage }}%</div>

    </div>
    <div class="product-content">
      <h5 class="name">{{ product.name }}</h5>
      <div class="rating">
        <span class="price">${{ product.price }}</span>
        <span class="icon">
          <img
            src="@/assets/heart.svg"
            alt="Favorites"
            @click="toggleFavorite(product)"
            :class="{ active: isFavorite(product.id) }"
          />
          <img src="@/assets/cart.svg" alt="Cart Icon" />
        </span>
      </div>
    </div>
  </div>
  </router-link>
  
</template>

<script>
import { useFavoriteStore } from '@/stores/Favorite';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Check if the product is in the favorites list
    isFavorite() {
      return (productId) => {
        const favoriteStore = useFavoriteStore();
        return favoriteStore.favorites.some(fav => fav.id === productId); // Check if the product is in the favorites list
      };
    },
     returnId(){
      console.log(this.product.id)
    },
    productLink(){
      return '/all-products/'+this.product.id
    }
  },
  methods: {
    // Add or remove from favorites
    toggleFavorite(product) {
      const favoriteStore = useFavoriteStore();
      if (this.isFavorite(product.id)) {
        favoriteStore.removeFavorite(product.id); // Remove from favorites
      } else {
        favoriteStore.addFavorite(product); // Add to favorites
      }
    },
  },
};
</script>

<style scoped>
.single-product {
  flex: 0 0 calc(25% - 30px);
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}
.single-product .img-container {
  position: relative;
}
.sale{
  border-bottom-right-radius: 10px;
}
.single-product .img-container .sale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 9px;
  background: rgb(216, 104, 104);
  right: auto;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: white;
}
.single-product:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.img-container {
  height: 200px;
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
.rating .price {
  font-size: 16px;
  color: #e74c3c;
  font-weight: bold;
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
