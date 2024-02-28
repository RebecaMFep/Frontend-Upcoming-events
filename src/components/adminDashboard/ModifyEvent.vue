<script setup>
import { ref, onMounted } from 'vue';
import { modifyEvent } from './modifyEvent';
import { useEventStore } from "@/stores/event";

const isOutstanding = ref(false);
const title = ref('');
const city = ref('');
const selectedDate = ref(null);
const selectedtime = ref('');
const capacity = ref(0);
const description = ref('');
const showCalendar = ref(false);

const openCalendar = () => {
  showCalendar.value = true;
}

const updateSelectedDate = (value) => {
  selectedDate.value = value;
} 

// Resetear el formulario

const resetForm = () => {

  isOutstanding.value = '';
  title.value = '';
  city.value = '';
  selectedDate.value = '';
  selectedtime.value = '';
  capacity.value = 0;
  description.value = '';

}

// Editar el evento seleccionado

const formData = ref({
  isOutstanding: '',
  title:'',
  city: '',
  selectedDate: '',
  selectedtime: '',
  capacity: 0,
  description: '',
});


const store = useEventStore()



const editEvent = async (id) => {
  const isEdit = await store.editEvent(id)
try {

  const uri = import.meta.env.VITE_APP_API_ENDPOINT

  const data = {
    isOutstanding: isOutstanding.value,
    title: title.value,
    date: selectedDate.value,
    hour: selectedTime.value,
    place: city.value,
    capacity: capacity.value,
    description: description.value, 
  }

  const config = {
    withCredentials: true,
  }

  const response = await axios.post(uri + '/events', data, config)
  const status = await response.status
  console.log(status);

} catch (error) {
  throw new Error('Error calling api: ' + error)
}

}

//onMounted(fetchData);



</script>

<template>

  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

      <v-card-title class="title d-flex justify-center">
        <h1>Editar Evento</h1>
      </v-card-title>

      <v-spacer></v-spacer> 

      <v-card ref="form" color="orange-lighten-3" class="mt-10 mb-13 pt-10 pb-10 rounded-lg">
     
        <v-card-title class="title d-flex justify-center">
        <h1 color="orange-darken-1--text">Editar Evento</h1>
      </v-card-title>
      
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
                  <v-text-field bg-color="orange-lighten-5" type="time" v-model="selectedTime" label="Hora"></v-text-field>
              
            </v-col>

            <v-col cols="4">
                <v-text-field bg-color="orange-lighten-5" v-model="capacity" type="number" label="Aforo" min="1" step="1"></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-textarea bg-color="orange-lighten-5" class="px-4" label="Descripción" v-model="description"></v-textarea>

        <v-container class="d-flex justify-center gc-6">
      
          <v-btn color="orange-darken-1"  id="reset" @click="resetForm()">Borrar</v-btn>
          <v-btn color="orange-darken-1" id="send" @click="editEvent()">Editar</v-btn>

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