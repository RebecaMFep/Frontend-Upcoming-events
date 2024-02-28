import { ref, reactive, computed } from 'vue'
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
      await Object.assign(events, data)
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
      const status = response.status

      if (status == 202) {
        await getEvents()
        return true
      }
    } catch (error) {
      console.error('Error Deleting Event:', error);
    }
  }

  const editEvent = async (id) => {
    const uri = import.meta.env.VITE_APP_API_ENDPOINT
    const options = {
      baseURL: uri,
      withCredentials: true,
    }

    
    try {
      const response = await axios.edit(`/events/${id}`, options)
      const status = response.status

      if (status == 202) {
        await editEvent()
        return true
      }
    } catch (error) {
      console.error('Error Modifying Event:', error);
    }}

  return { events, getEvents, deleteEvent, editEvent }
})
