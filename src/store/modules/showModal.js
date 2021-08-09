// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  showCart: false,
  showProductDetail: false,
  showImageDetail: false,
  showAddToCartMess: {
    active: false,
    productName: '',
  },
});

const mutations = {
  showCart(state) {
    state.showCart = !state.showCart;
  },
  showProductDetail(state) {
    state.showProductDetail = !state.showProductDetail;
  },
  showImageDetail(state) {
    state.showImageDetail = !state.showImageDetail;
  },
  showAddToCartSuccess(state, { productName, active }) {
    state.showAddToCartMess = {
      active,
      productName,
    };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
