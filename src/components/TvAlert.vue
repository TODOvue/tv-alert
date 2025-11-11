<script setup>
import { computed } from 'vue'
import { useAlert } from '../composables/useAlert.js'

const props = defineProps({
  position: {
    type: String,
    default: 'top-right',
    validator: v => [
      'top-right',
      'top-left',
      'bottom-right',
      'bottom-left',
      'top-center',
      'bottom-center'
    ].includes(v)
  },
  max: {
    type: Number,
    default: 8
  }
})

const {
  alerts,
  removeAlert,
  pauseAlert,
  resumeAlert
} = useAlert()

const stackedAlerts = computed(() => {
  const list = alerts.value.filter(a => a.position === props.position)
  return list.slice(0, props.max)
})

const positionClass = computed(() => `tv-alert-container--${props.position}`)
const transitionName = computed(() => `tv-slide-${props.position.includes('bottom') ? 'up' : 'down'}`)

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
    class="tv-alert-container"
    :class="positionClass"
    aria-live="polite"
    aria-atomic="false"
  >
    <TransitionGroup :name="transitionName" tag="div" class="tv-alert-stack">
      <div
        v-for="item in stackedAlerts"
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
