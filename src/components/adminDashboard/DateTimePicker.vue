<script setup>
    import { ref } from 'vue';
    
    const dropdownOpen = ref(false);
    const meridiam = ref('AM');
    const displayDate = ref('');
    const dateModel = ref('');
    const timeModel = ref('');
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "June", "Jul",
      "Aug", "Sept", "Oct",
      "Nov", "Dec"
    ];
    
    const formatDate = (date) => {
      if (!date) return '';
    
      const [year, month, day] = date.split('-')
      let monthName = monthNames[parseInt(month)]
      return `${monthName} ${day}, ${year}`;
    };
    
    const confirm = () => {
      onUpdateDate();
      dropdownOpen.value = false;
    };
    
    const onUpdateDate = () => {
      if (!dateModel.value || !timeModel.value) return false;
    
      let selectedTime = timeModel.value + ' ' + meridiam.value;
      displayDate.value = formatDate(dateModel.value) + ' ' + selectedTime;
      emit('update:modelValue', dateModel.value + ' ' + selectedTime);
    };
    
    // Set the current date and time as default value
    const d = new Date();
    const currentHour = d.getHours() % 12; // AM,PM format
    const minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    const currentTime = currentHour + ':' + minutes;
    timeModel.value = currentTime;
    dateModel.value = d.toISOString().substr(0, 10);
    
    if (d.getHours() >= 12) {
      meridiam.value = 'PM';
    }
    </script>


<template>

    <div>
        <v-menu
            ref="menu"
            v-model="dropdownOpen"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="model"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="560px"
            min-width="560px">
            <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="displayDate"
                    label="Date Time"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                ></v-text-field>
            </template>

           <div class="v-date-time-widget-container">
                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <v-date-picker 
                            v-model="dateModel"
                            width="240"
                            color="primary"></v-date-picker>
                    
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-btn small 
                          fab
                          :color="meridiam === 'AM' ? 'primary' : 'darkgray'" 
                          class="btn-am" @click="meridiam='AM'">AM</v-btn>
                        
                        <v-btn 
                              fab
                             small
                             :color="meridiam === 'PM' ? 'primary' : 'darkgray'" 
                              class="btn-pm"
                              @click="meridiam='PM'">PM</v-btn>
                        
                        <v-time-picker 
                            v-if="dropdownOpen" 
                            v-model="timeModel" 
                            color="primary"
                            width="240"
                            :no-title="true"></v-time-picker>

                        <h3 class="text-xs-center">{{ currentSelection }}</h3>
                    </v-flex>

                    <v-flex xs12 class="text-xs-center">
                        <v-btn small @click="dropdownOpen = false" color="secondary">Cancel</v-btn>
                        <v-btn small @click="confirm()" color="primary">Ok</v-btn>
                    </v-flex>
                </v-layout>
            </div>
        </v-menu>
    </div>
</template>
