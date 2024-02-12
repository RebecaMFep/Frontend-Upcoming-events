<script setup>
import { useEventStore } from "@/stores/event";
import CardsEvents  from "@/components/card/CardsEvents.vue";

const store = useEventStore()
store.getEvents()


</script>

<template>

  <main>
<div v-for="event in store.events">
  <CardsEvents :event="event" />

</div>

    
  </main>
</template>

<style scoped>

main {
  display: flex;
  justify-content: space-around;
  margin: 5%;
  flex-wrap: wrap;
  gap:  10px; 

}

@media (max-width:  768px) {
  .CardsEvents {
    width:  100%;
  }
}
</style>