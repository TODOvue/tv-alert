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
          <slot name="icon" :type="item.type">
            <span v-if="item.customIcon" class="tv-alert__icon" v-html="item.customIcon"></span>
            <svg v-else-if="item.type === 'success'" class="tv-alert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
            <svg v-else-if="item.type === 'error'" class="tv-alert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
            <svg v-else-if="item.type === 'warning'" class="tv-alert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16V18H13V16H12ZM12 7V14H13V7H12Z"></path></svg>
            <svg v-else-if="item.type === 'info'" class="tv-alert__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5V10H11V11H12V17H11V18H14V17H13V11H13.5V10.5H12ZM12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5Z"></path></svg>
            <span v-else class="tv-alert__dot"/>
          </slot>
          
          <div class="tv-alert__body">
            <div v-if="item.title" class="tv-alert__title">{{ item.title }}</div>
            <div v-if="item.allowHtml" class="tv-alert__message" v-html="item.message"></div>
            <div v-else class="tv-alert__message">{{ item.message }}</div>

            <div v-if="item.actions && item.actions.length > 0" class="tv-alert__actions">
              <button 
                v-for="(action, index) in item.actions" 
                :key="index"
                class="tv-alert__action-btn"
                @click="action.handler(item)"
              >
                {{ action.label }}
              </button>
            </div>
          </div>

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

<style></style>
