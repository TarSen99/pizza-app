<template>
    <div class="home-page">
      <home-header />

      <b-container class="pizzas-list" id="pizzas-list">
        <b-row>
          <b-col lg="3" v-for="(item, index) in items" :key="index">
            <pizza-list-item 
              :details="item"
            />
          </b-col>
        </b-row>
      </b-container>
      <hr v-if="products.length">

      <b-container v-if="products.length">
        <b-row>
          <b-col>
            <your-products-list />
          </b-col>
        </b-row>
      </b-container>

      <hr >

      <b-container>
        <b-row>
          <b-col>
            <order-text />
          </b-col>
        </b-row>
      </b-container>
      <hr >

      <delivery />
    </div>
  </template>

<script>
import HomeHeader from '@/components/Home/HomeHeader.vue'
import PizzaListItem from '@/components/Home/PizzaListItem.vue'
import YourProductsList from '@/components/Home/YourProductsList.vue'
import OrderText from '@/components/Home/OrderText.vue'
import Delivery from '@/components/Home/Delivery.vue'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    PizzaListItem,
    YourProductsList,
    OrderText,
    Delivery
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Неаполітана',
          price: '99.99',
          img: 'pizza.png',
          warehouse: [
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          ]
        },
        {
          id: 2,
          title: 'Неаполітана 2',
          price: '99.99',
          img: 'pizza.png',
          warehouse: [
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          ]
        },
        {
          id: 3,
          title: 'Неаполітана 3',
          price: '99.99',
          img: 'pizza.png',
          warehouse: [
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          ]
        },
        {
          id: 4,
          title: 'Неаполітана 4',
          price: '99.99',
          img: 'pizza.png',
          warehouse: [
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          'Продукт',
          ]
        },
      ]
    }
  },
  computed: {
    ...mapState('client', {
      products: state => state.products
    }),
  }
}
</script>

<style lang="scss" scoped>
  .pizzas-list {
    margin-top: 50px;
    padding-top: 100px; 
  }

  hr {
    border-width: 2px;
    margin: 0;
  }

  @media screen and (max-width: 1200px) {
    .pizzas-list {
      margin-top: 0;
      padding-top: 50px;
    }
  }
</style>