import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import UserDetails from './components/UserDetail.vue'
import SignupOptions from './components/SignupOptions.vue'
import Banner from './components/Banner.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('user-details', UserDetails)
app.component('signup-options', SignupOptions)
app.component('banner', Banner)
app.mount('#app')
