<template>
  <div v-if="cartActive" class="modal pt-4 pb-4 is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cart</p>
        <button class="delete" aria-label="close"
                @click="$store.commit('showCart/showCart')"></button>
      </header>
      <section class="modal-card-body cart-container">
        <div :key="item.id" v-for="item in allProducts" class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="item.image" :alt="item.title">
            </figure>
          </div>
          <div class="media-content">
            <p :title="item.title" class="title is-4">{{ truncateTitle(item.title) }}</p>
            <p class="subtitle is-6">${{ item.price }}</p>
          </div>
          <button class="button is-danger">
            <i class='bx bxs-trash-alt'></i>
          </button>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary">
          Checkout:
          <p class="has-text-weight-bold ml-2">${{ cartTotal }}</p>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState({
      allProducts: (state) => state.product.products,
      cartActive: (state) => state.showCart.showCart,
    }),
    cartTotal() {
      return this.allProducts.reduce((pre, cur) => pre + cur.price, 0);
    },
  },
  methods: {
    truncateTitle(title) {
      const ending = '...';
      const length = 30;
      if (title.length > length) {
        return title.substring(0, length - ending.length) + ending;
      }
      return title;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  .media-left {
    figure {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 70%;
      }
    }
  }
}
</style>
