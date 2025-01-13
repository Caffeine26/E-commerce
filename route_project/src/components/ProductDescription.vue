<template>
    <section class="container">
        <div class="productImg">
            <img :src="displayedImg" :alt="name" class="mainproductImg">

            <div class="subproductImg">
                <button class="scroll-btn left" @click="scrollLeft">
                &#x276E;
                </button>
                <div class="extraproductImg" ref="productsContainer">
                    <img v-for="imgUrl1 in imgUrl" 
                    @click="displayImg(imgUrl1)" 
                    :src="imgUrl1" 
                    :alt="name" 
                    class="miniproductImg"
                    >
                </div>
                <button class="scroll-btn right" @click="scrollRight">
                &#x276F;
                </button>
            </div>
        </div>

        <div class="productDescription">
            <h2> {{ name }}</h2>
            <div>
                <span 
                v-for="star in 5" 
                :key="star"
                :class="{
                    'filled': star <= avgRating,
                    'empty': star > avgRating,
                    'star': true
                }"
                >
                ★
                </span>
                <span class="subtext"> {{ reviewAmount }} reviews</span>
            </div>
            
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

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
    const props = defineProps ({
        id : Number,
        name : String,
        reviewAmount : Number,
        price : Number,
        briefDescription : String,
        imgUrl : Array,
        avgRating : Number

    });

    let quantity = ref(1)
    let total = ref(props.price)
    let displayedImg = ref(props.imgUrl[0])

    // watch(props.imgUrl, (newValue, OldValue)=>{
    //     console.log(`Image array changed from ${OldValue} to ${newValue}`)
    // })
   
    
    function decrement(){
        if(quantity.value < 2){
            quantity.value = 1
        } else{
            quantity.value--
        }
        total = quantity.value * props.price
    };
    function increment(){
        quantity.value++
        total = quantity.value * props.price
    };
    
    function displayImg(imgUrl){
        displayedImg = imgUrl
    };
    // Scrolling logic
    const productsContainer = ref(null);

    const scrollLeft = () => {
    productsContainer.value.scrollBy({
        left: -300, // Adjust scroll amount
        behavior: "smooth",
    });
    };

    const scrollRight = () => {
    productsContainer.value.scrollBy({
        left: 300, // Adjust scroll amount
        behavior: "smooth",
    });
    };
    
    onBeforeMount(()=>{
        // console.log(imgUrl[0])
    })
    

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
    overflow-x: hidden;
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

.scroll-btn {
  /* position: absolute;
  top: 50%; */
  transform: translateY(-50%);
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.scroll-btn.left {
  left: -10px;
}

.scroll-btn.right {
  right: -10px;
}

.scroll-btn:hover {
  background-color: #999594;
  color: #fff;
  transform: scale(1.1);
}

.star.filled {
color: gold;
}

.star.empty {
color: lightgray;
}
.star{
font-size: 30px;
cursor: pointer;
}
</style>