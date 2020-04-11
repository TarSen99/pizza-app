const is_touch_device = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

const START_TOUCH_EVENT = is_touch_device() ? 'touchstart' : 'mousedown'

const toggle = event => event.stopPropagation();

const getEl = (id) => {
  return document.querySelector(`#${id}`)
}

const explitElements = (str) => {
  if(!str) {
    return
  }

  if(typeof str === 'string') {
    const el = getEl(str)
    if(!el) {
      console.log(`Element ${str} doesn't exist`)
      return
    }

    el.addEventListener(START_TOUCH_EVENT, toggle)
  }

  if(Array.isArray(str)) {
    str.forEach(item => {
      const el = getEl(item)
      if(!el) {
        console.log(`Element ${str} doesn't exist`)
        return
      }

      el.addEventListener(START_TOUCH_EVENT, toggle)
    })
  }
}

const removeListeners = (str) => {
  if(!str) {
    return
  }

  if(typeof str === 'string') {
    const el = getEl(str)
    if(!el) {
      console.log(`Element ${str} doesn't exist`)
      return
    }
    el.removeEventListener(START_TOUCH_EVENT, toggle)
  }

  if(Array.isArray(str)) {
    str.forEach(item => {
      const el = getEl(item)
      if(!el) {
        console.log(`Element ${str} doesn't exist`)
        return
      }
      el.removeEventListener(START_TOUCH_EVENT, toggle)
    })
  }
}

export default {
  inserted(el, binding, vnode) {
    el.addEventListener(START_TOUCH_EVENT, toggle)
    explitElements(binding.arg)
    document.body.addEventListener(START_TOUCH_EVENT, binding.value)
  },
  unbind(el, binding, vnode) {
    el.removeEventListener(START_TOUCH_EVENT, toggle)
    removeListeners(binding.arg)
    document.body.removeEventListener(START_TOUCH_EVENT, binding.value)
  },

}
