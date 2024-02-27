<script setup>
import { ref } from 'vue';

const isOutstanding = ref(false);
const title = ref('');
const city = ref('');
const selectedDate = ref(null);
const time = ref('');
const capacity = ref(null);
const description = ref('');
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


const updateTime = (value) => {
  time.value = value;
}

// Resetear el formulario

const resetForm = () => {

  isOutstanding.value = ''
  title.value = ''
  city.value = ''
  selectedDate.value = ''
  time.value = ''
  capacity.value = ''
  description.value = ''

}

// Editar el evento seleccionado

const modifyEvent = () => {
 
  // Actualizar el estado global o local con los nuevos datos del evento
  // Hacer solicitud HTTP a backend para actualizar el evento
}

</script>

<template>

  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

      <v-card-title class="title d-flex justify-center">
        <h1 color="orange-darken-1--text">Editar Evento</h1>
      </v-card-title>

      <v-spacer></v-spacer> 

      <v-card ref="form" color="orange-lighten-3" class="mt-10 mb-13 pt-10 pb-10 rounded-lg">
     
        <!-- <v-file-input bg-color="orange-lighten-5" class="pr-4 .rounded-shaped" label="Añadir foto" v-model="photo"></v-file-input> -->
        <v-checkbox  class="d-flex justify-end mr-8 " label="Destacado"></v-checkbox>
        <v-container>
          <v-row>
            <v-col cols="6"> 
              <v-text-field bg-color="orange-lighten-5" label="Título" v-model="title"></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field bg-color="orange-lighten-5" label="Ciudad" v-model="city"></v-text-field>
            </v-col>

          </v-row>
        </v-container>
  
        <v-container>
          <v-row>
            <v-col cols="4">
    
              <v-menu ref="dateMenu" v-model="showCalendar" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field bg-color="orange-lighten-5" label="Fecha" readonly v-bind="attrs" @click.stop="openCalendar" v-model="selectedDate"></v-text-field>
                </template>
              </v-menu> 
            </v-col>

            <v-col cols="4">
                  <v-text-field bg-color="orange-lighten-5" v-model="selectedTime" label="Hora"></v-text-field>
              
            </v-col>

            <v-col cols="4">
                <v-text-field bg-color="orange-lighten-5" v-model="seatCount" type="number" label="Aforo" min="1" step="1"></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-textarea bg-color="orange-lighten-5" class="px-4" label="Descripción" v-model="description"></v-textarea>

        <v-container class="d-flex justify-center gc-6">
      
          <v-btn color="orange-darken-1"  id="reset" @click="resetForm()">Borrar</v-btn>
          <v-btn color="orange-darken-1" id="send" @click="modifyEvent()">Editar</v-btn>

        </v-container> 
   
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="space-around" v-show="showCalendar">
    <v-date-picker 
      elevation="24"
      v-model="selectedDate" @input="updateSelectedDate" no-time format="YYYY-MM-DD">
    </v-date-picker>
     
</v-row>

</template>