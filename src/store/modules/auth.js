// skip eslint state upper scoped error
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable max-len */

const state = () => ({
  allAccount: [],
  authAccount: {
    id: '',
    fullName: '',
    username: '',
    email: '',
    isLogged: false,
    status: '',
    error: '',
  },
  success: '',
  error: {
    username: '',
    email: '',
  },
});

const getters = {};

const actions = {
  addNewAccountAction({ commit, state }, userSignUp) {
    const userCheck = state.allAccount.find((val) => val.username === userSignUp.username);
    const emailCheck = state.allAccount.find((val) => val.email === userSignUp.email);
    if (!userCheck && !emailCheck) {
      commit('addNewAccount', userSignUp);
      state.error = {
        username: null,
        email: null,
      };
    }
    if (userCheck) {
      state.error.username = 'Username already exist';
      state.success = '';
    }
    if (emailCheck) {
      state.error.email = 'Email already exist';
      state.success = '';
    }
  },
  signInAccountAction({ commit, state }, userSignIn) {
    const userCheck = state.allAccount.find((val) => val.username === userSignIn.username);
    if (userCheck) {
      if (userCheck.password === userSignIn.password) {
        commit('signInAccount', userSignIn);
        state.authAccount = {
          status: 'Sign in successful.',
          error: '',
          isLogged: true,
        };
      } else {
        state.authAccount = {
          error: 'Username or password is wrong.',
          status: '',
          isLogged: false,
        };
      }
    } else {
      state.authAccount = {
        error: 'Username or password is wrong.',
        status: '',
        isLogged: false,
      };
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
  },
  signInAccount(state, userSignIn) {
    state.authAccount.id = userSignIn.id;
    state.authAccount.fullName = userSignIn.fullName;
    state.authAccount.username = userSignIn.username;
    state.authAccount.email = userSignIn.email;
    state.authAccount.isLogged = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
