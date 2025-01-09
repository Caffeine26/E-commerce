<template>
  <div class="poster-grid">
    <Poster
      v-for="(poster, index) in posters"
      :key="index"
      :title="poster.title"
      :description="poster.description"
      :backgroundImage="poster.image"
      :buttonText="poster.buttonText"
    />
  </div>
</template>

<script setup>
import Poster from "@/components/Poster.vue";
import { defineProps } from "vue";

defineProps({
  posters: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
