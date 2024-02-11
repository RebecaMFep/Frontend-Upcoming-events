<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent2 from './components/header/HeaderComponent2.vue';
import FooterComponent from './components/footer/FooterComponent.vue';

</script>

<template>
  <header>
    <HeaderComponent2 />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <v-app>
    <RouterView />
    <FooterComponent />
  </v-app>
</template>

<style scoped></style>
