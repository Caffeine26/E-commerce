<template>
  <div class="grid">
    <div class="category" v-for="(item, index) in categories" :key="index">
      <img :src="item.image" :alt="item.name" />
      <div class="overlay">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridComponent",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.grid {
  margin-top: 50px;
  margin-left: 70px;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 100px;
}

.category {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
}

.category img {
  width: 100%;
  height: auto;
  display: block;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
</style>