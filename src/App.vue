<template>
  <div id="app">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import {scrollToPos} from '@/helpers/scroll-to.js'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  created() {
    window.scroll = scrollToPos;
  }
}
</script>

<style lang="scss">
@import '@/style/font.scss';
body {
  margin: 0;
  padding: 0;

  * {
      box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #000;
}

.cursive {
  font-family: 'Pacifico', cursive;
}
</style>
