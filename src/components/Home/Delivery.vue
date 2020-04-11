<template>
  <div class="delivery" id="delivery">
      <b-container>
        <b-row>
          <b-col>
              <h1>Доставка:</h1>
            <ul>
              <li>
                Самовивіз - <span>Безкоштовно</span>
              </li>
              <li>
                смт. Букачівці - <span>20грн</span>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'Delivery'
}
</script>

<style lang="scss" scoped>

  hr {
    border-width: 2px;
    margin: 0;
  }

  .delivery {
    padding: 50px 0;
    background: #fbfbfb;

    h1 {
      color: #4d5772;
      text-align: center;
    }

    ul {
      font-size: 20px;
      margin-top: 40px;

      span {
        color: #ff7a00;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 1200px) {
     .delivery {
       padding: 20px 0;

       h1 {
         font-size: 26px;
       }

       ul {
         font-size: 16px;
       }
     }
  }
</style>