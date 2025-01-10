import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ProductDescription from './components/ProductDescription.vue'
import ProductDetails from './components/ProductDetails.vue'
import Review from './components/Review.vue'
import UserDetails from './components/UserDetails.vue'
import SignupOptions from './components/SignupOptions.vue'
import Banner from './components/Banner.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('product-description', ProductDescription)
app.component('product-details', ProductDetails)
app.component('review', Review)
app.component('user-details', UserDetails)
app.component('signup-options', SignupOptions)
app.component('banner', Banner)

app.use(pinia)
app.use(router)

app.mount('#app')
