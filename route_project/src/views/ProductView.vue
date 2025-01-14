<template>
    <Header />
    <div class="product">
      <product-description
      :id="product.id"
      :name="product.name"
      :reviewAmount="reviewAmount"
      :price="product.price"
      :discount="product.promotionAsPercentage"
      :imgUrl="product.image"
      :briefDescription="review.description"
      :avgRating="getAverageRating"
      ></product-description>

      <div class="otherProducts">
        <div id="title">You may also like</div>
        <div class="relatedProducts">

          <button class="scroll-btn left" @click="scrollLeft">
          &#x276E;
          </button>

          <SingleProduct v-for="relatedProduct in relatedProducts"
          :product="relatedProduct"
          :key="relatedProduct.id"
          />

          <button class="scroll-btn right" @click="scrollRight">
          &#x276F;
          </button>
        </div>
      </div>
  
      <product-details
      :description="review.description"
      :ingredients="review.ingredients"
      ></product-details>
  
      <div class="reviewHeader">
        <div class="reviews"
        @click="toggleReview"
        :class="{
          'selected' : showRev,
          'empty' : !showRev,
          'header': true
        }"
        >Reviews</div>
        <div id="divider"> | </div>
        <div class="qna"
        @click="toggleQA"
        :class="{
          'selected' : showQA,
          'empty' : !showQA,
          'header': true
        }"
        >Q&A</div>
      </div>
      
      <div v-if="showRev">
        <div class="userRating">
          <div>How was your experience?</div>
          <star-rating
          :productId="product.id"
          ></star-rating>
        </div>
  
        <div>
          <review v-for="rev in review.reviews"
          :key="review.reviews.indexOf(rev)"
          :profile="rev.profile"
          :name="rev.name"
          :date="rev.date"
          :review="rev.comment"
          :rating="rev.rating"
          >
          </review>
        </div>
        
      </div>

      <div v-if="showQA">
        <div>What questions do you have? Our community is here to help!</div>
        <UserComment
        :instruction="instruction"
        :productId="product.id"
        :inputType="question"
        ></UserComment>

      </div>
  
    </div>
    <Footer />
    
  </template>
  
  <script>
  import { useProductStore } from '@/stores/Products';
  import ProductDescription from './../components/ProductDescription.vue'
  import ProductDetails from './../components/ProductDetails.vue'
  import Review from './../components/Review.vue'
  import StarRating from './../components/StarRating.vue'
  import SingleProduct from '@/components/SingleProduct.vue';
  import UserComment from '@/components/UserComment.vue';
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default{
    setup(){
      const store = useProductStore()
      return { store }
    },
    components : {
      ProductDescription,
      ProductDetails,
      Review,
      StarRating,
      SingleProduct,
      UserComment,
      Header,
      Footer
    },
  
    data(){
      return{
        product : Object,
        review : Object,
        reviewAmount : Number,
        relatedProducts : Array,
        showRev : true,
        showQA : false,
        instruction: 'Write down your question and ask away!'
      }
    },
    methods : {
      loadProductData(route){
        const productId = route.params.productId;
        const selectedProduct = this.store.products[productId-1]
        const selectedReview = this.store.previews[productId-1] //get a review object for product
        const reviewAmount = this.store.previews[productId-1].reviews.length

        const selectedBrand = selectedProduct.group
        // console.log(selectedBrand)
        const relatedProducts = this.store.getProductsByBrand(selectedBrand)
        // console.log(relatedProducts)
      
        this.product = selectedProduct
        this.review = selectedReview
        this.reviewAmount = reviewAmount
        this.relatedProducts = relatedProducts
        console.log('selected product= ', selectedProduct)
      }
    },
    computed : {
      toggleReview(){
        this.showRev = !this.showRev
        this.showQA = !this.showQA
      },
      toggleQA(){
        this.showQA = !this.showQA
        this.showRev = !this.showRev
      },
      getAverageRating(){
        const reviewAmount = this.review.reviews.length
        let ratingSum = 0
        for(let rev of this.review.reviews){
          ratingSum += rev.rating
        }
        const avgRating = ratingSum / reviewAmount
        // console.log('avg rating = ', avgRating)
        return avgRating
      },
    },  
    created(){
      this.loadProductData(this.$route)
    },
    watch : {
      $route(newRoute){
        this.loadProductData(newRoute)
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
    margin: 0 10px 0 10px;
  }
  .instruction{
    width: 560px;
    height: 40px;
    font-size: 16px;
    color: #969191;
    margin-left: 5px;
    padding: 10px 40px 10px 40px;
  
  }
  .reviewBox{
    position: relative;
    display: flex;
    align-items: center;
    /* background-color: #A56B3D; */
  }
  #pen{
    position: absolute;
    top: 10px;
    left: 70px;

  }
  #sendReview{
    position: absolute;
    top: 10px;
    left: 580px;
  }
  #sendReview:hover{
    cursor: pointer;
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
  .otherProducts{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 20px 0;
  }
  .relatedProducts{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 900px;
    /* overflow-x: scroll; */
  }
  #title{
    font-weight: bold;
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

.selected{
  color: red;
  border-bottom: 2px solid red;
}
.empty{
  color:#969191;
  border-bottom: none;
}
.header:hover{
  cursor: pointer;
}
  </style>
  
  