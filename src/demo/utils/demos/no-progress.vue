<template>
  <TvAlert />

  <TvButton @click="showNoProgress">
    No Progress
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'

const { api } = useAlert()
const alert = api()

function showNoProgress() {
  alert.warning('This alert does not display a progress bar', {
    position: 'top-right',
    duration: 4000,
    showProgress: false
  })
}
</script>

