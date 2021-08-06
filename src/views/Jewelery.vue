<template>
  <div class="container is-fluid home-container mt-4">
    <div class="columns">
      <div class="column home-container-left">
        <div class="home-title">
          <p class="is-size-2">Jewelery</p>
        </div>
        <div class="home-content mt-5">
          <product :data="allProductData" :is-loading="isLoading"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
import { getProductByCategory } from '@/network/services';

export default {
  name: 'MenClothes',
  components: {
    Product,
  },
  data() {
    return {
      allProductData: [],
      isLoading: true,
    };
  },
  created() {
    getProductByCategory('jewelery').then((response) => {
      this.allProductData = response.data;
      this.isLoading = false;
    });
  },
};
</script>

<style scoped>

</style>
