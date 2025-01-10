<template>
  <section class="login">
      <div class="container">
        
        <div class="content">
          <user-details 
          welcomeMessage="Welcome to SeoulGlam!"
          hoverGradient01="#7FAFB1"
          hoverGradient02="#D5E8D4"
          ></user-details>
  
          <div class="abc">
            <div class="rmbMeContainer">
              <label class="password">Remember Me
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>

            <div class="policyCheck">
              <label class="password">I have read and agreed to the terms and conditions in Terms of Use and Privacy Policy.
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <signup-options
          signup="Sign Up"
          btnColor="#4F9AA0"
          question="Already registered?"
          action="Log in"
          ></signup-options>
        </div>
        <img id="loginCover" src="@/assets/img/bluemoisture.jpg" alt="bluemoisture">
      </div>
  </section>
</template>

<script>
export default{

}
</script>

<style scoped>
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
  background-image: linear-gradient(to bottom, #7FAFB1, #D5E8D4);
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
.abc{
  width: 350px;
  display: flex;
  flex-direction: column;
}
.rmbMeContainer{
  /* width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: end; */
  align-self: flex-end;
  font-size: 12px;
  margin-top: 5px;
  /* background-color: aqua; */

}
.rmbMe, #pre-login{
  color: #656262;
}
.policyCheck{
  align-self: flex-start;
  width: 300px;
  font-size: 12px;
  margin-top: 15px;
  /* background-color: #7FAFB1; */
}
#login{
  color: #4F9AA0;
  font-weight: bolder;
  margin-left: 5px;
}
#signupBtn{
  width: 350px;
  margin: 20px 0 20px 0;
  color: white;
  background-color: #4F9AA0;
  font-weight: bolder;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  padding: 10px 0 10px 0;
}
.password{
  display: block;
  position: relative;
  cursor: pointer;
  padding-left: 15px;
  color: #767676;

}
.password input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
/* Create a custom checkbox */
.checkmark{
  position: absolute;
  top: 4px;
  left: 0;
  height: 12px;
  width: 12px;
  border: 2px solid #ccc;
}
/* On mouse-over, add a grey background color */
.password:hover input ~ .checkmark {
  background-color: #ccc;
}
/* When the checkbox is checked, add a blue background */
.password input:checked ~ .checkmark {
  background-color: #4F9AA0;
  border-color: #4F9AA0;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkmark when checked */
.password input:checked ~ .checkmark:after {
  display: block;
}
/* Style the checkmark/indicator */
.password .checkmark:after {
  left: 3px;
  top: 0px;
  width: 5px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>