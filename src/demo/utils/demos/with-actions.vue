<template>
  <TvAlert />

  <TvButton @click="showActions">
    Show Actions
  </TvButton>
</template>

<script setup>
import { TvButton } from '@todovue/tv-button'
import { TvAlert, useAlert } from '@todovue/tv-alert'
import '@todovue/tv-alert/style.css'

const { api } = useAlert()
const alert = api()

function showActions() {
  alert.info('Update available', {
    position: 'top-right',
    duration: 8000,
    actions: [
      { label: 'Update', handler: (item) => console.log('Update clicked', item) },
      { label: 'Later', handler: (item) => alert.removeAlert(item.id) }
    ]
  })
}
</script>
