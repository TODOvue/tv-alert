import { createApp } from 'vue'
import TvAlert from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvAlert)
app.mount('#tv-alert')
