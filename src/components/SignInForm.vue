<template>
  <div class="auth-header mb-4">
    <h2 class="is-size-3 is-dark has-text-weight-bold has-text-centered">Sign In</h2>
  </div>

  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Text input" value="bulma">
      <span class="icon is-small is-left">
      <i class='bx bxs-user'></i>
    </span>
      <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="password" placeholder="Enter your password."
             value="bulma">
      <span class="icon is-small is-left">
        <i class='bx bxs-lock-alt'></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
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
      <button class="button is-link">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  data() {
    return {
      userSignUp: [{
        name: '',

      }],
    };
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
