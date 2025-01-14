<template>
    <Header></Header>
    <Checkout></Checkout>
    <Footer></Footer>
</template>
<script>
import Checkout from '@/components/Checkout.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default{
    components : {
        Checkout,
        Header,
        Footer
    }
}
</script>