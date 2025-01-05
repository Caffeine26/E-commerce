<template>
    <div id="app">
      <MainLayoutComponent />
    </div>
  </template>
  
  <script>
  import MainLayoutComponent from "./components/MainLayoutComponent.vue";
  export default {
    name: "App",
    components: { 
      MainLayoutComponent,
     },
  };
  </script>
  <style>
    #app {
    display: flex;
    flex-direction: column;
  }
  
  </style>
  