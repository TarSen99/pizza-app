import '@/style/index.scss' // global css

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/store'

import { LayoutPlugin} from 'bootstrap-vue'
import routes from '@/router/index.js'
import BreakpointHelper from '@/plugins/breakpoint'
import ScrollHelper from '@/plugins/scroll_helper'
import EventBus from '@/plugins/event_bus'

import header_space from '@/directives/header_space'
import click_outside from '@/directives/click_outside';

Vue.use(BreakpointHelper)
Vue.use(ScrollHelper)
Vue.use(VueRouter)
Vue.use(LayoutPlugin)
Vue.use(EventBus)

Vue.directive('header-space', header_space)
Vue.directive('click-outside', click_outside)

Vue.prototype.$oStore = Vue.observable({
  isScrolled: false
})

Vue.config.productionTip = false


const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
