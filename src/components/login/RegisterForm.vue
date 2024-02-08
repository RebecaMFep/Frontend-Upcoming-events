<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";


</script>






<template>
    <div class="login-box">
  
      <v-sheet class="mx-auto rounded-lg login-box" style="">
        <div class="form">
          <v-form fast-fail @submit.prevent="register()">
            <v-text-field class="rounded-lg" v-model="username" label="Usuario" :rules="userRules"></v-text-field>
  
            <v-text-field class="rounded-lg" v-model="password" label="Contraseña" :rules="passwordRules"></v-text-field>
  
            <v-btn type="" color="orange" block class="mt-4 rounded-lg">Registrarse</v-btn>
          </v-form>
        </div>
      </v-sheet>
    </div>
  </template>
  <style>
  .login-box {
    /* height: 90%;
      width: 100%; */
    width: 80%;
    border: 2px solid blue;
    border-radius: 20px;
    justify-content: center;
  }
  .rounded-lg{
    margin-top: 5%;
  }
  
  .custom-border {
    border: 1px solid blue;
    margin-bottom: 5%;
  }
  
  .form {
    margin-top: 10%;
    margin: 5%;
    margin-bottom: 10%;
  }
  </style>