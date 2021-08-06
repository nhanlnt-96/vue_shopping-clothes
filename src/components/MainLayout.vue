<template>
  <div class="container is-fluid p-0">
    <div class="header">
      <Header />
    </div>
    <div class="container is-fluid p-0">
      <router-view></router-view>
      <cart></cart>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'MainLayout',
  components: {
    Cart,
    Header,
  },
};
</script>

<style scoped>

</style>
