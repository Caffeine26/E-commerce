<template>
    <Header></Header>
    <CheckoutForm></CheckoutForm>
    <Footer></Footer>

</template>

<script>
import CheckoutForm from '@/components/CheckoutForm.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default{
    components : {
        CheckoutForm,
        Header,
        Footer
    }
}

</script>