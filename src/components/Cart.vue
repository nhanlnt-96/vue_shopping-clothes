<template>
  <div v-if="cartActive" class="modal pt-4 pb-4 is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cart</p>
        <button id="close-cart" class="delete" aria-label="close"
                @click="onCloseCartModal()"></button>
      </header>
      <section class="modal-card-body cart-container">
        <p v-if="noData">No product is selected.</p>
        <div :key="item.id" v-for="item in allProducts" class="card card-custom">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.image" :alt="item.title">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ truncateTitle(item.title) }}</p>
                <p class="subtitle is-6">Price: ${{ item.price }} - Quantity: {{
                    item.quantity
                  }}</p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" @click="onIncreaseProduct(item)">+</a>
            <a class="card-footer-item" @click="onDecreaseProduct(item)">-</a>
            <a class="card-footer-item has-text-danger"
               @click="onDeleteProductBtnClick(item)">Remove</a>
          </footer>
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
import store from '../store';

export default {
  name: 'Cart',
  computed: {
    ...mapState({
      allProducts: (state) => state.product.products.filter((val) => val.quantity >= 1),
      cartActive: (state) => state.showModal.showCart,
    }),
    cartTotal() {
      const result = this.allProducts.reduce((pre, cur) => (pre + cur.price) * cur.quantity, 0);
      return Math.round((result + Number.EPSILON) * 100) / 100;
    },
    noData() {
      if (this.allProducts.length <= 0) {
        return true;
      }
      return false;
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
    onDeleteProductBtnClick(item) {
      const confirm = window.confirm(`Are you sure you want to remove all ${item.title}?`); // eslint-disable-line no-alert
      if (confirm) {
        store.dispatch('product/removeProductFromCartAction', item.id);
      }
    },
    onCloseCartModal() {
      store.commit('showModal/showCart');
    },
    onIncreaseProduct(item) {
      store.commit('product/addToCart', item);
    },
    onDecreaseProduct(item) {
      if (item.quantity > 1) {
        store.commit('product/decreaseProduct', item);
      } else {
        const confirm = window.confirm(`Are you sure you want to remove ${item.title}?`); // eslint-disable-line no-alert
        if (confirm) {
          store.commit('product/decreaseProduct', item);
        }
      }
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

.card-custom:not(:last-child) {
  margin-bottom: 10px;
}
</style>
