import { ref, reactive , computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useEventStore = defineStore('event', () => {

  const events = reactive([])
  const isLoading = ref(false)

  const getEvents = async () => {

    const uri = import.meta.env.VITE_APP_API_ENDPOINT
    
    try {
      isLoading.value = true

      const options = {
        baseURL: uri
      }

      const response = await axios.get('/events', options)
      const data = await response.data
      Object.assign(events, data)
      isLoading.value = false
    } catch (error) {
      throw new Error('Error Loading API: ' + error)
    }

  
  }

  return { events, getEvents }
})
