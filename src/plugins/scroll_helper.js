/*
import { debounce } from '@/helpers/index.js'
*/

function CheckScroll() {
  return {
    data() {
      return {
        scrollPosition: null,
        body: null
      }
    },
    computed: {
      scrolled() {
        return (this.scrollPosition && this.scrollPosition > 50) || (document.body && document.body.dataset.scrolled === 'scrolled')
      }
    },
    created() {
/*
      this.updateScroll = debounce(this.updateScroll, 50)
*/
      window.addEventListener('scroll', this.updateScroll);
    },
    beforeDestroy: function beforeDestroy() {
      if (typeof window === 'undefined') return
      window.removeEventListener('scroll', this.updateScroll)
    },

    methods: {
      updateScroll(val) {
        this.scrollPosition = typeof val === 'number' ? val : window.scrollY
      }
    }
  }
}

export default {
  install(Vue, additionalConstants = {}) {
    Vue.prototype.$checkScroll = new Vue({
      mixins: [CheckScroll()]
    })
  }
}
