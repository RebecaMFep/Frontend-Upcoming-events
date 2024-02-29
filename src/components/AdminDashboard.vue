<script setup>
import AddEventButton from './adminDashboard/AddEventButton.vue';
</script>

<template>
  <main>
  <v-container class="background">
    <v-row justify="space-between" class="ma-3">
      <div class="adminTitle">
      <h1> ¡Bienvenido Administrador! </h1>
    </div>
      <AddEventButton />
    </v-row>
  </v-container>
</main>
</template>

<style lang="scss" scoped>

main {
  background-color:#FFF3E0;
}
.background {
 background-color:#FFF3E0;
}

adminTitle {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

</style>
