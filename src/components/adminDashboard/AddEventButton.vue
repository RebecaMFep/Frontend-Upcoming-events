<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToForm = () => {
  console.log('clicked');
  router.push('/add-event') // Reemplaza '/formulario' por la ruta a la que quieres navegar
}
</script>

<template>
    <v-btn class="mr-4" color="orange-darken-1" id="send"  @click="navigateToForm">Anadir nuevo evento</v-btn>
</template>

<style lang="scss" scoped>

</style>
    
