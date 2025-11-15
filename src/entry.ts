import TvAlert from './components/TvAlert.vue'
import './style.scss'

(TvAlert as any).install = (app: any) => {
  app.component('TvAlert', TvAlert)
};

export const TvAlertPlugin = {
  install(app: any) {
    app.component('TvAlert', TvAlert)
  }
}

export { TvAlert }
export default TvAlert
