import type { App, Plugin } from 'vue'
import _TvAlert from './components/TvAlert.vue'
import { useAlert } from './composables/useAlert.js'
import './style.scss'

const TvAlert = _TvAlert as typeof _TvAlert & Plugin;
TvAlert.install = (app: App) => {
  app.component('TvAlert', TvAlert)
};

export { TvAlert, useAlert }

export const TvAlertPlugin: Plugin = {
  install: TvAlert.install
};
export default TvAlert;

declare module 'vue' {
  export interface GlobalComponents {
    TvAlert: typeof TvAlert;
  }
}

