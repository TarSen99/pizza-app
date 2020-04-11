<template>
  <div class="home-header" v-header-space>
    <div class="home-header-content">
      <h1 class="cursive">
        Смачна піца з доставкою
      </h1>

      <transparent-button class="order-button" variant="orange" @click="scroll">
        Замовити
      </transparent-button>
    </div>
  </div>
</template>

<script>
import TransparentButton from '@/components/TransparentButton.vue'

export default {
  name: 'HomeHeader',
  components: {
    TransparentButton
  },
  methods: {
    scroll() {
      window.scroll('#pizzas-list')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-header-content {
      z-index: 2;
      position: relative;
       display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-direction: column;
  }

  .order-button {
    margin-top: 50px;
    border-radius: 30px !important;
    font-weight: 500;
  }

  .home-header {
    width: 100%;
    height: 80vh;
    background-image: url('~@/assets/home/banner_desktop.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background-attachment: fixed;

    &::before {
      position: absolute;
      display: block;
      content: '';
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
    }

    h1 {
      color: #fff;
      max-width: 700px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1200px) {
    .home-header {
      h1 {
        font-size: 30px;
      }
    }
  }
</style>