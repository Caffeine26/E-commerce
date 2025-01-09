<template>
    <section>
        <div class="content">
          <div id="welcome">{{ welcomeMessage }}</div>
    
          <div class="userInput">
            <label for="">Email</label>
            <input class="userInputBox" id="emailInput" type="text" placeholder="Enter email">
          </div>
    
          <div class="passwordContainer">
            <div class="userInput">
              <label for="">Password</label>
              <input class="userInputBox" id="pwInput" type="password" placeholder="Enter password">
            </div>
          </div>
          
        </div>
    </section>
</template>

<script>
export default{
    props : {
        welcomeMessage : String,
        hoverGradient01 : String,
        hoverGradient02 : String,
    },
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
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
}
#welcome{
    font-weight: bolder;
    font-size: 28px;
}
.userInput{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.userInputBox{
    width: 350px;
    height: 50px;
    padding: 10px 15px 10px 15px;
    border: 2px solid #C8C3C3;
    border-radius: 10px;
    font-size: 16px;
    
}
#emailInput{
    background-image: url('src/assets/img/mail-line.svg');
    background-position: 320px 14px;
    background-repeat: no-repeat;
}
#pwInput{
    background-image: url('src/assets/img/eye-line.svg');
    background-position: 320px 14px;
    background-repeat: no-repeat;
}
input:focus{
    outline: none;
    border-radius: 10px;
    border: 3px solid transparent;
    border-image: linear-gradient(to right, v-bind(hoverGradient01), v-bind(hoverGradient02));
    border-image-slice: 1;
}
</style>