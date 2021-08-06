<template>
  <!-- eslint-disable max-len -->
  <div class="columns is-multiline is-flex is-justify-content-center">
    <button v-if="isLoading" class="button is-loading btn-loading">Loading</button>
    <div :key="item.id" v-for="item in data"
         class="column is-12-mobile is-one-third-tablet is-one-fifth-desktop item">
      <div class="item-image">
        <img :src="item.image" :alt="item.title">
      </div>
      <div class="item-title">
        <p>{{ item.title }}</p>
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
          <button @click="onAddToCartBtnClick(item)" class="button is-primary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'Product',
  components: {},
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
    onAddToCartBtnClick(item) {
      if (!this.isLogged) {
        router.push({ name: 'SignInPage' });
      } else {
        store.commit('product/addToCart', item);
      }
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
