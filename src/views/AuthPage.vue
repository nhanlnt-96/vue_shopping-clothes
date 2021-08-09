<template>
  <div class="columns is-mobile auth-container">
    <div class="auth-logo">
      <router-link to="/">
        <img src="../assets/imgs/logo-black.png" alt="tech-life-logo">
      </router-link>
    </div>
    <div class="column is-7-desktop is-7-tablet auth-bg">
      <img src="../assets/imgs/sign-up-bg.webp" alt="tech-life-sign-up">
    </div>
    <div class="column auth-form">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  components: {},
};
</script>

<style lang="scss" scoped>
.header-hide {
  display: none;
}

.auth-container {
  height: 100vh;
  margin: 0;
  paddinng: 0;

  .auth-bg {
    display: none;
    padding: 0;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .auth-logo {
    position: absolute;
    margin: 10px 0 0 10px;

    img {
      width: 40%;
    }
  }

  .auth-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
