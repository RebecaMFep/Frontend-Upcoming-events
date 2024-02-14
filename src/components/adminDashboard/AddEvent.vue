<script setup>
import { ref } from 'vue';
import format from 'date-fns/format';
import { createVuetify } from 'vuetify';
import { DayJsAdapter } from '@date-io/dayjs';

// Configuración de Vuetify
const vuetify = createVuetify({
  date: {
    adapter: DayJsAdapter,
  },
});

// Estado reactivo
const photo = ref(null);
const title = ref('');
const city = ref('');
const date = ref(new Date().toISOString().substr(0,   10));
const dateMenu = ref(false);
const time = ref('');
const timeMenu = ref(false);
const capacity = ref(null);
const description = ref('');

// Métodos
const submit = () => {
  console.log(title.value, content.value);
};

const resetForm = () => {
  // Lógica para restablecer el formulario
};

const save = () => {
  // Lógica para guardar los datos del formulario
};
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card-title class="title d-flex justify-center">
        <h1 class="orange-darken-1--text">Añadir Nuevo Evento</h1>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card ref="form" color="orange-lighten-3" class="mt-10 mb-13 pt-10 pb-10 rounded-xl">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field bg-color="orange-lighten-5" label="Añadir título" v-model="title"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field bg-color="orange-lighten-5" label="Ciudad" v-model="city"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-menu ref="dateMenu" v-model="dateMenu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field bg-color="orange-lighten-5" v-model="date" label="Fecha" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <!-- Asegúrate de tener un v-date-picker con v-model para el selector de fechas -->
                <v-date-picker v-model="date" @input="dateMenu = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="4">
              <v-menu ref="timeMenu" v-model="timeMenu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field bg-color="orange-lighten-5" v-model="time" label="Hora" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-time-picker v-model="time" format="24hr" @input="timeMenu = false"></v-time-picker>
              </v-menu>
            </v-col>
            <v-col cols="4">
              <v-text-field bg-color="orange-lighten-5" v-model="capacity" type="number" label="Número de Asientos" min="1" step="1"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-textarea bg-color="orange-lighten-5" class="px-4" label="Descripción" v-model="description"></v-textarea>
        <v-container class="d-flex justify-center gc-6">
          <v-btn color="orange-darken-1" id="reset" @click="resetForm">Borrar</v-btn>
          <v-btn color="orange-darken-1" id="send" @click="save">Añadir</v-btn>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>


