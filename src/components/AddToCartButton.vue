<template>
  <button @click="onAddToCartBtnClick(item)" class="button is-primary">Add to cart</button>
</template>

<script>
import router from '@/router';
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'AddToCartButton',
  props: {
    item: Object,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.authAccount.isLogged,
    }),
  },
  methods: {
    onAddToCartBtnClick(item) {
      if (!this.isLogged) {
        router.push({ name: 'SignInPage' });
      } else {
        store.commit('product/addToCart', item);
        store.commit('showModal/showAddToCartSuccess', { productName: item.title, active: true });
      }
    },
  },
};
</script>

<style scoped>

</style>
