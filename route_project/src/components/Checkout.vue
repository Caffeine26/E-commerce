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
          <div class="payment-options">
            <div
              class="payment-option"
              v-for="method in paymentMethods"
              :key="method.id"
              :class="{ selected: selectedPayment === method.id }"
              @click="selectPayment(method.id)"
            >
              <div class="option-header">
                <input type="radio" :checked="selectedPayment === method.id" />
                <span class="method-name">{{ method.name }}</span>
                <div v-if="method.icons" class="method-icons">
                  <img
                    v-for="icon in method.icons"
                    :key="icon"
                    :src="icon"
                    alt="Payment Icon"
                  />
                </div>
              </div>
              <p class="method-description">{{ method.description }}</p>
            </div>
          </div>
          <div v-if="selectedPayment === 1" class="payment-form">
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
          <div v-if="selectedPayment === 2" class="payment-form">
              <p>Scan to pay with any banking app</p>
              <img src="/src/assets/img/khqr.png" alt="KHQR" />
          </div>
        </div>
      </div>

      <!-- Right Section: Order Summary -->
      <div class="order-summary">
        <h2 class="section-title">Order Summary</h2>
        <div class="summary-details">
          <div class="line-item">
            <span>Cart Total (2 items)</span>
            <span>${{ cartTotal }}</span>
          </div>
          <div class="line-item">
            <span>Delivery fee</span>
            <span>${{ deliveryFee }}</span>
          </div>
        </div>
        <div class="total-section">
          <span class="total">Total:</span>
          <div class="total-amount">
            <select v-model="currency" class="currency-dropdown">
              <option value="USD">USD</option>
              <option value="KHR">KHR</option>
            </select>
            <span class="total-value">${{ total }}</span>
          </div>
        </div>
        <button @click="payNow" class="pay-now-btn">Pay Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
            "src/assets/img/jcb.png",
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
      selectedPayment: 1,
      cartTotal: 21.88,
      deliveryFee: 0.0,
      currency: "USD",
    };
  },
  computed: {
    total() {
      return (this.cartTotal + this.deliveryFee).toFixed(2);
    },
  },
  methods: {
    selectPayment(id) {
      this.selectedPayment = id;
    },
    payNow() {
      alert("Proceeding to payment...");
    },
  },
};
</script>

<style scoped>

.payment-form {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 30px;
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
  gap: 200px;
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

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.payment-option {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 80px;
}

.payment-option:hover {
  background: #f9f9f9;
}

.payment-option.selected {
  border-color: #37e7a7;
  background: #ffffff;
}

.option-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-header input {
  margin-right: 10px;
}

.method-name {
  font-weight: bold;
  flex: 1;
}

.method-icons img {
  width: 50px;
  height: 25px;
  margin-left: 10px;
}

.method-description {
  font-size: 12px;
  color: #666;
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