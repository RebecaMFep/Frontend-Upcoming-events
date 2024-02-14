<script setup>
import EventAdd from '@/components/adminDashboard/EventAdd.vue';
import AddEventButton from '@/components/adminDashboard/AddEventButton.vue';
</script>

<template>
  <AddEventButton />
   <EventAdd />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
