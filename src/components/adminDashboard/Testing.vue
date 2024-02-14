<script setup>
  import { ref, computed } from 'vue';
  import { useForm } from 'vee-validate';
  import format from 'date-fns/format';
//   import db from '@/fb';
  
  // Define reactive state
  const title = ref('');
  const content = ref('');
  const due = ref(null);
  const menu = ref(false);
  const loading = ref(false);
  const dialog = ref(false);
  
  // Define validation rules
  const inputRules = [
    value => !!value || 'This field is required',
    value => (value && value.length >=  3) || 'Minimum length is  3 characters'
  ];
  
  // Computed property for formatted date
  const formattedDate = computed(() => {
    return due.value ? format(due.value, 'Do MMM YYYY') : '';
  });
  
  // Form submission method
  async function submit() {
    if(await validate()) { // Assuming you have a validate method using vee-validate
      loading.value = true;
      const project = {  
        title: title.value,
        content: content.value,
        due: formattedDate.value,
        person: 'The Net Ninja',
        status: 'ongoing'
      };
      await db.collection('projects').add(project);
      loading.value = false;
      dialog.value = false;
      emit('projectAdded'); // Emit event if needed
    }
  }
  
  // Validation logic with vee-validate
  const { validate } = useForm();
  </script>

<template>
    <v-dialog max-width="600px" v-model="dialog" persistent>
      <template #activator="{ on, attrs }">
        <v-btn text color="success" v-bind="attrs" v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a New Project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field v-model="title" label="Title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea v-model="content" label="Information" prepend-icon="edit" :rules="inputRules"></v-textarea>
  
            <v-menu v-model="menu" :close-on-content-click="false">
              <template #activator="{ on, attrs }">
                <v-text-field v-bind="attrs" v-on="on" :rules="inputRules"
                  :value="formattedDate" clearable label="Due date" prepend-icon="date_range">
                </v-text-field>
              </template>
              <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
            </v-menu>
  
            <v-spacer></v-spacer>
  
            <v-btn type="submit" color="success" class="mx-0 mt-3" :loading="loading" @click="submit">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  