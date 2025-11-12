<template>
  <TvAlert />

  <TvButton @click="showNoClose">
    No Close
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'

const { api } = useAlert()
const alert = api()

function showNoClose() {
  alert.error('This alert has no close button', {
    position: 'top-right',
    duration: 4000,
    showClose: false
  })
}
</script>

