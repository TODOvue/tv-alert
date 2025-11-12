<template>
  <TvAlert />

  <TvButton @click="showSuccess">
    Show Success
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'

const { api } = useAlert()
const alert = api()

function showSuccess() {
  alert.success('Operation completed successfully!', {
    position: 'bottom-left',
    duration: 5000
  })
}
</script>

