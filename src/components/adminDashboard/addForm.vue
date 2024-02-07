<script>

</script>

<template>
    <div class="login-box">

<v-sheet class="mx-auto rounded-lg login-box" style="">
  <div class="form">
    <v-form fast-fail @submit.prevent="login()">
      <v-text-field class="rounded-lg" v-model="username" label="Usuario" :rules="userRules"></v-text-field>

      <v-text-field class="rounded-lg" v-model="password" label="Contraseña" :rules="passwordRules"></v-text-field>

      <v-btn type="submit" color="orange" block class="mt-4 rounded-lg">Iniciar sesión</v-btn>

      <v-btn type="" color="orange" block class="mt-4 rounded-lg">Registrarse</v-btn>
    </v-form>
  </div>
</v-sheet>
</div>
</template>

<style>

</style>