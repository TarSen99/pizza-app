<template>
  <div>
    <p class="order-text">
      Для оформлення вашого замовлення зателефонуйте за цим номером <br />

      <a href="tel:380969045349">+ 38 (096) 904 53 49</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OrderText'
}
</script>

<style lang="scss" scoped>
  @import '@/style/vars.scss';    

  .order-text {
    text-align: center;
    margin-top: 40px;
    color: $dark;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 40px;

    a {
      color: $orange;
    }
  }

  @media screen and (max-width: 1200px){
    .order-text {
      font-size: 16px;
    }
  }
</style>