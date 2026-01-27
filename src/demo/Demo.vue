<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js';
import { TvDemo } from '@todovue/tv-demo';

const TvAlert = defineAsyncComponent(/* webpackChunkName: "tvAlert" */() => import('../components/TvAlertDemo.vue'))
</script>

<template>
  <TvDemo
    :component="TvAlert"
    :variants="demos"
    component-name="TvAlert"
    npm-install="@todovue/tv-alert"
    source-link="https://github.com/TODOvue/tv-alert"
    url-clone="https://github.com/TODOvue/tv-alert.git"
    version="1.2.1"
  />
</template>
