<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js';

const TvAlert = defineAsyncComponent(/* webpackChunkName: "tvAlert" */() => import('../components/TvAlertDemo.vue'))
</script>

<template>
  <tv-demo
    :component="TvAlert"
    :variants="demos"
    nameComponent="TvAlert"
    npmInstall="@todovue/tv-alert"
    sourceLink="https://github.com/TODOvue/tv-alert"
    urlClone="https://github.com/TODOvue/tv-alert.git"
    version="1.0.1"
  />
</template>

<style scoped>

</style>
