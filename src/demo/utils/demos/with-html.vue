<template>
  <TvAlert />

  <TvButton @click="showHtml">
    Show HTML
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-alert'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showHtml() {
  alert.warning('Please review the <b>Terms of Service</b> before proceeding.', {
    position: 'top-right',
    duration: 5000,
    allowHtml: true
  })
}
</script>
