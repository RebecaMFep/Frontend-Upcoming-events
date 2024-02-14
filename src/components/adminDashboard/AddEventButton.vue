<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToForm = () => {
  router.push('/AddEvent') // Reemplaza '/formulario' por la ruta a la que quieres navegar
}
</script>

<template >

  <v-container class="d-flex justify-end">
    <v-btn color="orange-darken-1" id="send" @click="navigateToForm">Anadir nuevo evento</v-btn>
  </v-container>

</template>

<style lang="scss" scoped>

</style>
    
