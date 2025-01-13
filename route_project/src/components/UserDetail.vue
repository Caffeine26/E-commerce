<template>
  <section>
      <div class="content">
        <div id="welcome">{{ welcomeMessage }}</div>
  
        <div class="userInput">
          <label for="">Email</label>
          <input class="userInputBox" id="emailInput" v-model="email" type="text" placeholder="Enter email">
        </div>
  
        <div class="passwordContainer">
          <div class="userInput">
            <label for="">Password</label>
            <input class="userInputBox" id="pwInput" v-model="password" type="password" placeholder="Enter password">
          </div>
        </div>
        
      </div>

      <!-- Display error message if login fails -->
      <div v-if="loginError" class="error-message">
        Invalid email or password. Please try again.
      </div>
      
      <!-- Login button -->
      <button @click="handleLogin" :disabled="!email || !password">
        Log In
      </button>
  </section>
</template>

<script>
export default {
  props: {
      welcomeMessage: String,
      hoverGradient01: String,
      hoverGradient02: String,
      onLogin: Function,  // New prop to handle login
  },
  data() {
      return {
          email: "",
          password: "",
          loginError: false,
      };
  },
  methods: {
      handleLogin() {
          // Pass the credentials to the parent method
          if (this.onLogin) {
              const isValid = this.onLogin(this.email, this.password);
              if (!isValid) {
                  this.loginError = true;  // Show error if login fails
              }
          }
      }
  }
};
</script>

<style scoped>
/* Styles for UserDetails component, as previously defined */
</style>
