<template>
  <section class="login">
    <div class="container">
      <img id="loginCover" src="./assets/img/banner1.jpg" alt="benton" />

      <div class="content">
        <user-details
          welcomeMessage="Welcome Back!"
          hoverGradient01="#B0BFAB"
          hoverGradient02="#6D8C50"
        ></user-details>

        <form @submit.prevent="handleLogin" class="login-form">
          <div>
            <input
              type="text"
              v-model="username"
              placeholder="Username or Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" :style="{ backgroundColor: btnColor }">
            Log in
          </button>
        </form>

        <div class="password">
          <div class="forgotpw">Forgot password?</div>
          <div class="resetpw">Reset password</div>
        </div>

        <signup-options
          signup="Log in"
          btnColor="#346029"
          question="Don't have an account yet?"
          action="Register"
        ></signup-options>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      btnColor: "#346029",
    };
  },
  methods: {
    handleLogin() {
      if (!this.username || !this.password) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate API call or backend validation
      console.log("Logging in with", this.username, this.password);

      // Example login logic
      const isSuccess = this.username === "testuser" && this.password === "12345";
      if (isSuccess) {
        alert("Login successful!");
        // Redirect or perform post-login actions
      } else {
        alert("Invalid username or password. Please try again.");
      }
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
}
.login-form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
}
.login-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-form button {
  padding: 10px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.password {
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 12px;
  margin-top: 5px;
}
.forgotpw {
  color: #656262;
}
.resetpw {
  color: #346029;
  font-weight: bolder;
  margin-left: 5px;
}
</style>
