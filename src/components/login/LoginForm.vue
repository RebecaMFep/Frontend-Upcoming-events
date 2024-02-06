<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";

let uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

const route = useRoute()
const router = useRouter()

let username = ref("")
let password = ref("")


const usuario = ref('');
const usuarioRules = [
  value => {
    if (value?.length > 3) return true;
    return 'First name must be at least 3 characters.';
  },
];

const contraseña = ref('123');
const contraseñaRules = [
  value => {
    if (/[^0-9]/.test(value)) return true;
    return 'Last name can not contain digits.';
  },
];

async function login() {

  try {
    let authString = btoa(`${username}:${password}`)
    const response = await fetch(uri + '/login', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + authString
      },
      credentials: 'include'
    });
    const text = await response.json();
    console.log(text);
    redirectToAdminDashboard()
  } catch (error) {
    alert("Usuario o contraseña incorrectos")
    throw new Error('Error occured during API fetch GET request while login')
  }
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
          <v-text-field class="rounded-lg" v-model="usuario" label="Usuario" :rules="usuarioRules"></v-text-field>

          <v-text-field class="rounded-lg" v-model="contraseña" label="Contraseña"
            :rules="contraseñaRules"></v-text-field>

          <v-btn type="submit" color="orange" block class="mt-4 rounded-lg">Iniciar sesión</v-btn>

          <v-btn type="submit" color="orange" block class="mt-4 rounded-lg">Registrarse</v-btn>
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

.custom-border {
  border: 1px solid blue;
}

.form {
  margin-top: 10%;
  margin: 5%;
  margin-bottom: 10%;

}
</style>