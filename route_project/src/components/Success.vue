<template>
    <div class="payment-success-container">
      <div class="gear-container">
        <img src="/src/assets/img/success.png" alt="Gear Background" class="gear" />
      </div>
      <h1>Payment Successful!</h1>
      <p>Thank you for shopping with us</p>
      <button class="back-home-button" @click="goToHome" >Back to Home</button>
    </div>
</template>
  
<script>
  export default {
    name: "PaymentSuccess",
    methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
  
  <style scoped>
  .payment-success-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: white;
    padding: 20px;
    width: 1000px;
    margin-left: 70px;
  }

  
  /* Gear and Illustration */
  .gear-container {
    position: relative;
    width: 150px;
    height: 150px;
  }
  .gear {
    width: 100%;
    height: auto;
  }
  
  
  /* Text Styles */
  h1 {
    font-size: 1.5rem;
    color: #333;
    margin: 20px 0 10px;
  }
  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  /* Button */
  .back-home-button {
    background-color: #2f5233;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }
  .back-home-button:hover {
    background-color: #244026;
  }
  </style>
  