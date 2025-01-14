<template>
 <div class="reviewBox">
    <img class="userProfile" src="@/assets/img/user1.png" alt="user">
    <img id="pen" src="@/assets/img/pencil-line.svg" alt="en">
    
    <input class="instruction" 
    type="text" 
    :placeholder="instruction"
    v-model="comment"
    >
    
    <img id="sendReview" @click="submit" src="@/assets/img/send-plane-line.svg" alt="send">
</div>

</template>

<script>
import { useProductStore } from '@/stores/Products';

export default{
    setup(){
        const store = useProductStore()
        return { store }
    },
    props : {
        productId : Number,
        currentRating : Number,
        instruction : String,
        inputType : String  // 'review' or 'question'
    },
    data(){
        return{
            comment: '',
            currentDate: ''
        }
    },
    methods : {
        getCurrentDate(){
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            today.toDateString();
            console.log('current date = ', today)
            this.currentDate = today
        },
        submit(){
            this.getCurrentDate()
            let review = { profile: 'https://www.searchenginediscovery.com/ourteam_1.jpg', name: 'placeholder', date: this.currentDate , comment:this.comment, rating:this.$props.currentRating }

            const pid = this.productId-1
            console.log('pid=',pid)
            if(this.inputType == 'review'){
                const selectedReview = this.store.previews[pid].reviews
                console.log('reviews', selectedReview)
                selectedReview.unshift(review)
            } else if(this.inputType == 'question'){
                // const selectedQuestion = this.store.previews[pid].questions
                // console.log('questions', selectedReview)
                // selectedQuestion.unshift(review)
                // console.log(selectedQuestion)
            }
            
        },
    }
}
</script>

<style scoped>
.reviewBox{
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  /* background-color: #A56B3D; */
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
  margin-left: 5px;
  padding: 10px 40px 10px 40px;

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
</style>