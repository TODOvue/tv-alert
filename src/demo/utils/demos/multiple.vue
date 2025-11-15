<template>
  <TvAlert />

  <TvButton @click="showMultiple">
    Show Multiple
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showMultiple() {
  alert.info('Processing request...', {
    position: 'top-right',
    duration: 3000
  })

  setTimeout(() => {
    alert.success('Data saved successfully', {
      position: 'top-right',
      duration: 4000
    })
  }, 500)

  setTimeout(() => {
    alert.warning('Consider reviewing the settings', {
      position: 'top-right',
      duration: 5000
    })
  }, 1000)
}
</script>

