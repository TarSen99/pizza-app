<template>
  <div>
    <main-header />
    <bucket-button />
    <slot />

    <main-footer />
  </div>
</template>

<script>
import MainHeader from '@/layouts/components/Header.vue'
import MainFooter from '@/layouts/components/Footer.vue'
import BucketButton from '@/layouts/components/BucketButton.vue'

export default {
  name: 'MainLayout',
  components: {
    MainHeader,
    BucketButton,
    MainFooter
  }
}
</script>