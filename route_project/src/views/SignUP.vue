<template>
  <section class="signup">
    <div class="container">
      <!-- Form Section -->
      <div class="content">
        <h1 class="title">Welcome to StyleBodia!</h1>
        <form class="form" @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Enter email" required />
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Enter password" required />
          </div>

          <div class="checkbox-group">
            <label>
              <input type="checkbox" v-model="agreeToTerms" />
              I have read and agreed to the terms and conditions in Terms of Use and Privacy Policy
            </label>
          </div>

          <button id="signupBtn" type="submit" :disabled="!isFormValid">Sign up</button>
        </form>

        <p class="separator">_____________ OR ______________</p>
        <p class="separator1">connect with</p>
        <div class="social-buttons">
          <a href="#"><img src="@/assets/img/facebook.png" alt="logo" class="img"></a>
          <a href="#"><img src="@/assets/img/google.png" alt="logo" class="img"></a>
          <a href="#"><img src="@/assets/img/apple.png" alt="logo" class="img"></a>


        </div>

        <p class="login-option">
          Already registered? <a @click="navigateToLogin">Log in</a>
        </p>
      </div>

      <!-- Image Section -->
      <div class="image-container">
        <img id="signupCover" src="@/assets/img/bluemoisture.jpg" alt="Signup Cover" />
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
      agreeToTerms: false,
    };
  },
  computed: {
    isFormValid() {
      return this.email && this.password && this.agreeToTerms;
    },
  },
  methods: {
    navigateToLogin() {
      this.$router.push({ name: 'Login' });
    },
    resetForm() {
      this.email = '';
      this.password = '';
      this.agreeToTerms = false;
    },
    handleSubmit() {
      try {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
          alert('Please enter a valid email address.');
          return;
        }

        // Validate password strength
        if (this.password.length < 6) {
          alert('Password must be at least 6 characters long.');
          return;
        }

        // Retrieve existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email already exists
        if (existingUsers.some(user => user.email === this.email)) {
          alert('User with this email already exists.');
          return;
        }

        // Save new user data
        const newUser = {
          email: this.email,
          password: this.password,
        };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        alert('Sign Up Successful!');
        this.$router.push({ name: 'Login' }); // Redirect to Login page
      } catch (error) {
        console.error('Sign Up Error:', error);
        alert('Sign Up failed. Please try again.');
      } finally {
        this.resetForm(); // Reset form fields
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
  font-family: "QuickSand", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.title{
  font-family:  "QuickSand";
  width: 100%;
  text-align: center;
  font-weight: bold;
}
.signup {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(162, 236, 230, 0.99);
  position: absolute;
  left: 0%;
  top: 0%;
}


.container {
  width: 58%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.content {
  width: 50%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
}

.content h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form .input-group {
  width: 100%;
  margin-bottom: 15px;
}


.form .input-group label {
  font-size: 14px;
  display: flex;
  margin-bottom: 5px;
}

.form .input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkbox-group {
  font-size: 9px;
  margin-bottom: 15px;
  color: #888;
}

#signupBtn {
  width: 100%;
  padding: 12px;
  background-color: #4F9AA0;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

#signupBtn:disabled {
  background-color: #A5D4D0;
  cursor: not-allowed;
}

.separator {
  margin: 20px 0;
  text-align: center;
  width: 100%;
  font-size: 10px;
  color: #888;
}
.separator1{
  width: 100%;
  font-size: 10px;
  color: #888;
  text-align: center;
}

.social-buttons {
  width: 100%;
  display: flex;
  justify-content:space-around;
  margin-bottom: 20px;
  margin-top: 10px;
}
.social-buttons :hover{
  background: none;
}
.img{
  width: 20px;
  height: 20px;
}
.social-btn {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}



.login-option {
  font-size: 14px;
  color: #888;
  text-align: center;
  width: 100%;
}

.login-option a {
  color: #4F9AA0;
  font-weight: bold;
  cursor: pointer;
}

.image-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

#signupCover {
  width: 90%;
  height: 90%;
  border-radius: 10px;
}
</style>
