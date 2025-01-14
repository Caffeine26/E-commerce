<template>
  <div class="checkout-container">
    <!-- Step Navigation -->
    <div class="steps">
      <div class="step" :class="{ active: step >= 1 }">
        <span>1</span>
        <p>Cart</p>
      </div>
      <div class="step" :class="{ active: step >= 2 }">
        <span>2</span>
        <p>Delivery</p>
      </div>
      <div class="step" :class="{ active: step >= 3 }">
        <span>3</span>
        <p>Payment</p>
      </div>
    </div>

    <div class="checkout-content">
      <!-- Left Section -->
      <div class="left-section">
        <!-- Payment Method -->
        <div class="payment-method">
          <h2 class="section-title">Payment Method</h2>
          <PaymentMethod
          :method="paymentMethods[0]"
          :selectedMethod="selectedMethod"
          @click="selectedPayment(1)"
          ></PaymentMethod>
          <div v-if="selectedMethod === 1" class="payment-form">
              <div class="tt">
                <div class="ff">
                  <label for="cardName">Card Name</label>
                  <input type="text" id="cardName" v-model="cardName" placeholder="Name on card" />
                </div>
  
                <div class="ff">
                  <label for="cardNumber">Card Number</label>
                  <input type="text" id="cardNumber" v-model="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
              </div>
  
              <div class="tt">
                <div class="ff">
                  <label for="expiryDate">Expiry Date</label>
                  <input type="text" id="expiryDate" v-model="expiryDate" placeholder="MM/YY" />
                </div>
  
                <div class="ff">
                  <label for="cvc">CVC/CVV</label>
                  <input type="text" id="cvc" v-model="cvc" placeholder="CVC" />
                </div>
              </div>
          </div>

          <PaymentMethod
          :method="paymentMethods[1]"
          :selectedMethod="selectedMethod"
          @click="selectedPayment(2)"
          ></PaymentMethod>
          <div v-if="selectedMethod === 2" class="payment-form">
              <p>Scan to pay with any banking app</p>
              <img id="mykhqr" src="./../assets/img/mykhqr.jpg" alt="KHQR" />
          </div>


          <PaymentMethod
          :method="paymentMethods[2]"
          :selectedMethod="selectedMethod"
          @click="selectedPayment(3)"
          ></PaymentMethod>
        </div>
      </div>

      <!-- Right Section: Order Summary -->
      <div class="order-summary">
        <h2 class="section-title">Order Summary</h2>
        <div class="summary-details">
          <div class="line-item">
            <span>Cart Total ({{ amountItems }} items)</span>
            <span>${{ USDPrice() }}</span>
          </div>
          <div class="line-item">
            <span>Delivery fee</span>
            <span>${{ deliveryFee }}</span>
          </div>
        </div>
        <div class="total-section">
          <span class="total">Total:</span>
          <div class="total-amount">
            <select v-model="currency" 
            class="currency-dropdown"
            >
              <option value="USD">USD</option>
              <option value="KHR">KHR</option>
            </select>
            <span class="total-value">{{ totalPrice() }}</span>
          </div>
        </div>
        
        <button @click="payNow" class="pay-now-btn">Pay Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentMethod from './PaymentMethod.vue'
import { useProductStore } from '@/stores/Products';

export default {
  components : {
    PaymentMethod
  },
  setup(){
    const store = useProductStore()
    return { store }
  },
  data() {
    return {
      step: 3,
      paymentMethods: [
        {
          id: 1,
          name: "Cards",
          description: "",
          icons: [
            "src/assets/img/visa.png",
            "src/assets/img/mastercard.png",
            "src/assets/img/jcb.jpeg",
          ],
        },
        {
          id: 2,
          name: "KHQR",
          description: "Scan to pay with any banking app",
          icons: ["src/assets/img/khqr.png"],
        },
        {
          id: 3,
          name: "Cash on Delivery (COD)",
          description: "Pay with cash when the product arrives",
          icons: null,
        },
      ],
      deliveryFee: 0.0,
      currency: "USD",
      selectedMethod : 0
    };
  },
  computed: {
    total() {
      return (this.cartTotal + this.deliveryFee).toFixed(2);
    },
    amountItems(){
      return this.store.cart.length
    }
    
  },
  methods: {
    selectedPayment(id){
      this.selectedMethod = id
    },
    USDPrice(){
      let usd = 0;
      for(let cartItem of this.store.cart){
        usd = usd + cartItem.totalPrice
      }
      return usd
    },
    emptyCart(){
      return this.store.emptyCart
    },
    payNow() {
      alert("Proceeding to payment...");
      this.store.cart = []
      console.log(this.store.cart)
      this.$router.push('/success')
    },
    totalPrice(){
      if(this.currency === 'KHR'){
        let usdPrice = this.USDPrice()
        let khrPrice = usdPrice * 4150
        return khrPrice
      }
      if(this.currency === 'USD'){
        let usdPrice = this.USDPrice()
        return usdPrice
      }
    },
  },
};
</script>

<style scoped>

.payment-form {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
    border: 1px solid #37e7a7;
    padding: 15px 20px 30px 20px;
}
.payment-form label {
    font-size: 12px;
}
  
.payment-form input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.tt{
  display: flex;
  gap: 150px;
}
.ff{
  display: flex;
  flex-direction: column;
}
#cardName,#cardNumber,#expiryDate,#cvc{
  height: 30px;
}
/* General Layout */
.checkout-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Arial, sans-serif;
  margin: 0 auto;
  width: 1000px;
  margin-left: 70px;
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #ccc;
}

.step.active {
  color: #f53d56;
}

.step span {
  width: 30px;
  height: 30px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.step.active span {
  border-color: #f53d56;
  background: #f53d56;
  color: white;
}

.checkout-content {
  display: flex;
  gap: 20px;
}

.left-section {
  flex: 2;
}

.order-summary {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 20px;
  background: #f9f9f9;
  height: 300px;
}

/* Payment Method */
.payment-method {
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
#mykhqr{
  width: 200px;
  height: 300px;
}

/* Order Summary */
.summary-details {
  margin: 20px 0;
}

.line-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}

.total{
  font-weight: bold;
}

.total-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.currency-dropdown {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 5px;
}

.total-value {
  font-size: 18px;
  font-weight: bold;
}

.pay-now-btn {
  width: 100%;
  padding: 10px;
  background: #f53d56;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.pay-now-btn:hover {
  background: #e8434a;
}
</style>