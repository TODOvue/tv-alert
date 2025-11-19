import TvAlert from './components/TvAlert.vue'
import { useAlert } from './composables/useAlert.js'
import './style.scss'

(TvAlert as any).install = (app: any) => {
  app.component('TvAlert', TvAlert)
};

export const TvAlertPlugin = {
  install(app: any) {
    app.component('TvAlert', TvAlert)
  }
}

export { TvAlert, useAlert }
export default TvAlert
