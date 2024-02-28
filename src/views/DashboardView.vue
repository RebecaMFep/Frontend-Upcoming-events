<script setup>
import { ref } from "vue";
import AdminDashboard from '@/components/AdminDashboard.vue';
import { useEventStore } from "@/stores/event";


const store = useEventStore()
let reloadComp = ref(false)

store.getEvents()

const deleteEvent = async (id) => {
    const isDeleted = await store.deleteEvent(id)

    if (isDeleted) {
        store.events.pop()
    }

}

const editEvent = (event) => {

    console.log(event)

    if (!reloadComp.value) {
        reloadComp.value = true
        return
    }

    reloadComp.value = false
}
</script>

<template>
    <AdminDashboard />

    <v-container>
        <v-table fixed-header="" height="500px">
            <thead>
                <tr>
                    <th class="text-left"> Id </th>
                    <th class="text-left"> Title </th>
                    <th class="text-left"> Fecha </th>
                    <th class="text-left"> Hora </th>
                    <th class="text-left"> Lugar </th>
                    <th class="text-left"> Descripción </th>
                    <th class="text-left"> Opciones </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="event in store.events" :key="event.id">
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
</template>

<style scoped>
.text-left {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
}

td {
    padding: 10px;
    border-bottom: 1px solid blue;
    justify-content: space-between;
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

