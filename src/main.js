import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvAlert from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvAlert)
app.component('TvDemo', TvDemo)
app.mount('#tv-alert')
