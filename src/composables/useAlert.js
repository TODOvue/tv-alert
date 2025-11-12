import { ref } from 'vue'
const alertsRef = ref([])
let uid = 0
function now(){ return Date.now() }
function clearTimer(item){
  if (item.timer){
    clearInterval(item.timer)
    item.timer = null
  }
}
function removeAlert(id){
  const idx = alertsRef.value.findIndex(a => a.id === id)
  if (idx !== -1){
    clearTimer(alertsRef.value[idx])
    alertsRef.value.splice(idx, 1)
  }
}
function startTimer(item){
  clearTimer(item)
  if (item.duration <= 0) return
  item.endsAt = now() + item.remaining
  item.paused = false
  item.timer = setInterval(() => {
    const t = item.endsAt - now()
    item.remaining = Math.max(0, t)
    item.progress = item.duration === 0 ? 1 : 1 - (item.remaining / item.duration)
    if (item.remaining <= 0){
      removeAlert(item.id)
    }
  }, 100)
}
export function useAlert(){
  function addAlert(options){
    const {
      message = '',
      type = 'info',
      position = 'top-right',
      duration = 4000,
      showClose = true,
      pauseOnHover = true,
      showProgress = true
    } = options || {}
    const id = ++uid
    const item = {
      id,
      message,
      type,
      position,
      duration,
      showClose,
      pauseOnHover,
      showProgress,
      timer: null,
      createdAt: now(),
      remaining: duration,
      endsAt: null,
      paused: false,
      progress: 0
    }
    alertsRef.value.unshift(item)
    startTimer(alertsRef.value[0])
    return id
  }
  function pauseAlert(id){
    const item = alertsRef.value.find(a => a.id === id)
    if (!item) return
    if (!item.pauseOnHover) return
    if (item.paused) return
    item.paused = true
    clearTimer(item)
    if (item.duration > 0){
      item.progress = item.duration === 0 ? 1 : 1 - (item.remaining / item.duration)
    }
  }
  function resumeAlert(id){
    const item = alertsRef.value.find(a => a.id === id)
    if (!item) return
    if (!item.pauseOnHover) return
    if (!item.paused) return
    startTimer(item)
  }
  function clearAll(){
    alertsRef.value.forEach(clearTimer)
    alertsRef.value = []
  }
  function api(){
    return {
      open: addAlert,
      info: (message, opts={}) => addAlert({ message, type: 'info', ...opts }),
      success: (message, opts={}) => addAlert({ message, type: 'success', ...opts }),
      warning: (message, opts={}) => addAlert({ message, type: 'warning', ...opts }),
      error: (message, opts={}) => addAlert({ message, type: 'error', ...opts })
    }
  }
  return {
    alerts: alertsRef,
    addAlert,
    removeAlert,
    pauseAlert,
    resumeAlert,
    clearAll,
    api
  }
}
