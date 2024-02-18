<script setup>
import { ref } from 'vue';

const title = ref('');
const city = ref('');
const selectedDate = ref(null);
const selectedTime = ref(null);
const capacity = ref(null);
const description = ref('');
// const date = ref(new Date(''))
const showCalendar = ref(false);
const showTime = ref(false);

const openCalendar = () => {
  showCalendar.value = true;
}

const updateSelectedDate = (value) => {
  selectedDate.value = value;
} 

const openTimePicker = () => {
  showTime.value = true;
}


const updateSelectedTime = (value) => {
  time.value = value;
}

// Resetear el formulario
const resetForm = () => {
  title.value = ''
  city.value = ''
  selectedDate.value = ''
  time.value = ''
  capacity.value = ''
  description.value = ''

}

// Lista de eventos sincronizada con la base de datos 
const eventList = ref([])

// Añadir un nuevo evento a la lista
const addEvent = () => {

  // Añadir el evento

  if (newEvent.value) {
    eventList.value.push({ name: newEvent.value })
    newEvent.value = '' // para limpiar el campo de evento
  }
}

</script>

<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

      <v-card-title class="title d-flex justify-center">
        <h1 class="orange-darken-1--text">Añadir Nuevo Evento</h1>
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card ref="form" color="orange-lighten-3" class="mt-10 mb-13 pt-10 pb-10 .rounded-xl">

        <!-- <v-file-input bg-color="orange-lighten-5" class="pr-4 .rounded-shaped" label="Añadir foto" v-model="photo"></v-file-input> -->

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
              <v-menu ref="dateMenu" v-model="showCalendar" :close-on-content-click="false" transition="scale-transition"
                offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field bg-color="orange-lighten-5" label="Fecha" readonly v-bind="attrs" @click.stop="openCalendar" v-model="selectedDate">
                  </v-text-field>
                </template>
              </v-menu>
            </v-col> 

            <v-col cols="4">
              <v-menu ref="timeMenu" v-model="showTime" :close-on-content-click="false" transition="scale-transition"
                offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field bg-color="orange-lighten-5" label="Hora" readonly v-bind="attrs" @click.stop="openTimePicker" v-model="selectedTime"></v-text-field>
                </template>
              </v-menu>
            </v-col>

            <v-col cols="4">
              <v-text-field bg-color="orange-lighten-5" v-model="seatCount" type="number" label="Number of Seats" min="1"
                step="1"></v-text-field>
            </v-col>

          </v-row>
        </v-container>

        <v-textarea bg-color="orange-lighten-5" class="px-4" label="Descripción" v-model="description"></v-textarea>

        <v-container class="d-flex justify-center gc-6">

          <v-btn color="orange-darken-1" id="reset" @click="resetForm()">Borrar</v-btn>
          <v-btn color="orange-darken-1" id="send" @click="addEvent()">Añadir</v-btn>

        </v-container>

      </v-card>
    </v-col>
  </v-row>

  <v-row justify="space-around" v-show="showCalendar">
    <v-date-picker 
      elevation="24"
      v-model="selectedDate" @input="updateSelectedDate" no-time format="YYYY-MM-DD"></v-date-picker>
     
  </v-row> 
  <v-row justify="space-around" v-show="showTime">
    <v-time-picker  v-model="time" format="24hr"
      elevation="24" @input="updateSelectedTime"></v-time-picker>
  </v-row>

  </template>

  <style lang="scss" scoped>
  .no-time-picker .v-time-picker {
    display: none;
  }

  </style>

