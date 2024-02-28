<script setup>
/* import { ref, onMounted } from 'vue' */
</script>

<template>

<v-container class="d-flex flex-column align-self-center justify-center">
<div class="container">
<div class="welcome">
    <h1> ¡Bienvenido Administrador! </h1>
</div>

<div class="btn_add d-flex justify-center">
    <v-btn type="submit" color="orange-lighten-5"  absolute :style="{ left: '30%', transform: 'translateX(-50%)', width: '90%'} " class="mb-4 small-text">AÑADIR NUEVO EVENTO</v-btn>
    </div>
  </div>
</v-container>

</template>

<style scoped>
.title-cell {
  padding:   10px;
  border-bottom:   1px solid #ddd;
  justify-content: space-between;
}

.container{
  display: flex;
  justify-content: space-between;

}


</style>
