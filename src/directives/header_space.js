let resizeTimeout;
let onResizeWithParams;

const onResize = (totalHeight, el) => {

  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    const currentElMargin = el.offsetTop

    el.style.marginTop = `${totalHeight}px`
  }, 200)
}

const handleOnResize = (header, el) => {
  return () => {
    onResize(header, el)
  }
}


export default {
  inserted(el, binding, vnode) {
    const header = document.querySelector('.main-header') || {offsetHeight: 0}
    const mobileNavbar = document.querySelector('#user-nav-bar-header-section')
    const completeAleart = document.querySelector('#complete-profile-container')
    const currentElMargin = el.offsetTop
    if(currentElMargin) {
      return
    }

    const totalHeight = header.offsetHeight + ((mobileNavbar && mobileNavbar.offsetHeight) || 0) + ((completeAleart && completeAleart.offsetHeight) || 0)
    onResizeWithParams = handleOnResize(totalHeight, el)
    window.addEventListener('resize', onResizeWithParams, { passive: true })
    el.style.marginTop = `${totalHeight}px`
  },
  unbind() {
    window.removeEventListener('resize', onResizeWithParams)
  },
}
