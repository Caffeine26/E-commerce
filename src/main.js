import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ProductDescription from './components/ProductDescription.vue'
import ProductDetails from './components/ProductDetails.vue'
import Review from './components/Review.vue'

const app = createApp(App)

app.component('product-description', ProductDescription)
app.component('product-details', ProductDetails)
app.component('review', Review)
app.use(createPinia())
app.use(router)

app.mount('#app')
