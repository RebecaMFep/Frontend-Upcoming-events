
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import dayjs from 'dayjs'
// import DayJsAdapter from '@date-io/dayjs'


const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  // adapter: new DayJsAdapter(dayjs),
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')






