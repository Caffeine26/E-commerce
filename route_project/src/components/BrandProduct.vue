<template>
  <div class="brand-products">
    <Header />
    <h1 class="PPbrand">{{ brandName }} Products</h1>
    <div class="product-list">
      <SingleProduct
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SingleProduct from "@/components/SingleProduct.vue";

export default {
  components: {
    Header,
    Footer,
    SingleProduct,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", brand: "Dr. Althea", img: "/src/assets/img/p1.jpg", price: "$20", sale: true },
        { id: 2, name: "Product 2", brand: "Numbuzin", img: "/src/assets/img/patch.png", price: "$30", sale: false },
        { id: 3, name: "Product 3", brand: "Dr. Althea", img: "/src/assets/img/bluemoisture.jpg", price: "$25", sale: true },
      ],
    };
  },
  computed: {
    brandName() {
      return this.$route.params.brandName;
    },
    filteredProducts() {
      return this.products.filter(product => product.brand === this.brandName);
    },
  },
};
</script>

<style scoped>
.brand-products {
 
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.PPbrand {
  text-align: center;
  font-size: 65px;
  color: white;
  width: calc(100% + 300px); /* Match the Header's width */
  margin-left: -150px; /* Match the Header's left margin */
  margin-bottom: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  height: 100px; /* Min height */
  background-color:darkgreen;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
