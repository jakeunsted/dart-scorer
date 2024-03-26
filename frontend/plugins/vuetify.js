import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      dark: true,
      defaultTheme: 'dark',
      themes: {
        dark: {
          primary: '#292929',
        },
      },
    },
    components,
    directives,
  })
  app.vueApp.use(vuetify)
})
