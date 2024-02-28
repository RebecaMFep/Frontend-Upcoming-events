<script setup>
import AddEventButton from './adminDashboard/AddEventButton.vue';
</script>

<template>
  <main>
  <v-container class="background">
    <v-row justify="space-between" class="ma-3">
      <h1> ¡Bienvenido Administrador! </h1>
      <AddEventButton />
    </v-row>
  </v-container>
</main>
</template>

<style lang="scss" scoped>

main {
  background-color:#FFE0B2;
}
.background {
 background-color:#FFE0B2;
}

</style>
