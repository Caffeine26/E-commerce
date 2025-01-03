<template>
  <HomeView />
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  name: "App",
  components: {
    HomeView, // Ensure HomeView is registered
  },
};
</script>
