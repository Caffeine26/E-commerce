<template>
  <section class="login">
    <div class="container">
      <img id="loginCover" src="@/assets/img/greenperfume.jpg" alt="Login Cover" />

      <div class="content">
        
        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="input-container">
            <h1 class="welcome">Welcome Back!</h1>
            <div class="input-wrapper">
              <label for="email" class="flex">Email</label>
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="login-input"
                required
              />
            </div>
            <div class="input-wrapper">
              <label for="password" class="flex">Password</label>
              <input
                type="password"
                v-model="password"
                placeholder="Enter password"
                class="login-input"
                required
              />
            </div>
          </div>

          <div class="password">
            <a href="#" class="forgotpw">Forgot password?</a>
            <a href="#" class="resetpw">Reset password</a>
          </div>

          <button :disabled="!email || !password" class="login-btn">Log in</button>
        </form>

        <!-- Social Media Links -->
        <div class="divider">________________ OR __________________</div>
        <p class="connect-with">connect with</p>
        <div class="social-icons">
          <img src="@/assets/img/facebook.png" alt="Facebook" class="icon" />
          <img src="@/assets/img/google.png" alt="Google" class="icon" />
          <img src="@/assets/img/apple.png" alt="Apple" class="icon" />
        </div>

        <!-- Register Section -->
        <p class="register-text">
          Don't have an account? <a @click.prevent="navigateToSignUp" class="register-link">Register</a>

        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    navigateToSignUp() {
      this.$router.push({ name: "SignUp" });
    },
    handleLogin() {
      // Retrieve users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the email and password match
      const matchedUser = storedUsers.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (matchedUser) {
        alert("Login successful!");
        // Perform post-login actions (e.g., navigate to dashboard)
        this.$router.push({ name: "Home" });
      } else {
        alert("Invalid email or password. Please try again.");
      }

      // Clear form fields
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "QuickSand";
  src: url("./assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf");
}

* {
  font-family: "QuickSand";
  color: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #b0bfab, #6d8c50);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  top: 0%;

}

.container {
  width: 60%;
  height: 80%;
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  
}
.flex{
  display: flex;
  margin-left: 10px;
  color: #888;
  font-size: 14px;
  margin-top: 0;
}
#loginCover {
  width: 50%;
  height: 94%;
  border-radius: 20px;
  margin: 20px;
  object-fit: cover;
}

.content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top-right-radius: 40px;
  background: white;
  /* margin-top: 30px; */
  /* background-color: red; */
}

.welcome {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family:"QuickSand";
  height: 30px;
}



.input-container {
  /* margin-top: 400px; */
}


.input-wrapper {
  position: relative;
  margin-bottom: 10px;
}

.login-input {
  width: 350px;
  padding: 10px 40px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;

}

.input-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #888;
}

.password {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 15px;
}
.password :hover{
  background: none;
}
.forgotpw {
  color: #656262;
  text-decoration: none;
}

.resetpw {
  color: #346029;
  font-weight: bold;
  text-decoration: none;
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
  transition: all 0.3s;
}

.login-btn:disabled {
  background-color: #a5d4d0;
  cursor: not-allowed;
}

.login-btn:hover:not(:disabled) {
  background-color: #2a4e23;
}

.divider {
  margin: 20px 0;
  font-size: 14px;
  color: #888;
  text-align: center;
}

.divider:before,
.divider:after {
  content: "";
  width: 40%;
  height: 1px;
  background: #ccc;
  top: 50%;
}

.divider:before {
  left: 0;
}

.divider:after {
  right: 0;
}

.connect-with {
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: 15px 0;
}

.icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.register-text {
  margin-top: 15px;
  font-size: 14px;
}
.register-text :hover{
  background: none;
}

.register-link {
  color: #346029;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
</style>
