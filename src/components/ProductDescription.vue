<template>
    <section class="container">
        <div class="productImg">
            <img src="../assets/img/cetaphil_green.png" :alt="name" class="mainproductImg">
            <div class="extraproductImg">
                <img src="../assets/img/cetaphil_green.png" :alt="name" class="miniproductImg">
                <img src="../assets/img/cetaphil_green.png" :alt="name" class="miniproductImg">
                <img src="../assets/img/cetaphil_green.png" :alt="name" class="miniproductImg">
            </div>
        </div>

        <div class="productDescription">
            <p> {{ name }}</p>
            <p> {{ reviewAmount }} reviews</p>
            <p>Price <strong>${{ price }}</strong></p>
            <div id="pdesc">{{ briefDescription }}</div>
            <div>Quantity 
                <button @click="decrement"> - </button>
                <span> {{ quantity }} </span>
                <button @click="increment"> + </button>
            </div>
            <div>Total
                <span><strong>{{ total }}</strong></span>
            </div>
            
        </div>
    </section>
    
    
  

</template>

<script>
export default{
    props : {
        id : String,
        name : String,
        reviewAmount : Number,
        price : String,
        briefDescription : String,
        imgUrl : String

    },
    data(){
        return{
            quantity : 1,
            total : 0.00
        }
    },
    computed  : {
        decrement(){
            this.quantity--
            this.total = this.quantity * this.price
        },
        increment(){
            this.quantity++
            this.total = this.quantity * this.price
        },
        
    }
}
</script>

<style>
.mainproductImg{
    width:400px;
    height:300px;
}
.miniproductImg{
    width:100px;
    height:100px;
    margin-left: 10px;
}
.extraproductImg{
    display: flex;
    flex-direction : row;
    margin-top: 10px
}
.productImg{
    display: flex;
    flex-direction : column;
    margin-top: 10px
}
.productDescription{
    display: flex;
    flex-direction : column;
    margin-left: 30px;
    margin-top:10px;
}
.container{
    /* background-color: red; */
    display:flex;
    flex-direction:row;
    width: 100vw;
    
}
#pdesc{
    color: gray;
    border-top: solid 1px gray;
    border-bottom: solid 1px gray;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>