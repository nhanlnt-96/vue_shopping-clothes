// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  products: [],
});

const actions = {
  removeProductFromCartAction({ commit, state }, id) {
    const data = state.products.filter((val) => val.id !== id);
    commit('removeProductFromCart', data);
  },
};

const mutations = {
  addToCart(state, product) {
    state.products.push(product);
  },
  removeProductFromCart(state, products) {
    state.products = products;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
