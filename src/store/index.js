import { createStore } from 'vuex';
import auth from './modules/auth';
import product from './modules/product';
import showModal from './modules/showModal';

const store = createStore({
  modules: {
    auth,
    product,
    showModal,
  },
});

export default store;
