import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'


const app = createApp(App)
app.use(VueCollapsiblePanel).mount('#app')

//import 'lightgallery/scss/lightgallery.scss';
import './assets/css/hamburger.scss'
import './assets/css/icon.css'
import './assets/css/font.css'


import './assets/css/main.scss'
import './assets/css/responsive.scss'












createApp(App).use(router).use(router).mount('#app')
