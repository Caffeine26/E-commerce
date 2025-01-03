<template>
    <div class="product">
      <product-description
      :id="products[0].pid"
      :name="products[0].name"
      :reviewAmount="products[0].reviewAmount"
      :price="products[0].price"
      :imgUrl="products[0].imgUrl"
      :briefDescription="products[0].briefDescription"
      ></product-description>
  
      <product-details></product-details>
  
      <div class="reviewHeader">
        <div class="reviews">Reviews</div>
        <div id="divider"> | </div>
        <div class="qna">Q&A</div>
      </div>
      
      <div>
        <div class="userRating">
          <div>How was your experience?</div>
          <div>Rating Star ☆☆☆☆☆</div>
        </div>
        
  
        <div class="reviewBox">
          <div class="writeBox">
            <img class="userProfile" src="./assets/img/user1.png" alt="user">
            <img src="./assets/img/pencil-line.svg" alt="en">
            <div class="instruction">Write a review about your experience</div>
          </div>
          <img class="sendReview" src="./assets/img/send-plane-line.svg" alt="send">
        </div>
  
        <review></review>
        <review></review>
        <review></review>
      </div>
  
      <div class="moreReviews">See more reviews</div>
  
    </div>
    
  </template>
  
  <script>
  export default{
    components : {
      
    },
  
    data(){
      return{
        products : [
          {
            pid : '001',
            name: 'Cetaphil Brightening Healthy Radiance Perfecting Serum 7X Power With Antioxidant C & Advanced Peptide',
            reviewAmount : 30,
            price : '21.88',
            imgUrl : [
              'src/assets/img/cetaphil_green.png',
              'src/assets/img/alya-skin.jpg',
              'src/assets/img/redcream.jpg',
              'src/assets/img/collagencream1.jpg'
            ],
            briefDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .product{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .star{
    width: 40px;
    height: 40px;
    background: linear-gradient(90deg, #faf604 50%, #a6a6a6 50%);
  }
  #starimg{
    /* background-color: #faf604; */
    color:aqua
  }
  #divider{
    margin: 0 10px 0 10px;
  }
  .reviewHeader{
    display: flex;
    flex-direction: row;
    font-size: 24px;
    font-weight: bolder;
    margin: 10px 0 10px 0;
  
  }
  .userProfile{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 30px 0 10px;
  }
  .instruction{
    font-size: 16px;
    color: #969191;
    margin-left: 5px;
  
  }
  .writeBox{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .reviewBox{
    width: 560px;
    height: 40px;
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 50px 0;
  }
  .sendReview{
    margin-right: 10px;
  }
  .userRating{
    /* font-family: 'Inria Serif'; */
    font-weight: bolder;
    color: black;
    font-size: 16px;
  }
  .reviews{
    color: red;
    border-bottom: 2px solid red;
  }
  .qna{
  
  }
  .moreReviews{
    width: fit-content;
    color: white;
    font-weight: bolder;
    background-image: linear-gradient(to bottom, #B9BA7E, #A56B3D);
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
  }
  </style>
  
  