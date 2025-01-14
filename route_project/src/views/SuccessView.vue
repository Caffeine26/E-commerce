<template>
    <Header></Header>
    <Success></Success>
    <Footer></Footer>
</template>
<script>
import Success from '@/components/Success.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components : {
        Success,
        Header,
        Footer
    }
}

</script>