// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  products: [],
});

const actions = {};

const mutations = {
  addToCart(state, product) {
    state.products.push(product);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
