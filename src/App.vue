<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
  <header>
    <HeaderComponent />

    <div class="wrapper">
      <nav>
        <!--  <RouterLink to="/">Home</RouterLink> 
        <RouterLink to="/about">About</RouterLink> 
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink> -->
      </nav>
    </div>
  </header>

  <v-app>
    <RouterView />
    <FooterComponent />
  </v-app>
</template>

<style scoped></style>
