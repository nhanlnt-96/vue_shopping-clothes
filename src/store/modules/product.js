// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  products: [],
  productDetail: {},
  imageZoom: '',
});

const actions = {
  removeProductFromCartAction({ commit, state }, id) {
    const data = state.products.filter((val) => val.id !== id);
    commit('removeProductFromCart', data);
  },
};

const mutations = {
  addToCart(state, product) {
    const productCheck = state.products.find((val) => val.id === product.id);
    const indexOfProduct = state.products.indexOf(productCheck);
    const {
      id,
      title,
      image,
      price,
    } = product;
    if (!productCheck) {
      state.products.push({
        id,
        title,
        image,
        price,
        quantity: 1,
      });
    } else {
      state.products[indexOfProduct].quantity += 1;
    }
  },
  removeProductFromCart(state, products) {
    state.products = products;
  },
  viewProductDetail(state, product) {
    state.productDetail = product;
  },
  viewImageZoom(state, url) {
    state.imageZoom = url;
  },
  decreaseProduct(state, product) {
    const indexOfProduct = state.products.indexOf(product);
    if (state.products[indexOfProduct].quantity > 1) {
      state.products[indexOfProduct].quantity -= 1;
    } else {
      state.products.splice(indexOfProduct, 1);
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
