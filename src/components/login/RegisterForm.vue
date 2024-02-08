<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
//import { useUserStore } from "@/stores/user";

// let uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

// const route = useRoute()
// const router = useRouter()
// const store = useUserStore()
// let repository = new repository()
// let service = new UserService(repository)
// let user = []
// let isLoaded = ref(false)

// async function setUser() {
//     user = await service.index()
//     isLoaded.value = true
//     console.log(user)
//   }

  
</script>


<template>
    <div class="register-box">
  
      <v-sheet class="mx-auto rounded-lg register-box" style="">
        <div class="form">
          <v-form fast-fail @submit.prevent="register()">
            <v-text-field class="rounded-lg" v-model="username" label="Usuario" :rules="userRules"></v-text-field>
  
            <v-text-field class="rounded-lg" v-model="password" label="Contraseña" :rules="passwordRules"></v-text-field>
  
            <v-btn type="submit" color="orange" block class="mt-4 rounded-lg">Registrarse</v-btn>
          </v-form>
        </div>
      </v-sheet>
    </div>
  </template>
  <style>
  .register-box {
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