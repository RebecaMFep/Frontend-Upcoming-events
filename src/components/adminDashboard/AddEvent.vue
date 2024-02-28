<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useDate } from "vuetify";
import { computed } from 'vue';
import { useRouter } from "vue-router";

const date = useDate()
const router = useRouter()

const title = ref('');
const city = ref('');
const selectedDate = ref(null);
const selectedTime = ref('');
const capacity = ref(0);
const description = ref('');
const showCalendar = ref(false);
const isOutstanding = ref(false);
const dateMenu = ref(false)

const dateNow = Date.now()

const openCalendar = () => {
  console.log('changed');
  showCalendar.value = true
}

const updateSelectedDate = (value) => {
  selectedDate.value = value;
}


const resetForm = () => {

  isOutstanding.value = '';
  title.value = '';
  city.value = '';
  selectedDate.value = '';
  selectedTime.value = '';
  capacity.value = 0;
  description.value = '';

}
 
const eventList = ref([])


const addEvent = async () => {

  try {

    const uri = import.meta.env.VITE_APP_API_ENDPOINT

    const data = {
      title: title.value,
      date: formattedDate.value,
      hour: selectedTime.value,
      place: city.value,
      description: description.value,
      capacity: capacity.value,
      outstanding: isOutstanding.value
    }

    const config = {
      withCredentials: true,
    }

    const response = await axios.post(uri + '/events', data, config)
    const status = await response.status
    
    if (status == 201) {
      router.push("/dashboard")
    }

  } catch (error) {
    throw new Error('Error calling api: ' + error)
  }

}

const formattedDate = computed(() => { return date.format(selectedDate.value, 'fullDateWithWeekday') })
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

      <v-card-title class="title d-flex justify-center">
        <h1>Añadir Nuevo Evento</h1>
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card ref="form" color="orange-lighten-3" class="mt-10 mb-13 pt-10 pb-10 rounded-lg">

        <v-checkbox class="d-flex justify-end mr-8 " label="Destacado" v-model="isOutstanding"></v-checkbox>

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
              <v-menu ref="dateMenu" v-model="showCalendar" :close-on-content-click="false" transition="scale-transition"
                offset-y max-width="290px" min-width="290px" >
                <template v-slot:activator="{ attrs }">
                  <v-text-field bg-color="orange-lighten-5" label="Fecha" readonly v-bind="attrs"
                    @click.stop="openCalendar" :value="formattedDate">
                  </v-text-field>
                </template>
                <v-date-picker v-model="selectedDate" @change="openCalendar" :min="dateNow" no-title></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="4">
              <v-text-field bg-color="orange-lighten-5" type="time" v-model="selectedTime" label="Hora"></v-text-field>
            </v-col>

            <v-col cols="4">
              <v-text-field bg-color="orange-lighten-5" v-model="capacity" type="number" label="Aforo" min="1" step="1">
              </v-text-field>
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
</template>

<style lang="scss" scoped></style>

