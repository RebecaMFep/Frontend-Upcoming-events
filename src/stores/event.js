import { ref, reactive , computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useEventStore = defineStore('event', () => {

  const events = ref([])
  const isLoading = ref(false)

  const getEvents = async () => {

    const uri = import.meta.env.VITE_APP_API_ENDPOINT
    
    try {
      isLoading.value = true

      events.value = []
      const options = {
        baseURL: uri
      }

      const response = await axios.get('/events', options)
      const data = await response.data
      // await Object.assign(events, data)
      events.value = data
      console.log(events.value);
      isLoading.value = false
    } catch (error) {
      throw new Error('Error Loading API: ' + error)
    }

  }

  const deleteEvent = async (id) => {
    const uri = import.meta.env.VITE_APP_API_ENDPOINT
    const options = {
      baseURL: uri,
      withCredentials: true,
    }

    try {
      const response = await axios.delete(`/events/${id}`, options)
      const status = await response.status
      
      if (status === 200) {
        console.log(status);
        await getEvents()
      }
  } catch (error) {
    console.error('Error Deleting Event:', error);
  }
}

  return { events, getEvents, deleteEvent }
})
