<template>
  <div class="container is-fluid home-container mt-4">
    <div class="columns">
      <div class="column home-container-left">
        <div class="home-search">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Ex: T-shirt">
              <span class="icon is-small is-left">
            <i class='bx bx-search'></i>
          </span>
              <span class="icon is-small is-right">
            <i class='bx bx-x'></i>
          </span>
            </p>
          </div>
        </div>
        <div class="home-content mt-5">
          <product :data="allProductData"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'Homepage',
  components: { Product },
  created() {
    store.dispatch('product/getAllProduct');
  },
  computed: {
    ...mapState({
      allProductData: (state) => state.product.allProduct,
    }),
  },
};
</script>

<style lang="scss" scoped>
.home-container-left {
  .home-search {
    margin: 0 auto;

    input {
      border-radius: 15px;
    }
  }

  .home-content {
    .columns {
      margin: 0;
    }
  }
}
</style>
