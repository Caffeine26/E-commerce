<template>
  <div class="poster" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button>{{ buttonText }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  description: String,
  backgroundImage: String,
  buttonText: String,
});
</script>

<style scoped>
.poster {
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.content {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-bottom:10px;
 
}

button {
  margin-top: 10px;
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
