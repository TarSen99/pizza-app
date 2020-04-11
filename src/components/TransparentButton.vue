<template>
  <b-button
    @click="$emit('click')" 
    :type="type" 
    :variant="variant"
    class="transparent-button"
    :class="$style[variant]"
   >
    <slot />
  </b-button>
</template>

<script>
import { BButton} from 'bootstrap-vue'

export default {
  name: 'TransparentButton',
  components: {
    BButton
  },
  props: {
    type: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/vars.scss';    

  .btn.transparent-button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 0px;
    padding: 10px 35px;

    &:hover, &:focus, &:active {
      background-color: #fff;
      color: #000;
      border-color: #000;
    }
}
</style>

<style lang="scss" module>
@import '@/style/vars.scss';    

  .dark {
    color: $dark !important;
    border-color: $dark !important;

    &:hover, &:focus, &:active {
      background-color: $dark !important;
      color: #fff !important;
    }
  }

  .orange {
    color: $orange !important;
    border-color: $orange !important;

    &:hover, &:focus, &:active {
      background-color: #ffffff21 !important;
    }
  }
</style>