<template>
  <div class="pizza-item">
    <div class="img-container">
      <img 
        :src="`${getImgUrl(`home/pizza/${details.img}`)}`"
        alt=""
      >

      <div class="pizza-details">
        <span class="cursive">
          <span v-for="(product, index) in details.warehouse" :key="index">
            {{ product }} <br>
          </span>
        </span>
      </div>
    </div>

    <h4 class="title">{{details.title}}</h4>

    <div class="price">{{details.price}}грн.</div>

    <!-- <div class="buttons-section">
      <b-button class="bucket-button" @click="addProduct(details)">
        В КОРЗИНУ
      </b-button>
    </div> -->
  </div>
</template>

<script>
import {BButton} from 'bootstrap-vue'
import {mapMutations} from 'vuex'

export default {
  name: 'PizzaListItem',
  components: {
    BButton
  },
  props: {
    details: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapMutations('client', {
      addProduct: 'addProduct'
    }),
    getImgUrl(pic) {
     return require('@/assets/'+pic)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/vars.scss';    

  .pizza-details {
    opacity: 0;
    transition: all 0.2s;
    background: rgba(0,0,0,0.8);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    font-weight: 500;
    padding: 15px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .img-container {
    position: relative;
  }

  .buttons-section {
    position: absolute;
    width: 100%;
    bottom: -60px;
    opacity: 0;
    transition: opacity 0.2s, transform 0.5s;
    transform: translateY(20px);
  }

  .pizza-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    max-width: 235px;
    margin: auto;
    margin-bottom: 130px;
    position: relative;
    transition: all 0.2s;
    padding-bottom: 20px;

    &:hover {
      transform: scale(1.05);
      .pizza-details {
        opacity: 1;
      }

      .buttons-section {
        opacity: 1;
        transform: translateY(-15px);
      }
    }
  }

  .title {
    text-transform: uppercase;
    margin-top: 15px;
    font-weight: 900;
    font-size: 20px;
    color: #313131;
  }

  .price {
    color: $orange;
    font-weight: 500;
  }

  .bucket-button {
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    background: #4d5772;
    border-radius: 0px;
    padding: 10px 35px;
    border-color: transparent;
  }

  @media screen and (max-width: 1200px) {
    .pizza-item {
      margin-bottom: 50px;
      max-width: 200px;
    }

    .title {
      font-size: 18px;
    }

    .pizza-details {
      font-size: 16px;
    }
  }
</style>