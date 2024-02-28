<script setup>

import AddEvent from '@/src/components/adminDashboard/AddEvent';

</script>

<template>
    <div class="addEvent">
        <h1>Add Event</h1>
        <AddEvent />
    </div>
</template>

<style lang="scss">

.addEvent {
    background-image: url(../../public/image/fondo4.jpg);
    background-size: cover;
    background-position:left;
    opacity: 0.9;
}

h1 {
    margin-top: 2%;
    justify-self: center;
    color: blue;
    text-align: center;
    font-size: 35px;
}

</style>