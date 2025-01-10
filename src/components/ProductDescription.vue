<template>
    <section class="container">
      
        <div class="productImg">
            <img :src="displayedImg" :alt="name" class="mainproductImg">
            <div class="subproductImg">
                <img src="../assets/img/arrow-left-wide-fill.svg" alt="">
                <div class="extraproductImg">
                    <img v-for="imgUrl1 in imgUrl" @click="displayImg(imgUrl1)" :src="imgUrl1" :alt="name" class="miniproductImg">
                </div>
                <img src="../assets/img/arrow-right-wide-fill.svg" alt="">
            </div>
        </div>

        <div class="productDescription">
            <h2> {{ name }}</h2>
            <p class="subtext"> {{ reviewAmount }} reviews</p>
            <div class="price">
                <p class="subtext">Price</p>
                <p class="unitPrice">${{ price }}</p>
            </div>
            
            <div id="pdesc">{{ briefDescription }}</div>

            <div class="qty">
                <p class="subtext">Quantity</p>
                <div class="qtyAmount">
                    <button @click="decrement" class="qtyAmountEle"> - </button>
                    <span class="qtyAmountEle"> {{ quantity }} </span>
                    <button class="qtyAmountEle" @click="increment"> + </button>
                </div>
            </div>

            <div class="total">
                <p class="subtext">Total</p>
                <span class="totalPrice">${{ total }}</span>
            </div>

            <div class="cartNfav">
                <button class="addToCart">ADD TO CART</button>
                <button class="favicon">
                    <img src="../assets/img/heart-line.svg" alt="favicon">
                </button>
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
        imgUrl : Array

    },
    data(){
        return{
            quantity : 1,
            total : this.price,
            displayedImg : 'src/assets/img/cetaphil_green.png',
        }
    },
    computed  : {
        decrement(){
            if(this.quantity < 2){
                this.quantity = 1
            }
            else{
                this.quantity--
            }
            
            this.total = this.quantity * this.price
        },
        increment(){
            this.quantity++
            this.total = this.quantity * this.price
        },
    },
    methods : {
        displayImg(imgUrl){
            this.displayedImg = imgUrl
        }
    }
}
</script>

<style scoped>
.mainproductImg{
    width:600px;
    height:490px;
}
.miniproductImg{
    width:180px;
    height:160px;
    margin-left: 10px;
}
.extraproductImg{
    display: flex;
    flex-direction : row;
    margin-top: 10px;
    overflow-x: scroll;
}
.productImg{
    width: 600px;
    display: flex;
    flex-direction : column;
    margin-top: 10px;
    
}
.productDescription{
    width: 600px;
    height:590px;
    display: flex;
    flex-direction : column;
    margin-left: 60px;
    margin-top:10px;
    justify-content: space-between;
    font-family: 'Inria Serif';
    /* background-color: aqua; */
}
.container{
    /* background-color: red; */
    display:flex;
    flex-direction:row;
    width: fit-content;

    
}
#pdesc{
    color: rgb(0, 0, 0);
    border-top: solid 1px gray;
    border-bottom: solid 1px gray;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
}
.subtext{
    color: #969191;
    font-size: 24px;
}
.unitPrice{
    font-size: 38px;
    font-weight: bolder;
}
.price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;

}
.qty{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
}
.qtyAmount{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    border: 1px solid #C1C0C2;
    border-radius: 10px;
    padding: 5px;
}
.qty button{
    color: #C1C0C2;
    background-color: white;
    border: none;
    font-size: 30px;
}
.qtyAmountEle{
    padding-left: 10px;
    padding-right: 10px;
}
.qtyAmount :nth-child(2) {
    border-left: 1px solid #C1C0C2;
    border-right: 1px solid #C1C0C2;
}
.total{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
}
.totalPrice{
    font-size: 38px;
    font-weight: bolder;
    color: #3C5148;

}
.addToCart{
    width: 270px;
    height: 60px;
    color: white;
    font-size: 20px;
    font-weight: bolder;
    font-family: 'Tai Heritage Pro';
    background-image: linear-gradient(to right, #6B8E4E, #3C5148);
    border: none;
    border-radius: 15px;
}
.favicon{
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 10px;
    background-color: #DBE7B5;
}
.cartNfav{
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.subproductImg{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>