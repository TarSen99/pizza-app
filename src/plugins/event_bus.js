export default {
  install(Vue) {
    Vue.prototype.$event_bus = new Vue()
  }
}
