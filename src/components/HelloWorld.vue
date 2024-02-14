<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with

      hola soy Ana!

      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3> -->

    <v-btn>
  Button
</v-btn>



  <header> 
        <div>
            <img src="../assets/images/logo 2.png" alt="logo">
        </div>

        <v-container class="text-center">
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                    <v-btn color="orange accent-3" block size="large">sesión</v-btn>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                    <v-btn color="deep-orange darken-1" block size="large">Registro</v-btn>
                </v-col>
            </v-row>
        </v-container>

    </header> 
</template>


<style scoped>
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
