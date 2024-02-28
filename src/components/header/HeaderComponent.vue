<script setup>

import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue';

const route = useRoute()
const router = useRouter()

// const isLoggedIn = false; 
// const isLoginPage = router.currentRoute.value.name === 'login'; 



const isAuthenticated = ref(false);

const login = () => {
      // Lógica de autenticación aquí
      isAuthenticated.value = true; // Actualiza el estado a autenticado después de un inicio de sesión exitoso
    };

    const logout = () => {
      // Lógica de cierre de sesión aquí
      isAuthenticated.value = false; // Actualiza el estado a no autenticado después de un cierre de sesión exitoso
    };


 


const goToLogin = () => {
  router.push('/login');
}

const goToRegister = () => {
  router.push('/register');
}
</script>
  
<template>
    <header>
      <img src="../../assets/images/icons/logoHeader.png" alt="">
      
      <div class="buttons">

   <!-- <v-btn class="button1" color="orange-darken-1" @click="toggleAuth">
        {{ isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión' }}
      </v-btn> -->

      <v-btn v-if="!isAuthenticated" @click="login"  color="primary">Log in</v-btn>
    <v-btn v-else @click="logout" color="primary">Log out</v-btn>

        <v-btn class="button1" color="orange-darken-1"  @click="goToLogin">iniciar sesión</v-btn>
        <v-btn class="button2" color="orange-darken-1" @click="goToRegister">registrarse</v-btn>

      </div>
    </header> 
</template> 

<style lang="scss" scoped>
 header {
   background-color:#80CBC4;
   width: 100%;
   height: 150px;
   display: flex;
   justify-content: space-between;
  }

  .buttons {
    margin-top: 80px;
    margin-right: 50px;
  }

  .button1 {
    margin-right: 25px;
  }

</style>