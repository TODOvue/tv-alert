<script setup>
import {defineAsyncComponent} from 'vue'
import { TvButton } from '@todovue/tv-button'
const TvAlert = defineAsyncComponent(/* webpackChunkName: "tvAlert" */() => import('../components/TvAlert.vue'))
import { useAlert } from '../composables/useAlert.js'

const props = defineProps({
  buttonConfig: {
    type: Object,
    default: () => ({
      variant: 'info',
      label: 'Click me'
    })
  },
  alertConfig: {
    type: Object,
    default: () => ({
      message: 'This is a default alert message!',
      type: 'info',
      position: 'top-right',
      duration: 4000
    })
  },
  multipleAlerts: {
    type: Array,
    default: () => []
  }
})

const { api } = useAlert()
const alert = api()

function handleClick() {
  if (props.multipleAlerts && props.multipleAlerts.length > 0) {
    props.multipleAlerts.forEach((config, index) => {
      setTimeout(() => {
        alert[config.type](config.message, {
          position: config.position || 'top-right',
          duration: config.duration || 4000,
          pauseOnHover: config.pauseOnHover !== undefined ? config.pauseOnHover : true,
          showProgress: config.showProgress !== undefined ? config.showProgress : true,
          showClose: config.showClose !== undefined ? config.showClose : true
        })
      }, config.delay || index * 500)
    })
  } else {
    const { message, type, position, duration, pauseOnHover, showProgress, showClose } = props.alertConfig
    alert[type](message, {
      position: position || 'top-right',
      duration: duration || 4000,
      pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
      showProgress: showProgress !== undefined ? showProgress : true,
      showClose: showClose !== undefined ? showClose : true
    })
  }
}
</script>

<template>
  <TvButton
    rounded
    :variant="buttonConfig.variant"
    @click="handleClick"
  >
    {{ buttonConfig.label }}
  </TvButton>

  <TvAlert />
</template>

