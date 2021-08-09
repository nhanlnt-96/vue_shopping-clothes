<template>
  <div v-if="showModal" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <p class="image is-4by5">
        <img :src="imageUrl" alt="product-detail">
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close"
            @click="$store.commit('showModal/showImageDetail')"></button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductImageZoom',
  computed: {
    ...mapState({
      imageUrl: (state) => state.product.imageZoom,
      showModal: (state) => state.showModal.showImageDetail,
    }),
  },
};
</script>

<style scoped>

</style>
