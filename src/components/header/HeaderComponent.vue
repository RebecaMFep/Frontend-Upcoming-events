<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false); // Inicialmente el usuario no está logueado

function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value;
  // Aquí también puedes implementar la lógica para manejar el inicio y cierre de sesión
}
</script>

  
<template>
    <header>
      <img src="../../assets/images/icons/logoHeader.png" alt="">
      
      <div class="buttons">

        <v-btn class="button2" color="orange-darken-1" @click="toggleLogin">
    <span v-if="isLoggedIn">Log out</span>
    <span v-else>Log in</span>
  </v-btn>
         <v-btn class="button1" color="orange-darken-1">Home</v-btn>
        <v-btn class="button2" color="orange-darken-1">registrarse</v-btn>

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