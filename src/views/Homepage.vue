<template>
  <div class="container is-fluid home-container mt-4">
    <div class="columns">
      <div class="column home-container-left">
        <div class="home-title">
          <p class="is-size-2">All Products</p>
        </div>
        <div class="home-content mt-5" ref="scrollingComponent">
          <product :data="allProductData" :is-loading="isLoading"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import { getAllProduct } from '@/network/services';

export default {
  name: 'Homepage',
  components: { Product },
  data() {
    return {
      dropDownActive: false,
      allProductData: [],
      isLoading: true,
    };
  },
  created() {
    getAllProduct().then((response) => {
      this.allProductData = response.data;
      this.isLoading = false;
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
