<script setup>

import AdminDashboard from '@/components/AdminDashboard.vue';
import { useEventStore } from "@/stores/event";
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useEventStore()

store.getEvents()

const deleteEvent = async (id) => {
    const isDeleted = await store.deleteEvent(id)

    if (isDeleted) {
        store.events.pop()
    }

}

const editEvent = () => {
    router.push('/modify-event')

  
}
</script>

<template>
    <AdminDashboard />
    <main>
    <v-container class="background d-flex justify-center rounded-lg">
        <v-table fixed-header="" height="500px" class="adminList">
            <thead>
                <tr>
                    <th class="text-left"> Id </th>
                    <th class="text-left"> Título </th>
                    <th class="text-left"> Fecha </th>
                    <th class="text-left"> Hora </th>
                    <th class="text-left"> Lugar </th>
                    <th class="text-left"> Descripción </th>
                    <th class="text-left"> Opciones </th>
                </tr>
            </thead>
            <tbody>
                <tr color="teal-lighten-4" v-for="event in store.events" :key="event.id">
                    <td>{{ event.id }}</td>
                    <td>{{ event.title }}</td>
                    <td>{{ event.date }}</td>
                    <td>{{ event.hour }}</td>
                    <td>{{ event.place }}</td>
                    <td>{{ event.description }}</td>
                    <td class="options-cell">
                        <v-row no-gutters class="btn-icono">
                            <v-col cols="6">
                                <i class="fa fa-edit" @click="editEvent(event)"></i>
                            </v-col>
                            <v-col cols="6">
                                <i class="fa fa-trash" @click="deleteEvent(event.id)"></i>
                            </v-col>
                        </v-row>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</main>
</template>

<style lang="scss" scoped>

main {
    background-color: #FFF3E0;
}

.background {
    background-color:#FFE0B2;
}

// .titlesList {
//     //background-color: #B2DFDB;
//     margin-bottom: 15px;
// }
// .adminList {
//     background-color:#E0F2F1;
//     margin-bottom: 50px;
// }


.text-left {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
}

td {
    padding: 10px;
    //border-bottom: 1px solid blue;
    justify-content: space-between;
}

tr {
   height: 25px ;
}

.btn-icono {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.v-card {
    width: 90%;
    border: 2px solid blue;
    border-radius: 20px;
    justify-content: center;
    text-align: center;
}

@media (max-width: 600px) {
    .v-container {
        margin-left: 5vh;
    }
}


@media (min-width: 1200px) {
    .v-container {
        margin-left: 20vh;
    }
}
</style>

