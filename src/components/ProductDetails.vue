<template>
    <section class="productDetails">
        <div class="container">
            <div class="header">
                <button @click="toggleDescription"> Description</button>
                <button @click="toggleIngred"> Ingredients</button>
                <button @click="toggleUse"> How to Use</button>
            </div>
        

            <p v-show="showDesc" class="description">Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  
                mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum."
            </p>

            <p v-show="showIngreds" class="description">Ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  
                mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum."
            </p>

            <p v-show="showUsage" class="description">How to Use: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l
                abore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.""Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum."
            </p>

        </div>

        <img class="infoBoard" src="../assets/img/miraclecream.jpg" alt="">

        
    </section>
    
</template>
<script>
export default{
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
    padding: 10px 30px 30px 30px;
    display: flex;
    flex-direction: column;
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
    margin:0;
}
.description{
    padding: 30px 50px 30px 50px;
    font-size: 16px;
    color: black;
}
.infoBoard{
    width: 600px;
}
</style>