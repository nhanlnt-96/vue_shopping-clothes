// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  allAccount: [],
  success: '',
  error: '',
});

const getters = {};

const actions = {
  addNewAccountAction({ commit, state }, userSignUp) {
    const userCheck = state.allAccount.find((val) => val.username === userSignUp.username);
    const emailCheck = state.allAccount.find((val) => val.email === userSignUp.email);
    if (!userCheck && !emailCheck) {
      commit('addNewAccount', userSignUp);
    } else if (userCheck) {
      state.error = 'Username already exist.';
      console.log(userCheck);
    } else {
      state.error = 'Email already exist.';
    }
  },
};

const mutations = {
  addNewAccount(state, userSignUp) {
    state.allAccount.push({
      id: Math.floor(Math.random() * 10000),
      fullName: userSignUp.fullName,
      email: userSignUp.email,
      username: userSignUp.username,
      password: userSignUp.password,
    });
    state.success = 'Sign up successful.';
    console.log(state.allAccount);
    console.log(state.error);
    console.log(state.success);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
