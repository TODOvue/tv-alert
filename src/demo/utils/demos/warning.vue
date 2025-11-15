<template>
  <TvAlert />

  <TvButton @click="showWarning">
    Show Warning
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showWarning() {
  alert.warning('Warning: please verify the entered data', {
    position: 'top-center',
    duration: 6000
  })
}
</script>

