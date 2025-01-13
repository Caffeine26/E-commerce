<template>
    <section class="signup">
      <div class="container">
        <!-- Content Section -->
        <div class="content">
          <user-details
            welcomeMessage="Join SeoulGlam!"
            hoverGradient01="#7FAFB1"
            hoverGradient02="#D5E8D4"
          ></user-details>
  
          <!-- Form Section -->
          <form class="form" @submit.prevent="handleSubmit">
            <input type="text" v-model="fullName" placeholder="Full Name" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
  
            <div class="policyCheck">
              <label>
                I agree to the Terms of Use and Privacy Policy.
                <input type="checkbox" v-model="agreeToTerms" />
                <span class="checkmark"></span>
              </label>
            </div>
  
            <button id="signupBtn" type="submit" :disabled="!isFormValid">Sign Up</button>
          </form>
  
          <!-- Login Option -->
          <signup-options
            signup="Sign Up"
            btnColor="#4F9AA0"
            question="Already have an account?"
            action="Log in"
            @navigateToLogin="navigateToLogin"
          ></signup-options>
        </div>
  
        <!-- Cover Image -->
        <img id="signupCover" src="@/assets/img/bluemoisture.jpg" alt="Signup Cover" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: '',
        email: '',
        password: '',
        agreeToTerms: false,
      };
    },
    computed: {
      isFormValid() {
        return this.fullName && this.email && this.password && this.agreeToTerms;
      },
    },
    methods: {
      navigateToLogin() {
        this.$router.push({ name: 'Login' });
      },
      handleSubmit() {
        try {
          // Retrieve existing users from localStorage
          const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
          // Check if the email already exists
          if (existingUsers.some(user => user.email === this.email)) {
            alert('User with this email already exists.');
            return;
          }
  
          // Save new user data
          const newUser = {
            fullName: this.fullName,
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
        }
  
        // Reset form fields
        this.fullName = '';
        this.email = '';
        this.password = '';
        this.agreeToTerms = false;
      },
    },
  };
  </script>
  
  
  <style scoped>
  /* Common Styles */
  @font-face {
    font-family: "QuickSand";
    src: url("./assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf");
  }
  
  * {
    font-family: "QuickSand";
    color: black;
  }
  
  .signup {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #7FAFB1, #D5E8D4);
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
  
  #signupCover {
    width: 50%;
    height: 94%;
    border-radius: 20px;
    margin: 20px;
  }
  
  .content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    width: 350px;
  }
  
  .form input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .policyCheck {
    font-size: 12px;
    margin: 10px 0;
  }
  
  #signupBtn {
    width: 100%;
    padding: 10px;
    color: white;
    background-color: #4F9AA0;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  
  #signupBtn:disabled {
    background-color: #A5D4D0;
    cursor: not-allowed;
  }
  
  #signupBtn:hover:not(:disabled) {
    background-color: #3d7e81;
  }
  
  .checkmark {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
  </style>
  