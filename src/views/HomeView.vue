<script setup>
import { useEventStore } from "@/stores/event";

const store = useEventStore()
store.getEvents()

</script>

<template>
  <main>
    <div v-for="(event) in store.events">
      <v-card :title='event.title' 
      :subtitle="event.id" 
      :text="event.description"></v-card>
    </div>
  </main>
</template>
