<template>
  <div>
      <ul>
        <li 
          v-for="(item, index) in items"
          :key="index"
        >
          <a @click.prevent="item.action()">
            {{ item.title }}
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
const MENU_ITEMS = [
  {
    title: 'Замовити',
    link: '/',
    action: () => window.scroll('#pizzas-list')
  },
  {
    title: 'Доставка',
    link: '/',
    action: () => window.scroll('#delivery')
  },
  {
    title: 'Головна',
    link: '/',
    action: () => window.scroll(-100)
  }
]

export default {
  name: 'Menu',
  data() {
    return {
      items: MENU_ITEMS
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      padding: 0;
      margin: 0;
      margin: 0 10px;
      color: $dark;
      font-weight: 500;
      
      a {
        color: $dark;
        text-decoration: none;
        display: block;
        position: relative;
        padding-bottom: 2px;
        cursor: pointer;
        &:after {
          display: block;
          content: '';
          background: $orange;
          height: 2px;
          width: 0%;
          transition: all 0.2s;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        &:hover {
          &:after {
              width: 100%;
          }
        }
      }
    }
  }
</style>