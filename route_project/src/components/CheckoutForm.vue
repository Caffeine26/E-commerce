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
        <!-- Billing Address -->
        <div class="billing-address">
          <h2 class="font">Billing Address</h2>
          <form @submit.prevent="saveAddress">
            <div class="form-row">
              <input type="text" v-model="billing.name" placeholder="Name" />
              <input type="text" v-model="billing.phone" placeholder="Phone Number" />
            </div>
            <div class="form-row">
              <select v-model="billing.province">
                <option value="" disabled selected>Province</option>
                <option v-for="province in provinces" :key="province" :value="province">{{ province }}</option>
              </select>
              <select v-model="billing.district">
                <option value="" disabled selected>District</option>
                <option v-for="district in districts" :key="district" :value="district">{{ district }}</option>
              </select>
            </div>
            <input type="text" v-model="billing.address" placeholder="Address details" />
            <div class="form-actions">
              <button type="submit" class="save-btn">Save Address</button>
              <button type="button" class="view-btn">View Saved Address</button>
            </div>
            <small class="note">Saved Addresses can be re-used next time with a click.</small>
          </form>
        </div>

        <!-- Delivery Option -->
        <div class="delivery-option">
          <h2 class="font">Delivery Option</h2>
          <div class="options">
            <div
              class="option"
              v-for="option in deliveryOptions"
              :key="option.id"
              :class="{ selected: selectedDelivery === option.id }"
              @click="selectDelivery(option.id)"
            >
              <div class="radio">
                <input type="radio" :checked="selectedDelivery === option.id" />
              </div>
              <div class="details">
                <div class="name">
                  <img :src="option.logo" alt="Logo" class="image" />
                  {{ option.name }}
                </div>
                <p class="description">{{ option.description }}</p>
              </div>
              <div class="price">{{ option.price }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section: Order Summary -->
      <div class="order-summary">
        <h2 class="font">Order Summary</h2>
        <div class="coupon-row">
          <input type="text" v-model="coupon" placeholder="Enter coupon" class="coupon" />
          <button @click="applyCoupon" class="apply-btn">Apply</button>
        </div>
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
        <div class="total">
          <span class="font">Total</span>
          <span>${{ total }}</span>
        </div>
        <div class="actions">
          <button @click="goBack" class="back-btn">Back to cart</button>
          <button @click="payNow" class="pay-btn">Pay Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      step: 2,
      billing: {
        name: "",
        phone: "",
        province: "",
        district: "",
        address: "",
      },
      provinces: ["Province 1", "Province 2", "Province 3"],
      districts: ["District 1", "District 2", "District 3"],
      deliveryOptions: [
        {
          id: 1,
          name: "J&T",
          logo: "src/assets/img/JNT.png",
          description: "Please pay first before we can send your products.",
          price: "$0.00",
        },
        {
          id: 2,
          name: "Phnom Penh Delivery",
          logo: "src/assets/img/PPDelivery.png",
          description: "Order before 12pm, it will be delivered from 2-5PM in PP and Takeo.",
          price: "$0.00",
        },
        {
          id: 3,
          name: "VET",
          logo: "src/assets/img/VET.png",
          description: "Please pay first before we can send your products.",
          price: "$0.00",
        },
      ],
      selectedDelivery: 1,
      coupon: "",
      cartTotal: 21.88,
      deliveryFee: 0.0,
    };
  },
  computed: {
    total() {
      return (this.cartTotal + this.deliveryFee).toFixed(2);
    },
  },
  methods: {
    saveAddress() {
      alert("Address saved!");
    },
    selectDelivery(id) {
      this.selectedDelivery = id;
    },
    applyCoupon() {
      alert("Coupon applied!");
    },
    goBack() {
      alert("Going back to cart...");
    },
    payNow() {
      alert("Proceeding to payment...");
    },
  },
};
</script>

<style scoped>
/* General Styles */
.checkout-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 1000px;
  margin-left: 70px;
}

.font{
  font-weight: bold;
}

.image{
  width: 30px;
  height: 30px;
}

.description{
  font-size: 10px;
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

/* Layout */
.checkout-content {
  display: flex;
  gap: 20px;
}

.left-section {
  flex: 3;
}

.order-summary {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 20px;
  height: 300px;
}

/* Billing Address */
.billing-address h2,
.delivery-option h2 {
  margin-bottom: 10px;
  font-size: 18px;
}

.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

input,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.save-btn,
.view-btn {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-btn {
  background: #f53d56;
  color: white;
}

.view-btn {
  background: white;
  color: black;
}

/* Delivery Option */
.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.option.selected {
  border-color: #00c853;
}

.radio {
  margin-right: 10px;
}

.details {
  flex: 1;
}

.price {
  font-weight: bold;
}

/* Order Summary */
.coupon-row {
  display: flex;
  gap: 0px;
}
.coupon{
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 30px;
}
.apply-btn {
  background: #f53d56;
  color: white;
  border: none;
  padding: 8px 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  height: 30px;
}

.summary-details {
  margin: 20px 0;
}

.line-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.actions {
  display: flex;
}

.back-btn {
  background-color: white;
  color: black;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 130px;
}

.pay-btn {
  background: #f53d56;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 130px;
}
.note{
  font-size: 10px;
}
</style>