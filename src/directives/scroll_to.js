import { scrollTo } from './../helpers'

const handleClick = e => {
  e.preventDefault();
  binderFuncWithId()
};

let binderFuncWithId;

export default {
  bind(el, binding, vnode) {
    const elToScrollId = binding.arg
    if (!elToScrollId) {
      return
    }

    binderFuncWithId = scrollTo.bind(null, elToScrollId)
    el.addEventListener('click', handleClick)
  },
  unbind(el) {
    el.removeEventListener('click', handleClick)
  }
}
