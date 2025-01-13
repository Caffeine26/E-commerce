<template>
  <NavbarCleanser />
  <div class="shopping-cart-container">
    <h2 class="shop">Shopping Cart</h2>
    <div class="shopping-cart">
      <div class="cart-items">
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td class="product-info">
                <img :src="item.image" alt="Product" />
                <p>{{ item.name }}</p>
              </td>
              <td>${{ item.price.toFixed(2) }}</td>
              <td>
                <div class="quantity">
                  <button @click="decrement(item.id)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increment(item.id)">+</button>
                </div>
              </td>
              <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
              <td class="actions">
                <a href="#" @click.prevent="removeItem(item.id)">Remove</a><br />
                <a href="#">Save for Later</a><br />
                <a href="#">Move to Wishlist</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="order-summary">
        <h3>Order Summary</h3>
        <div class="summary-details">
          <input type="text" placeholder="Enter coupon" class="coupon-input" />
          <button class="apply-btn">Apply</button>
        </div>
        <p>Subtotal: ${{ total }}</p>
        <p>Discount: -</p>
        <p><strong>Total: ${{ total }}</strong></p>
        <button class="checkout-btn">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarCleanser from './NavbarCleanser.vue';

export default {
  name: "ShoppingCart",
  components: {
    NavbarCleanser,
  },
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: "Medicube ONE DAY EXOSOME SHOT 7500",
          price: 21.88,
          quantity: 1,
          image: "src/assets/img/cart1.png",
        },
        {
          id: 2,
          name: "Cosrx Advanced Snail 92 All In One Cream",
          price: 14.88,
          quantity: 1,
          image: "src/assets/img/cart2.png",
        },
      ],
    };
  },
  computed: {
    total() {
      return this.cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },
  methods: {
    increment(id) {
      const item = this.cartItems.find((item) => item.id === id);
      item.quantity++;
    },
    decrement(id) {
      const item = this.cartItems.find((item) => item.id === id);
      if (item.quantity > 1) item.quantity--;
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.shop {
  margin: 20px;
  margin-left: -15px;
  font-family: Arial, sans-serif;
}

.shopping-cart-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 70px;
  width: 100%;

}

.shopping-cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-left: -20px;
  width: 1000px;
}

.cart-items table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;

  
}

.cart-items th,
.cart-items td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 310px;
}

.product-info img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
}

.quantity button {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
}

.quantity span {
  margin: 0 10px;
}

.actions a {
  color: #f53d56;
  cursor: pointer;
  font-size: 8px;
}

.order-summary {
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  border-radius: 15px;
}

.summary-details {
  display: flex;
  margin-bottom: 20px;
}

.coupon-input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.apply-btn {
  background: #f53d56;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.checkout-btn {
  width: 100%;
  background: #f53d56;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
}

.checkout-btn:hover {
  background: #f53d56;
}
</style>
