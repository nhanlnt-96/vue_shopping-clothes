<template>
  <div v-if="signUpSuccess" class="notification is-primary">
    {{ signUpSuccess }}
  </div>
  <div class="auth-header mb-4">
    <h2 class="is-size-3 is-dark has-text-weight-bold has-text-centered">Sign Up</h2>
    <p class="has-text-centered">Let's create your account</p>
  </div>
  <div class="field">
    <label class="label">Fullname</label>
    <div class="control">
      <input v-model="userSignUp.fullName"
             class="input"
             :class="validated(userSignUp.fullName)"
             type="text"
             placeholder="Ex: Jay Le">
    </div>
  </div>
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="userSignUp.email"
             class="input"
             :class="validated(userSignUp.email)"
             type="email"
             placeholder="Ex: abc@mail.com">
      <span class="icon is-small is-left">
      <i class='bx bxs-envelope'></i>
    </span>
      <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">{{ signUpError.email }}</p>
  </div>
  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="userSignUp.username"
             class="input"
             :class="validated(userSignUp.username)"
             type="text"
             placeholder="Ex: jayle">
      <span class="icon is-small is-left">
      <i class='bx bxs-user'></i>
    </span>
      <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
    </div>
    <p class="help is-danger">{{ signUpError.username }}</p>
  </div>
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input v-model="userSignUp.password" class="input" :class="validated(userSignUp.password)"
             type="password"
             placeholder="Enter password">
      <span class="icon is-small is-left">
        <i class='bx bxs-lock-alt'></i>
      </span>
    </div>
  </div>
  <div class="field">
    <div class="control is-flex is-flex-direction-row is-justify-content-flex-end">
      Already have an account?
      <router-link to="/auth/sign-in" class="auth-question has-text-link">
        Sign in
        <i class="bx bx-right-arrow-alt is-size-5"></i>
      </router-link>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button @click="onSignUpBtnClick(userSignUp)"
              class="button is-link">
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import store from '@/store';
import { mapState } from 'vuex';

export default {
  name: 'SignUpForm',
  data() {
    return {
      userSignUp: {
        fullName: '',
        email: '',
        username: '',
        password: '',
      },
      isEmpty: false,
    };
  },
  methods: {
    onSignUpBtnClick(userSignUp) {
      const {
        fullName,
        email,
        username,
        password,
      } = this.userSignUp;
      if (fullName !== '' && email !== '' && username !== '' && password !== '') {
        store.dispatch('auth/addNewAccountAction', userSignUp);
      }
      if (fullName === '' || email === '' || username === '' || password === '') {
        this.isEmpty = true;
      }
      if (this.signUpSuccess) {
        this.userSignUp = {
          fullName: '',
          email: '',
          username: '',
          password: '',
        };
        router.push({ path: 'sign-in' });
      }
    },
    validated(validateItem) {
      return (validateItem === '' && this.isEmpty) && 'is-danger';
    },
  },
  computed: {
    ...mapState({
      allAccount: (state) => state.auth.allAccount,
      signUpSuccess: (state) => state.auth.success,
      signUpError: (state) => state.auth.error,
    }),
  }
  ,
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
