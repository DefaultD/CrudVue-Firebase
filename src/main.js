import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import router from './router'
import FirebaseVue from './firebase'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import Notifications from '@kyvg/vue3-notification'
const app = createApp(App)
app.use(Notifications)
app.config.globalProperties.$firebase = FirebaseVue
app.use(router).mount('#app')
app.component('EasyDataTable', Vue3EasyDataTable);