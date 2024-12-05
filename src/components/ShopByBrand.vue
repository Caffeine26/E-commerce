<template>
  <div class="brand-container">
    <h1 class="title">Shop by Brands</h1>
    <div class="grid-container">
      <div class="brand-card" v-for="brand in brands" :key="brand.name">
        <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
        <span class="brand-name">{{ brand.name }}</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ShopByBrands",
  data() {
    return {
      brands: [
        { name: "Dr. Althea", logo: new URL('@/assets/DrAlthea.png', import.meta.url).href },
        { name: "Numbuzin", logo: new URL('@/assets/Numbuzin.png', import.meta.url).href },
        { name: "Round Lab", logo: new URL('@/assets/RoundLab.png', import.meta.url).href },
        { name: "Torriden", logo: new URL('@/assets/Torriden.png', import.meta.url).href },
        { name: "Anua", logo: new URL('@/assets/AnUa.png', import.meta.url).href },
        { name: "Axis-Y", logo: new URL('@/assets/Axis-y.png', import.meta.url).href },
        { name: "Jumiso", logo: new URL('@/assets/Jumiso.png', import.meta.url).href },
        { name: "Mary & May", logo: new URL('@/assets/Mary&May.png', import.meta.url).href },
        { name: "COSRX", logo: new URL('@/assets/Cosrx.png', import.meta.url).href },
        { name: "Some By Mi", logo: new URL('@/assets/SomeByMi.png', import.meta.url).href },
      
      ],
    };
  },
};
</script>

<style scoped>
.brand-container {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #4b4b4b;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
}

.brand-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.brand-logo {
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.brand-name {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
</style>
