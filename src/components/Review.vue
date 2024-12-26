<template>
    <div class="review">
        <img class="userProfile" :src="this.profile" alt="user">

        <div class="content">
            <div class="nameNdate">
                <div class="username">{{ this.name }}</div>
                <div class="revDate" >{{ this.date }}</div>
            </div>
            <div class="revrating">★★★★★</div>

            <div class="reviewBody">
                <div class="revcontent">{{ this.reviewContent }}</div>
                <div class="helpBox">
                    <div class="likes">{{ this.likes }} found this helpful</div>
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
    data(){
        return{
            profile : 'src/assets/img/user1.png',
            name : 'Travis',
            date : 'November 6, 2024 8:26PM',
            reviewContent : "I use this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
            likes: 47,
        }
    }
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
</style>