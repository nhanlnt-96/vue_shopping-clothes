<template>
  <div v-if="signInSuccess.status" class="notification is-primary">
    {{ signInSuccess.status }}
  </div>
  <div v-if="signInSuccess.error" class="notification is-danger">
    {{ signInSuccess.error }}
  </div>
  <div class="auth-header mb-4">
    <h2 class="is-size-3 is-dark has-text-weight-bold has-text-centered">Sign In</h2>
  </div>
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="userSignIn.username" class="input"
             :class="validated(userSignIn.username)" type="text"
             placeholder="Enter username">
      <span class="icon is-small is-left">
      <i class='bx bxs-user'></i>
      </span>
    </div>
  </div>
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="userSignIn.password" class="input"
             :class="validated(userSignIn.password)" type="password"
             placeholder="Enter your password.">
      <span class="icon is-small is-left">
        <i class='bx bxs-lock-alt'></i>
      </span>
    </div>
  </div>
  <div class="field">
    <div class="control is-flex is-flex-direction-row is-justify-content-flex-end">
      Not registered yet ?
      <router-link to="/auth/sign-up"
                   class="auth-question has-text-link">
        Create an account
        <i class="bx bx-right-arrow-alt text is-size-5"></i>
      </router-link>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button @click="onSignInBtnClick(userSignIn)" class="button is-link">Submit</button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'SignInForm',
  data() {
    return {
      userSignIn: {
        username: '',
        password: '',
      },
      isEmpty: false,
    };
  },
  methods: {
    onSignInBtnClick(userSignIn) {
      if (userSignIn.username !== '' && userSignIn.password !== '') {
        store.dispatch('auth/signInAccountAction', userSignIn);
      }
      if (userSignIn.username === '' || userSignIn.password === '') {
        this.isEmpty = true;
      }
      if (this.signInSuccess.isLogged) {
        this.userSignIn = {
          username: '',
          password: '',
        };
        router.push({ path: '/' });
      }
    },
    validated(validateItem) {
      return (validateItem === '' && this.isEmpty) && 'is-danger';
    },
  },
  computed: {
    ...mapState({
      signInSuccess: (state) => state.auth.authAccount,
    }),
  },
};
</script>

<style lang="scss" scoped>
.auth-question {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}
</style>
