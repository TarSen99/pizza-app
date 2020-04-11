<template>
  <section id="products-section" class="products-section">
    <h1>Список ваших товарів:</h1>

    <table>
      <tr>
        <th>
          
        </th>
        <th colspan="1">
          Кількість
        </th>
        <th colspan="1">
          Ціна за одиницю
        </th>
        <th colspan="1">
          Ціна за всі
        </th>
      </tr>

      <tr v-for="(product, index) in products" :key="index">
        <td>
          <div class="product-title">
            <div class="img-container">
              <img 
                :src="`${getImgUrl(`home/pizza/${product.img}`)}`"
                alt=""
              >
            </div>

            <p>
                {{product.title}}
            </p>
          </div>
        </td>

        <td>
          {{product.count}}
        </td>
        <td>
          {{product.price}}
        </td>
        <td>
          {{(product.price * product.count) | fixed}}
        </td>
      </tr>
    </table>

    <p class="bottom-text delivery">
      <span class="delivery-select">
        Доставка: 

        <b-form-select 
        :options="deliveryOptions" 
        v-model="deliveryValue">
        </b-form-select>
      </span>

      <span>
        {{ deliveryPrice }}грн.
      </span>
    </p>
    
    <p class="bottom-text total">
      <span>
        Сума до сплати: 
      </span>

      <span>
        {{ total }}грн.
      </span>
    </p>

  </section>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {BFormSelect} from 'bootstrap-vue'

const deliveryOptions = [
  {
    value: null,
    text: 'Виберіть спосіб доставки',
  },
  {
    value: 1,
    text: 'Самовивіз',
  },
  {
    value: 2,
    text: 'смт. Букачівці',
  },
]

export default {
  name: 'YourProductsList',
  components: {
    BFormSelect
  },
  data() {
    return {
      deliveryOptions: deliveryOptions,
      deliveryValue: null
    }
  },  
  filters: {
    fixed(v) {
      return v.toFixed(2)
    }
  },
  computed: {
    ...mapState('client', {
      products: state => state.products
    }),
    deliveryPrice() {
      if(this.deliveryValue === 2) {
        return 20
      }

      return 0
    },
    total() {
      const productsPrice = this.products.reduce((prev, curr) => {
        const currProductPrice = curr.count * curr.price;

        return prev + currProductPrice
      }, 0)

      return (this.deliveryPrice + productsPrice).toFixed(2)
    }
  },
  methods: {
    getImgUrl(pic) {
     return require('@/assets/'+pic)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/vars.scss';    

  h1 {
    text-align: left;
    color: #4d5772;
  }

  .products-section {
    padding: 100px 0;
  }

  table {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }

  .img-container {
    width: 50px;
  }

  .name {
    text-align: left;
  }

  .product-title {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      margin-left: 10px;
    }
  }

  .bottom-text {
    display: flex;
    justify-content: space-between;

    &:first-of-type {
      margin-top: 40px;
    }


    span {
      color: #1a1e29;
      font-weight: 900;
      font-size: 20px;

      &:last-child {
        color: $orange;
      }
    }
  }

  .delivery-select {
    display: flex;
    align-items: center;
    
    /deep/ select {
      margin-left: 15px;
    }
  }

  td {
    padding-top: 15px;
  }
</style>