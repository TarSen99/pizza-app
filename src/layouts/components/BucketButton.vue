<template>
  <div 
  @click="scroll"
  class="bucket-button-container" 
  :class="{'bucket-button-container_actove': count}"
  >
    <button class="bucket-button">
      <img 
        svg-inline
        src="@/assets/home/basket.svg"
        alt=""
      >
    </button>

    <span class="counter">
      {{ count }}
    </span>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'BucketButton',
  computed: {
    ...mapState('client', {
      count: state => state.products.length
    })
  },
  methods: {
    scroll() {
      const element = document.querySelector('#products-section');
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .bucket-button-container {
    position: fixed;
    z-index: 10;
    opacity: 0;
    transition: all 0.5s;
    bottom: -20px;
    left: 30px;

    svg {
      width: 25px;
      height: auto;
      fill: #4d5772;

      * {
        fill: #4d5772;
      }
    }
  }

  .bucket-button {
    background: #fff;
    border: 3px solid #4d5772;
    outline: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 13px 3px rgba(0, 0, 0, 0.2);
  }

  @import '@/style/vars.scss';    

  .counter {
    color: $orange;
    display: block;
    position: absolute;
    z-index: 11;
    right: -10px;
    top: -5px;
    font-weight: 600;
    background: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #4d5772;
  }

  .bucket-button-container_actove {
    bottom: 30px;
    opacity: 1;
  }
</style>