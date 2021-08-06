import { createStore } from 'vuex';
import auth from './modules/auth';
import product from './modules/product';
import showCart from './modules/showCart';

const store = createStore({
  modules: {
    auth,
    product,
    showCart,
  },
});

export default store;
