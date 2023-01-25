import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import router from './router'
import FirebaseVue from './firebase'

const app = createApp(App)
app.config.globalProperties.$firebase = FirebaseVue
app.use(router).mount('#app')