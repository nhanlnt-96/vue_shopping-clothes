<template>
  <div v-if="showProductDetail" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ truncateTitle(product.title) }}</p>
        <button class="delete" aria-label="close"
                @click="$store.commit('showModal/showProductDetail')"></button>
      </header>
      <section class="modal-card-body">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3 custom-image">
              <img :src="product.image" :alt="product.title">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ product.title }}</p>
                <p class="subtitle is-6">Price: {{ product.price }}</p>
              </div>
            </div>
            <div class="content">{{ product.description }}</div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <add-to-cart-button :item="product"></add-to-cart-button>
        <button class="button" @click="$store.commit('showModal/showProductDetail')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddToCartButton from './AddToCartButton.vue';

export default {
  name: 'ProductDetail',
  components: { AddToCartButton },
  computed: {
    ...mapState({
      product: (state) => state.product.productDetail,
      showProductDetail: (state) => state.showModal.showProductDetail,
    }),
  },
  methods: {
    truncateTitle(title) {
      const ending = '...';
      let length = 45;
      const deviceWidth = window.screen.width;
      if (deviceWidth < 768) {
        length = 30;
      }
      if (title.length > length) {
        return title.substring(0, length - ending.length) + ending;
      }
      return title;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-image > img {
  width: fit-content !important;
  margin: 0 auto;
}
</style>
