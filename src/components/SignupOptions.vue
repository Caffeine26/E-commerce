<template>
    <section>
        <div class="content">
          <button id="loginBtn">{{ signup }}</button>
    
          <div class="or">
            <hr>
            <div>OR</div>
            <hr>
          </div>
          
    
          <div class="loginOptions">
            <div>connect with</div>
            <div class="logos">
              <img src="../assets/img/facebook-circle-fill.svg" alt="facebook">
              <img src="../assets/img/icons8-google.svg" alt="google">
              <img src="../assets/img/apple-fill.svg" alt="apple">
            </div>
            <div class="gotoRegister">
              <div id="pre-register">{{ question }}</div>
              <div id="register">{{ action }}</div>
            </div>
            
          </div>
        </div>
    </section>
</template>

<script>
export default{
    props : {
        signup : String,
        btnColor : String,
        question : String,
        action : String
    }
}
</script>

<style scoped>
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: aquamarine; */
}
#loginBtn{
    width: 350px;
    margin: 20px 0 20px 0;
    color: white;
    background-color: v-bind(btnColor);
    font-weight: bolder;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    padding: 10px 0 10px 0;
}
.or{
    /* background-color: aqua; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

}
.or hr{
    width: 50px;
    color: #656262;
}
.or div{
    margin: 0 10px 0 10px;
}
.loginOptions{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logos{
    width: 200px;
    /* background-color: aqua; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0 20px 0;
}
.gotoRegister{
    display: flex;
    flex-direction: row;
}
#pre-register{
    color: #656262;
}
 #register{
    color: v-bind(btnColor);
    font-weight: bolder;
    margin-left: 5px;
}
</style>