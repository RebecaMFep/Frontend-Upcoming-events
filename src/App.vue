<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/header-footer/HeaderComponent.vue';
//import FooterComponent from './components/header-footer/FooterComponent.vue';
</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView />
   
  </div>
</template>

<style scoped></style>
