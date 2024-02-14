<script setup>
// Import the `ref` function from Vue to create reactive references
import { ref } from 'vue';

// Create a reactive reference for `isMenuOpen` initialized to false
const isMenuOpen = ref(false);

// Create a reactive reference for `selectedDate`. It's initialized with undefined because no initial value is provided.
const selectedDate = ref();
</script>


<template>
  <v-app>
    <v-container>

      <p>hola</p>
      <v-menu v-model="isMenuOpen" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-text-field
            label="Selected date"
            :model-value="selectedDate"
            readonly
            v-bind="props"
          ></v-text-field>
        </template>
        <v-date-picker v-model="selectedDate"></v-date-picker>
      </v-menu>
    </v-container>
  </v-app>
</template>

