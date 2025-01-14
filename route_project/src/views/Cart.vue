<template>
    <Header></Header>
    <ShoppingCard></ShoppingCard>
    <Footer></Footer>

</template>

<script>
import ShoppingCard from '@/components/ShoppingCard.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default{
    components : {
        ShoppingCard,
        Header,
        Footer
    }
}
</script>