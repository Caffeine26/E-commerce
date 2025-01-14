<template>
  <div class="grid">
    <div
      class="category"
      v-for="(item, index) in categories"
      :key="index"
      @click="categoryClicked(item.name)"
    >
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
  methods: {
    categoryClicked(categoryName) {
      // Emit the category name when clicked
      this.$emit("category-click", categoryName);
    },
  },
};
</script>

<style scoped>
.grid {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0 20px;
  
}
.category {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Add pointer cursor */
  transition: transform 0.3s ease, opacity 0.3s ease; /* Optional: smooth transition for hover effects */
}

.category:hover {
  transform: scale(1.05); /* Optional: Slight zoom effect on hover */
  opacity: 0.9; /* Optional: Slight opacity change on hover */
}


.category img {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
