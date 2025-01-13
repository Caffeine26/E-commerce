<template>
  <section class="login">
    <div class="container">
      <img id="loginCover" src="@/assets/img/greenperfume.jpg" alt="benton" />

      <div class="content">
        <user-details
          welcomeMessage="Welcome Back!"
          hoverGradient01="#B0BFAB"
          hoverGradient02="#6D8C50"
        ></user-details>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="login-form">
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="login-input"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="login-input"
            required
          />

          <div class="password">
            <div class="forgotpw">Forgot password?</div>
            <div class="resetpw">Reset password</div>
          </div>

          <button :disabled="!email || !password" class="login-btn">Log In</button>
        </form>

        <!-- Error Message -->
        <div v-if="loginError" class="error-message">
          Invalid email or password. Please try again.
        </div>

        <signup-options
          signup="Log in"
          btnColor="#346029"
          question="Don't have an account yet?"
          action="Register"
          @navigateToSignup="navigateToSignup"
        ></signup-options>
      </div>
    </div>
  </section>
</template>

<script>


export default {

  data() {
    return {
      email: '',
      password: '',
      loginError: false,
    };
  },
  methods: {
    handleLogin() {
      const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = registeredUsers.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (user) {
        alert('Login successful!');
        this.loginError = false;
        this.$router.push({ name: 'Home' }); // Replace 'Home' with the desired route name
      } else {
        this.loginError = true;
      }
    },
    navigateToSignup() {
      this.$router.push({ name: 'Signup' }); // Replace 'Signup' with the actual signup route name
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'QuickSand';
  src: url('./assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf');
}
* {
  font-family: 'QuickSand';
  color: black;
}
.login {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #b0bfab, #6d8c50);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 60%;
  height: 80%;
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
}
#loginCover {
  width: 50%;
  height: 94%;
  border-radius: 20px;
  margin: 20px;
}
.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:300px;
}
.login-form {
  width: 350px;
  display: flex;
  flex-direction: column;
}
.login-input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-btn {
  width: 100%;
  padding: 10px;
  color: white;
  background-color: #346029;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.login-btn:disabled {
  background-color: #a5d4d0;
  cursor: not-allowed;
}
.login-btn:hover:not(:disabled) {
  background-color: #2a4e23;
}
.password {
  font-size: 12px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
}
.forgotpw {
  color: #656262;
}
.resetpw {
  color: #346029;
  font-weight: bolder;
  margin-left: 5px;
}
.error-message {
  margin-top: 10px;
  color: red;
  font-size: 12px;
}
</style>
