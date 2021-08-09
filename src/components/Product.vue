<template>
  <!-- eslint-disable max-len -->
  <notification></notification>
  <div class="columns is-multiline is-flex is-justify-content-center">
    <button v-if="isLoading" class="button is-loading btn-loading">Loading</button>
    <div :key="item.id" v-for="item in data"
         class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop item">
      <div @click="onImageZoomBtnClick(item.image)" class="item-image" style="cursor:pointer;">
        <img :src="item.image" :alt="item.title">
      </div>
      <div class="item-title">
        <p @click="onShowProductDetail(item)" style="cursor:pointer;">{{ item.title }}</p>
      </div>
      <div class="item-tag">
        <span class="tag">{{ item.category }}</span>
      </div>
      <div class="item-price">
        <div class="price">
          <span>Price</span>
          <p>${{ item.price }}</p>
        </div>
        <div class="btn-add-cart">
          <add-to-cart-button :item="item"></add-to-cart-button>
        </div>
      </div>
    </div>
    <product-image-zoom></product-image-zoom>
    <product-detail></product-detail>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue';
import { mapState } from 'vuex';
import store from '../store';
import AddToCartButton from './AddToCartButton.vue';
import ProductDetail from './ProductDetail.vue';
import ProductImageZoom from './ProductImageZoom.vue';

export default {
  name: 'Product',
  components: {
    Notification,
    AddToCartButton,
    ProductImageZoom,
    ProductDetail,
  },
  props: {
    data: Array,
    isLoading: Boolean,
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.auth.authAccount.isLogged,
    }),
  },
  methods: {
    onShowProductDetail(item) {
      store.commit('product/viewProductDetail', item);
      store.commit('showModal/showProductDetail');
    },
    onImageZoomBtnClick(url) {
      store.commit('product/viewImageZoom', url);
      store.commit('showModal/showImageDetail');
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-loading {
  border: none;
  margin: 0 auto;
}

.item {
  border: 2px solid #ecf0f1;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;

  &-image {
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      object-fit: cover;
    }
  }

  &-title {
    min-height: 50px;
    margin: 10px 0;

    p {
      font-weight: bold;
    }
  }

  &-tag {
    height: 25px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  &-price {
    width: 100%;
    height: 50px;
    display: inline-flex;
    align-items: center;

    .price, .btn-add-cart {
      flex: 1
    }

    .price {
      span {
        font-size: 12px;
      }

      p {
        font-weight: bold;
      }
    }

    .btn-add-cart {
      button {
        float: right;
      }
    }
  }
}
</style>
