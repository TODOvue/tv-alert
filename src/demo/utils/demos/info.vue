<template>
  <TvAlert />

  <TvButton @click="showInfo">
    Show Info
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showInfo() {
  alert.info('Important information about the system', {
    position: 'top-right',
    duration: 4000
  })
}
</script>

