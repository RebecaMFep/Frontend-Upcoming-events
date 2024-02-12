<script setup>

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },

});

</script>

<template>

    <v-card
    class="mx-auto my-12"
    max-width="300" :style="{ borderRadius: '15px', border: '2px solid blue'  }">
    
<!--     <v-img cover height="200" src="http://localhost:8080/images/roma.jpg "></v-img> -->
<v-img
cover
height="200"
width="300"
src="http://localhost:8080/images/roma.jpg"
></v-img>

    <v-card-item> 
        <v-card-title>{{ event.title }}</v-card-title>
    </v-card-item>

    <v-card-text>
        <div class="my-4 text-subtitle-1">{{ event.date }}</div>
        <div>{{ event.description }}</div>
    </v-card-text>

    <v-card-title>{{ event.place }}</v-card-title>
    <v-card-title>{{ event.hour }}</v-card-title>

<v-btn color="orange" absolute :style="{left: '50%', transform:'translateX(-50%)'}" class="mb-4">Inscribirme</v-btn>

</v-card>


</template>

<style scoped lang="scss">


</style>

