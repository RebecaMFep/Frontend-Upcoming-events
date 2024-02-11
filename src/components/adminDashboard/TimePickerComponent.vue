<script>
    import { ref } from 'vue';
    
    export default {
      setup() {
        const e7 = ref(null);
    
        return {
          e7,
        };
      },
    };
    </script>
    
<template>

  <v-layout row wrap>
    <v-flex md12 lg4 lg-offset8>
      <v-time-picker v-model="e7" format="24hr"></v-time-picker>
    </v-flex>
  </v-layout>
  
</template>