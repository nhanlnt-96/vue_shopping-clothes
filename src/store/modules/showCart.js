// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  showCart: false,
});

const mutations = {
  showCart(state) {
    state.showCart = !state.showCart;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
