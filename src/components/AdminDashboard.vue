<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const events = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://localhost8080/api/v1/events');
    events.value = response.data;
  } catch (error) {
    console.error('Failed to fetch events:', error);
  }
});
</script>

<template>
  <div>
        <h1> ¡Bienvenido Administrador! </h1>
    </div>
    
    <div>
    <v-btn type="" color="orange">AÑADIR NUEVO EVENTO</v-btn>
    </div>

  <v-card class="mx-auto" max-width="425">
    <v-list lines="two">
      <v-list-subheader>Listado de Eventos</v-list-subheader>

      <v-list-item v-for="event in events" :key="event.event_id">
        <v-list-item-content>
          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-list-item>
          <v-list-item-title>{{ event.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ event.date }} - {{ event.hour }} at {{ event.place }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <!-- <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" title="Brunch this wee?">
        <template v-slot:subtitle>
          <span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
        </template>
      </v-list-item> -->
    </v-list>
  </v-card>
</template>

<!-- <script setup>
import { ref } from 'vue';

const events = ref([
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan  20,  2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan  10,  2014',
    title: 'Kitchen remodel',
  },
]);


</script>

<template>


    <div>
    <v-card class="mx-auto" max-width="600">
      <v-toolbar color="secondary">
  
        <v-toolbar-title>Mis eventos</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
  
        <v-btn variant="text" icon="mdi-view-module"></v-btn>
      </v-toolbar>
  
      <v-list lines="two">
        <v-list-subheader inset>Eventos</v-list-subheader>
  
        <v-list-item
          v-for="folder in events"
          :key="folder.title"
          :title="folder.title"
          :subtitle="folder.subtitle"
        >
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-1">
              <v-icon color="white">mdi-folder</v-icon>
            </v-avatar>
          </template>
  
          <template v-slot:append>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-information"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>
  
        <v-divider inset></v-divider>
  
        <v-list-subheader inset>eventos</v-list-subheader>
  
        <v-list-item
          v-for="event in events"
          :key="event.title"
          :title="event.title"
          :subtitle="event.subtitle"
        >
          <template v-slot:prepend>
            <v-avatar :color="event.color">
              <v-icon color="white">{{ event.icon }}</v-icon>
            </v-avatar>
          </template>
  
          <template v-slot:append>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-information"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
    </div>

  </template>

<style lang="scss">

</style> -->