<script setup>
import { ref, defineExpose } from 'vue';
import format from 'date-fns/format';
import { createVuetify } from 'vuetify';
import { DayJsAdapter } from '@date-io/dayjs';

const title = ref('');
const content = ref('');
const due = ref(null);
const menu = ref(false);
const dialog = ref(false); // Variable para controlar la visibilidad del diálogo

const formattedDate = () => {
  return due.value ? format(due.value, 'Do MMM YYYY') : '';
};

const submit = () => {
  console.log(title.value, content.value);
};

// Exponer las propiedades reactivas para su uso en la plantilla
defineExpose({
  title,
  content,
  due,
  menu,
  dialog,
  formattedDate,
  submit
});

</script>

<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="success" v-bind="attrs" v-on="on">Add New Project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" label="Title" prepend-icon="folder"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="edit"></v-textarea>

          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-bind="attrs" v-on="on" :value="formattedDate()" clearable label="Due date" prepend-icon="date_range"></v-text-field>
            </template>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn text color="success" class="mx-0 mt-3" :loading="loading" @click="submit">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
