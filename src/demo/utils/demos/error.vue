<template>
  <TvAlert />

  <TvButton @click="showError">
    Show Error
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'

const { api } = useAlert()
const alert = api()

function showError() {
  alert.error('Error: the operation could not be completed', {
    position: 'bottom-right',
    duration: 7000
  })
}
</script>

