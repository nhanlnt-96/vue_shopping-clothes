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

const actions = {
  addNewAccountAction({ commit, state }, userSignUp) {
    const userCheck = state.allAccount.find((val) => val.username === userSignUp.username);
    const emailCheck = state.allAccount.find((val) => val.email === userSignUp.email);
    const {
      fullName,
      email,
      username,
      password,
    } = userSignUp;
    // eslint-disable-next-line
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userCheck && !emailCheck) {
      if (email.match(mailFormat) && !username.includes(' ')) {
        commit('addNewAccount', {
          id: Math.floor(Math.random() * 1000),
          fullName,
          email,
          username: username.toLowerCase().replaceAll(' ', ''),
          password,
        });
        state.error = {
          username: null,
          email: null,
        };
      } else if (!email.match(mailFormat)) {
        state.error = {
          username: '',
          email: 'Invalid email.',
        };
      } else if (username.includes(' ')) {
        state.error = {
          username: `Username must be ${username.toLowerCase().replaceAll(' ', '')}`,
          email: '',
        };
      } else {
        state.error = {
          username: `Username must be ${username.toLowerCase().replaceAll(' ', '')}`,
          email: 'Invalid email.',
        };
      }
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
          id: userCheck.id,
          fullName: userCheck.fullName,
          username: userCheck.username,
          email: userCheck.email,
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
  },
  signInAccount(state, userSignIn) {
    state.authAccount.id = userSignIn.id;
    state.authAccount.fullName = userSignIn.fullName;
    state.authAccount.username = userSignIn.username;
    state.authAccount.email = userSignIn.email;
    state.authAccount.isLogged = true;
  },
  logOutAccount(state) {
    state.authAccount = {
      id: '',
      fullName: '',
      username: '',
      email: '',
      isLogged: false,
      status: '',
      error: '',
    };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
