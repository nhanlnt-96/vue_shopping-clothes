// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */
import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const state = () => ({
  allProduct: [],
});

const actions = {
  getAllProduct({ commit }) {
    axios(`${baseURL}/products`).then((response) => {
      commit('allProductData', response.data);
    });
  },
};

const mutations = {
  allProductData(state, data) {
    state.allProduct = data;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
