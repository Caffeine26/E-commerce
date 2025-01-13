<template>
    <section class="login">
      <div class="login-container">
        <img id="loginCover" src="./../assets/img/greenperfume.jpg" alt="benton" />
        <div class="login-content">
          <user-details 
            welcomeMessage="Welcome Back!"
            hoverGradient01="#B0BFAB"
            hoverGradient02="#6D8C50"
          ></user-details>
  
          <div>
            <div class="password">
              <div class="forgotpw">Forgot password?</div>
              <div class="resetpw">Reset password</div>
            </div>
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
    name: "LoginView",
  };
  </script>
  
  <style scoped>
  /* Universal Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Root Styles */
  html, body {
    width: 100%;
    height: 100%;
  }
  
  .login {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #B0BFAB, #6D8C50);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Ensure no scrollbars appear */
  }
  
  .login-container {
    width: 90%;
    max-width: 1200px;
    height: 90%;
    border-radius: 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  
  #loginCover {
    flex-grow: 1; /* Allow the image to grow proportionally */
    height: 100%;
    object-fit: cover; /* Ensure the image fills the container */
    border-radius: 20px 0 0 20px; /* Round only the left side */
  }
  
  .login-content {
    flex-grow: 1; /* Allow the content to grow proportionally */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .password {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    margin-top: 10px;
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
  