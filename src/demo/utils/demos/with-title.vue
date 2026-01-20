<template>
  <TvAlert />

  <TvButton @click="showTitle">
    Show Title
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-alert'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showTitle() {
  alert.success('Operation completed successfully', {
    title: 'Well done!',
    position: 'top-right',
    duration: 4000
  })
}
</script>
