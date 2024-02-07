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

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
     //<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">

      <nav>
         <RouterLink to="/">Home</RouterLink> 
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style> --> 