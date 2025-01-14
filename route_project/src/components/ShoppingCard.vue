<template>
  <div class="shopping-cart-container">
    <h2 class="shop">Shopping Cart</h2>
    <div v-if="store.cart.length>0" class="shopping-cart">
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
            <tr v-for="item in store.cart" :key="item.id">
              <td class="product-info">
                <img :src="item.img" alt="Product" />
                <p>{{ item.name }}</p>
              </td>
              <td>${{ item.unitPrice }}</td>
              <td>
                <div class="quantity">
                  <button @click="decrement(item.id)">-</button>
                  <span>{{ item.qty }}</span>
                  <button @click="increment(item.id)">+</button>
                </div>
              </td>
              <td>${{ item.totalPrice }}</td>
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
        <p>Subtotal: ${{ subtotal() }}</p>
        <p>Discount: -</p>
        <p><strong>Total: ${{ subtotal() }}</strong></p>
        <router-link to="/delivery">
          <button class="checkout-btn">Checkout</button>
        </router-link>
      </div>
    </div>

    <div v-else class="emptyCart">
      <div class="emptyContent">
        <img src="./../assets/img/empty-cart.png" alt="Empty Cart">
        <div id="emptyCart">Cart is empty</div>
        <button id="backtoBrowse"
        @click="goHome"
        >Back to browsing</button>
      </div>
     
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/Products';


export default {
  name: "ShoppingCart",

  setup(){
    const store = useProductStore()
    return { store }
  },
  data() {
    return {
    price : Number,
    units : Number
    };
  },
  computed: {
    goHome(){
      return this.$router.push('/')
    }
  },
  methods: {
    increment(id) {
      const item = this.store.cart.find((item) => item.id === id);
      item.qty++;
      item.totalPrice = parseFloat((item.unitPrice*item.qty).toFixed(2));
    },
    decrement(id) {
      const item = this.store.cart.find((item) => item.id === id);
      if (item.qty > 1){
        item.qty--;
        item.totalPrice = parseFloat((item.unitPrice*item.qty).toFixed(2));
      }
    },
    removeItem(id) {
      this.store.cart = this.store.cart.filter((item) => item.id !== id);
    },
    subtotal(){
      let subtotal = 0;
      for(let cartItem of this.store.cart){
        subtotal = subtotal + cartItem.totalPrice
        // console.log('item price=', cartItem)
      }
      return subtotal
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
.emptyCart{
  width: 100%;
  height: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.emptyContent{
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
#backtoBrowse{
  padding: 10px 15px 10px 15px;
  margin: 20px;
  border-radius: 5px;
  border: none;
  font-weight: 900px;
  color: white;
  background-color: #f53d56;
}
#backtoBrowse:hover{
  cursor: pointer;
}
</style>
