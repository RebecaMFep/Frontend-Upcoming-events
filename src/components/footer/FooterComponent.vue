<script setup>

const icons = [
  'fab fa-youtube',
  'fab fa-facebook',
  'fab fa-google-plus',
  'fab fa-instagram'
];
</script>



<template>
    <v-footer color="teal-lighten-3">
      <v-container class="d-flex justify-center">
      <v-card color="teal-lighten-3" class="flex" flat tile>
        <v-card-title class="teal">
          
  
          <v-spacer></v-spacer>
  
            <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
        </v-card-title>
  
        <v-card-actions class="d-flex justify-center">
          <strong>&copy;2024 — Team Event</strong>
        </v-card-actions>
      </v-card>
    </v-container>  
  </v-footer>
</template>

  <style>


</style>