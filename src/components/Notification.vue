<template>
  <div class="notification is-primary add-to-cart-noti"
       :class="productName.active && 'noti-active'">
    <button class="delete" @click="$store.commit('showModal/showAddToCartSuccess','')"></button>
    Added <strong>{{ productName.productName }}</strong> to cart.
  </div>
</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'Notification',
  computed: {
    ...mapState({
      productName: (state) => state.showModal.showAddToCartMess,
    }),
  },
  updated() {
    if (this.productName.active) {
      setTimeout(() => store.commit('showModal/showAddToCartSuccess', ''), 5000);
    }
  },
};
</script>

<style lang="scss" scoped>
.add-to-cart-noti {
  position: fixed;
  top: 5%;
  right: -100%;
  width: 100%;
  margin-top: 10px;
  transition: .2s ease-in;
  z-index: 50;
}

.noti-active {
  right: 0;
}
</style>
