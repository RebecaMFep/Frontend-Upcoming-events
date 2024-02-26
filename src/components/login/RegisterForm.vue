<script setup>
import { ref } from "vue"
import axios from 'axios'
import { useRoute, useRouter } from "vue-router";

let uri = import.meta.env.VITE_APP_API_ENDPOINT
let username = ref("")
let password = ref("")

const route = useRoute()
const router = useRouter()

async function register() {

  try {
    let passwordEncrypted = btoa(`${password.value}`)

    const data = {
      username: username.value,
      password: passwordEncrypted
    }

    const response = await axios.post(uri + '/users/register', data, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    const status = response.status

    console.log(status);
    redirectToLogin()
  } catch (error) {
    throw new Error('Error occured during API fetch POST request while login : ' + error)
  }
}

function redirectToLogin() {
  const redirectPath = route.query.redirect || '/login'
  router.push(redirectPath)
}
</script>



<template>
  <div class="register-box">

    <v-sheet class="mx-auto rounded-lg register-box" style="">
      <div class="form">
        <v-form fast-fail @submit.prevent="register()">
          <v-text-field class="rounded-lg" v-model="username" label="Usuario"></v-text-field>

          <v-text-field class="rounded-lg" v-model="password" label="Contraseña" type="password"></v-text-field>
          <!-- <v-text-field class="rounded-lg" v-model="validation" label="Validacion" :rules="validationdRules"></v-text-field> -->
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

.rounded-lg {
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