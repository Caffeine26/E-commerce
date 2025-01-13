<template>
    <section class="productDetails">
        <div class="container">
            <div class="header">
                <button 
                @click="toggleDescription"
                :class="{
                'selected': showDesc,
                'empty': !showDesc,
                'header': true
                }"
                > Description</button>
                <button @click="toggleIngred"
                :class="{
                'selected': showIngreds,
                'empty': !showIngreds,
                'header': true
                }"
                > Ingredients</button>
                <button 
                @click="toggleUse"
                :class="{
                'selected': showUsage,
                'empty': !showUsage,
                'header': true
                }"
                > How to Use</button>
            </div>
        

            <p v-show="showDesc" class="description">
                {{ description }}
            </p>

            <p v-show="showIngreds" class="description">
                {{ ingredients }}
            </p>

            <p v-show="showUsage" class="description">
                {{ usage }}
            </p>

        </div>

        <!-- <img class="infoBoard" src="../assets/img/miraclecream.jpg" alt=""> -->

        
    </section>
    
</template>
<script>
export default{
    props : {
        description : String,
        ingredients : String,
        usage : String
    },
    data(){
        return {
            showDesc : true,
            showIngreds: false,
            showUsage : false
        }
    },
    computed : {
        toggleDescription(){
            if(!this.showDesc){
                this.showDesc = true
                this.showIngreds = false
                this.showUsage = false
            }
        },
        toggleIngred(){
            if(!this.showIngreds){
                this.showIngreds = true
                this.showDesc = false
                this.showUsage = false
            } 
        },
        toggleUse(){
            if(!this.showUsage){
                this.showUsage = true
                this.showDesc = false
                this.showIngreds = false
            } 
        }
    }
}

</script>

<style scoped>
.container{
    width: 1200px;
    height: 400px;
    padding: 10px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    /* overflow-y: scroll; */
    /* background-color: aquamarine; */
}
.productDetails{
    /* background-color: aqua; */
    width: 1340px;
    border: 2px solid #979797;
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

}
button{
    width: 360px;
    height: 70px;
    border: none;
    border-bottom: 2px solid black;
    font-family: 'Tai Heritage Pro';
    font-size: 20px;
    font-weight: bolder;
    background-color: white;
}
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin:0;
    /* background-color: aqua; */
}
.description{
    padding: 30px 50px 30px 50px;
    font-size: 16px;
    color: black;
}
.infoBoard{
    width: 600px;
}

.header.selected{
    /* background-color: aquamarine; */
}
.header.empty{
    /* background-color: #979797; */
    border-bottom: 2px solid #979797;
    color:#979797
}
</style>