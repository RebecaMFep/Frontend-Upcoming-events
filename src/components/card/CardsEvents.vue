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
    max-width="250" :style="{ borderRadius: '15px', border: '2px solid blue', height: '500px'  }">
    
<v-img
cover
height="150"
width="300"
src="http://localhost:8080/api/v1/images/roma.jpg"></v-img>

    <v-card-item class="prueba"> 
        <v-card-title>{{ event.title }}</v-card-title>
    </v-card-item>

    <v-card-text>
        <div class="my-2 text-subtitle-1">{{ event.date }}</div>
        <div>{{ event.description }}</div>
    </v-card-text>

<div class="evento">
    <v-card-title>{{ event.place }}</v-card-title>
    <v-card-title>{{ event.hour }}</v-card-title>
</div>


<v-btn
color="orange" absolute :style="{ left: '50%', transform: 'translateX(-50%)', width: '100px', fontSize: 'x-small' }" class="mb-2">Inscribirme
</v-btn>

</v-card>


</template>

<style scoped lang="scss">
    .prueba{
        padding: 0;
        margin-left: 5%;
    }
    .evento{
        display: flex;
        justify-content: space-between;
    }



</style>

