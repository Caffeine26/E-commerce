<template>
  <section class="login">
      <div class="container">
        <img id="loginCover" src="./assets/img/greenperfume.jpg" alt="benton">
    
        <div class="content">
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
export default{

}
</script>

<style>
@font-face {
  font-family: 'QuickSand';
  src: url('./assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf');
}
*{
  font-family: 'QuickSand';
  color: black;
}
.login{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #B0BFAB, #6D8C50);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  width: 60%;
  height: 80%;
  border-radius: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  
  /* background-color: aqua; */
}
#loginCover{
  width: 50%;
  height: 94%;
  border-radius: 20px;
  margin: 20px;
  /* background-color: aquamarine; */
}
.content{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: aquamarine; */
}
.password{
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 12px;
  margin-top: 5px;
  /* background-color: aqua; */

}
.forgotpw, #pre-register{
  color: #656262;
}
.resetpw, #register{
  color: #346029;
  font-weight: bolder;
  margin-left: 5px;
}
</style>