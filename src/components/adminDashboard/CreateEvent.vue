<script setup>
import { ref, computed } from 'vue';

const title = ref('');
const location = ref('');
const imageUrl = ref('');
const description = ref('');
const date = ref(new Date());
const time = ref(new Date());

const formIsValid = computed(() => {
  return title.value !== '' &&
    location.value !== '' &&
    imageUrl.value !== '' &&
    description.value !== '';
});

const submittableDateTime = computed(() => {
  const dateValue = new Date(date.value);
  if (typeof time.value === 'string') {
    let hours = time.value.match(/^(\d+)/)[1];
    const minutes = time.value.match(/:(\d+)/)[1];
    dateValue.setHours(hours);
    dateValue.setMinutes(minutes);
  } else {
    dateValue.setHours(time.value.getHours());
    dateValue.setMinutes(time.value.getMinutes());
  }
  return dateValue;
});

const onCreateMeetup = () => {
  if (!formIsValid.value) {
    return;
  }
  const meetupData = {
    title: title.value,
    location: location.value,
    imageUrl: imageUrl.value,
    description: description.value,
    date: submittableDateTime.value
  };
  // Assuming you have a store module or similar setup for dispatching actions
  store.dispatch('createMeetup', meetupData);
  // Assuming you have a router installed and configured
  router.push('/meetups');
};
</script>



<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose a Data & Time</h4>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{ date }}</p>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
              <p>{{ time }}</p>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
              {{ submittableDateTime }}
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

