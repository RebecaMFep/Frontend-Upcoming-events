<script setup>
import AddEvent from '@/components/adminDashboard/AddEvent.vue';
import AddEventButton from '@/components/adminDashboard/AddEventButton.vue';
</script>

<template>
  <AddEventButton />
   <AddEvent />
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
