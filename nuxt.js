import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-alert',
    configKey: 'tvAlert'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-alert/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
