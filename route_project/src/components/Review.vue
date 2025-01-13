<template>
    <div class="review">
        <img class="userProfile" :src="profile" alt="user">

        <div class="content">
            <div class="nameNdate">
                <div class="username">{{ name }}</div>
                <div class="revDate" >{{ date }}</div>
            </div>
            <div class="revrating">{{ rating }}
                <span 
                    v-for="star in 5" 
                    :key="star"
                    :class="{
                    'filled': star <= rating,
                    'empty': star > rating,
                    'star': true
                    }"
                >
                    ★
                </span>
            </div>

            <div class="reviewBody">
                <div class="revcontent">{{ review }}</div>
                <div class="helpBox">
                    <!-- <div class="likes">{{ this.likes }} found this helpful</div> -->
                    <div class="userOption">
                        <button id="helpful">HELPFUL</button>
                        <button id="report">REPORT</button>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script>
export default{
    props : {
        profile : String,
        name : String,
        date : String,
        review : String,
        rating : Number
    },
}
</script>

<style scoped>
.review{
    display: flex;
    /* background-color: #FFC0CB; */
    margin: 20px 0px 20px 0;
}
.userProfile{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
}
.username{
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
}
.revDate{
    font-size: 14px;
    color: #808080;
}
.nameNdate{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.content{
    display: flex;
    flex-direction: column;
}
.reviewBody{
    width: 1000px;
    /* height: 200px; */
    padding: 20px 40px 20px 40px;
    margin-top: 20px;
    border: 1px solid #808080;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: aquamarine; */
}
.revcontent{
    font-size: 16px;
    margin-bottom: 20px;
}
.helpBox{
    display: flex;
    flex-direction: column;
}
.likes{
    font-size: 10px;
    color: #969191;
    margin-bottom: 5px;
}
#helpful{
    padding: 10px 20px 10px 20px;
    background-color: #FFC0CB;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: bolder;
}
#report{
    color: #969191;
    font-weight: bolder;
    border: none;
    background-color: white;
    margin-left: 20px;

    
}

.star {
color: gray;
transition: color 0.2s;
}

.star.filled {
color: gold;
}

.star.empty {
color: lightgray;
}
</style>