<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

let uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

let username = ref("")
let password = ref("")

const userRules = [
  value => {
    if (value?.length > 3) return true;
    return 'First name must be at least 3 characters.';
  },
];

const passwordRules = [
  value => {
    if (/[^0-9]/.test(value)) return true;
    return 'Last name can not contain digits.';
  },
];

async function login() {

  const dataConnection = {
    username: username.value,
    password: password.value
  }

  let isAuthenticated = await store.login(dataConnection)

  if (isAuthenticated) {
    const redirectPath = route.query.redirect || '/dashboard'
    router.push(redirectPath)
  }
}
function redirectToRegister() {
  const redirectPath = route.query.redirect || '/register'
  router.push(redirectPath)
}

function redirectToAdminDashboard() {
  const redirectPath = route.query.redirect || '/'
  router.push(redirectPath)
}

</script>
<template>
  <div class="login-box">

    <v-sheet class="mx-auto rounded-lg login-box" style="">
      <div class="form">
        <v-form fast-fail @submit.prevent="login()">
          <v-text-field class="rounded-lg" v-model="username" label="Usuario" :rules="userRules"></v-text-field>

          <v-text-field class="rounded-lg" v-model="password" label="Contraseña" :rules="passwordRules"></v-text-field>

          <v-btn type="submit" color="orange" block class="mt-4 rounded-lg">Iniciar sesión</v-btn>

          <v-btn type="link" @click="redirectToRegister()" color="orange" block class="mt-4 rounded-lg">Registrarse</v-btn>
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