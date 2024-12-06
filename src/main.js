import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ProductDescription from './components/ProductDescription.vue'

const app = createApp(App)

app.component('product-description', ProductDescription)

app.use(createPinia())
app.use(router)

app.mount('#app')
