<template>
  <TvAlert />

  <TvButton @click="showTopLeft">
    Top Left
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showTopLeft() {
  alert.info('Alert in the top-left corner', {
    position: 'top-left',
    duration: 4000
  })
}
</script>

