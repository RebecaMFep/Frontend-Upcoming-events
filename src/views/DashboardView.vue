<script setup>
import AdminDashboard from '@/components/AdminDashboard.vue';
import { useEventStore } from "@/stores/event";
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';

import { ref } from 'vue';

const store = useEventStore()
store.getEvents()


const editEvent = (event) => {
};

const deleteEvent = (event) => {

};

</script>

<template>

        <AdminDashboard />
    <v-container>
    <v-card>
    <v-card-title>Listado de Eventos</v-card-title>
    <v-card-text>
        <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Nombre</th>
                <th class="text-left">Fecha</th>
                <th class="text-left">Hora</th>
                <th class="text-left">Lugar</th>
                <th class="text-left">Descripción</th>
                <th class="text-left">Opciones</th>

            </tr>
            </thead>


            <tbody>
                <tr v-for="(event, index) in store.events" :key="index">
                <td>{{ event.id }}</td>
                <td>{{ event.title }}</td>
                <td>{{ event.date }}</td>
                <td>{{ event.hour }}</td>
                <td>{{ event.place }}</td>
                <td>{{ event.description }}</td>
                <td class="options-cell">
        <v-row no-gutters class="btn-icono">
            <v-col cols="6">
            <v-icon @click="editEvent(event)">mdi-pencil</v-icon>
            </v-col>
            <v-col cols="6">
            <v-icon @click="deleteEvent(event)">mdi-delete</v-icon>
            </v-col>
        </v-row>
        </td>
    
            </tr>
            </tbody>
        </template>
        </v-simple-table>
        </v-card-text>
        <v-divider inset></v-divider>
    </v-card>

</v-container>

</template>

<style scoped>

.text-left {
    padding:   10px;
    border-bottom:   1px solid #ddd;
    justify-content: space-between;
}

td {
    padding:   10px;
    border-bottom:   1px solid blue; 
    justify-content: space-between;
}


.btn-icono {
    display: flex;
    justify-content: space-around;
    width:   100%;
}

.v-card {
width: 80%;
border: 2px solid blue;
border-radius: 20px;
justify-content: center;
text-align: center;
}


</style>

