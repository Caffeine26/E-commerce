<template>
    <section>
        <div class="header">
            <button @click="toggleDescription"> Description</button>
            <button @click="toggleIngred"> Ingredients</button>
            <button @click="toggleUse"> How to Use</button>
        </div>
        

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Facilis quod provident deleniti voluptatum pariatur quasi nostrum itaque maxime maiores molestias, 
        temporibus sunt. Reiciendis dolore suscipit cum et quibusdam doloribus molestiae?
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facilis quod provident deleniti voluptatum pariatur quasi nostrum itaque maxime maiores molestias, 
            temporibus sunt. Reiciendis dolore suscipit cum et quibusdam doloribus molestiae?
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facilis quod provident deleniti voluptatum pariatur quasi nostrum itaque maxime maiores molestias, 
            temporibus sunt. Reiciendis dolore suscipit cum et quibusdam doloribus molestiae?
        </p>
    </section>
    
</template>
<script></script>

<style>
button{
    width: 120px;
    height:60px;
    border: solid 1px black;
}
.header{
    display: flex;
    flex-direction: row;
    margin:0;
}
</style>