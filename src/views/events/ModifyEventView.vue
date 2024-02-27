<script setup>

import ModifyEvent from '@/src/components/adminDashboard/ModifyEvent';

</script>

<template>
    <div class="addEvent">
        <h1>Add Event</h1>
        <ModifyEvent />
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