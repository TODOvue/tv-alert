<template>
  <TvAlert />

  <TvButton @click="showNoPause">
    No Pause
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showNoPause() {
  alert.info('This alert does not pause when hovered', {
    position: 'top-right',
    duration: 4000,
    pauseOnHover: false
  })
}
</script>
