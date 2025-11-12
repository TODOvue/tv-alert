<template>
  <TvAlert />

  <TvButton @click="showBottomCenter">
    Bottom Center
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-button'

const { api } = useAlert()
const alert = api()

function showBottomCenter() {
  alert.success('Alert centered at the bottom', {
    position: 'bottom-center',
    duration: 5000
  })
}
</script>

