<script setup>

const icons = [
  'fab fa-youtube',
  'fab fa-facebook',
  'fab fa-google-plus',
  'fab fa-instagram'
];
</script>



<template>
    <v-footer color="" dark height="auto">
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          
  
          <v-spacer></v-spacer>
  
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
  
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2024 — <strong>Team Event</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </template>

  <style>


</style>