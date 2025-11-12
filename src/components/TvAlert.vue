<script setup>
import { useAlert } from '../composables/useAlert.js'

const props = defineProps({
  max: {
    type: Number,
    default: 8
  }
})

const positions = [
  'top-right',
  'top-center',
  'top-left',
  'bottom-right',
  'bottom-center',
  'bottom-left'
]

const {
  alerts,
  removeAlert,
  pauseAlert,
  resumeAlert
} = useAlert()

const getStackedAlerts = (position) => {
  const list = alerts.value.filter(a => a.position === position)
  return list.slice(0, props.max)
}

const getPositionClass = (position) => `tv-alert-container--${position}`
const getTransitionName = (position) => `tv-slide-${position.includes('bottom') ? 'up' : 'down'}`

const close = (id) => {
  removeAlert(id)
}
const pause = (id) => {
  pauseAlert(id)
}
const resume = (id) => {
  resumeAlert(id)
}
</script>

<template>
  <div
    v-for="position in positions"
    :key="position"
    class="tv-alert-container"
    :class="getPositionClass(position)"
    aria-live="polite"
    aria-atomic="false"
  >
    <TransitionGroup :name="getTransitionName(position)" tag="div" class="tv-alert-stack">
      <div
        v-for="item in getStackedAlerts(position)"
        :key="item.id"
        class="tv-alert"
        :class="[`tv-alert--${item.type}`, { 'tv-alert--paused': item.paused }]"
        role="status"
        @mouseenter="pause(item.id)"
        @mouseleave="resume(item.id)"
      >
        <div class="tv-alert__content">
          <slot name="icon" :type="item.type"><span class="tv-alert__dot"/></slot>
          <div class="tv-alert__message">{{ item.message }}</div>
          <button
            v-if="item.showClose"
            class="tv-alert__close"
            type="button"
            @click="close(item.id)"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        <div v-if="item.showProgress" class="tv-alert__progress">
          <div class="tv-alert__progress-bar" :style="{ width: item.progress * 100 + '%' }" />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss';
</style>
