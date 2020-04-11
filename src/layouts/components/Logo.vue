<template>
  <div class="logo-container">
    <span class="bottom cursive">П<span class="orange">і</span>ца</span>
    <span class="cursive top">
      Букачі<span class="orange">в</span>ська
    </span>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
  @import '@/style/vars.scss';

  .top {
    font-size: 26px;
    color: $dark;
    // line-height: 1px;
  }

  .bottom {
    color: $dark;
    line-height: 35px;
    font-size: 40px;
  }

  .orange {
    color: $orange;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    transition: all 0.2s;
    align-items: center;
  }

  @media screen and (max-width: 1200px){
    .bottom {
      font-size: 35px;
      line-height: 30px;
    }

    .top {
      font-size: 22px;
    }
  }
</style>