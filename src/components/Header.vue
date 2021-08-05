<template>
  <nav class="navbar is-border-bottom header-hide" role="navigation"
       aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/imgs/logo-black.png" alt="tech-life-logo" width="112" height="28">
      </router-link>
      <!--      navbar toggle-->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample" @click="onShowNavBarBtnClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample"
         :class="['navbar-menu navbar-menu-position', showNavBar && 'is-active']">
      <div class="navbar-start">
        <router-link :to="item.url" :key="item.title" v-for="item in navigation"
                     class="navbar-item">
          {{ item.title }}
        </router-link>
      </div>

      <div class="navbar-end navbar-end-padding">
        <div v-if="isAuth" class="navbar-item">
          <div class="buttons">
            <router-link to="/auth/sign-up"
                         class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/auth/sign-in"
                         class="button is-light">
              Log in
            </router-link>
          </div>
        </div>
        <div v-if="!isAuth" class="user-navbar">
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class='bx bx-shopping-bag icon-size'></i></span>
              </a>
            </div>
          </nav>
          <figure class="ml-3 media-left">
            <p class="image is-32x32 image-circle">
              <img src="https://cdn.ssstutter.com/wp-content/uploads/2021/07/IMG_6654-scaled.jpg">
            </p>
          </figure>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import navigation from '@/configs/navigation.config';

export default {
  name: 'Header',
  data() {
    return {
      showNavBar: false,
      navigation,
    };
  },
  methods: {
    onShowNavBarBtnClick() {
      this.showNavBar = !this.showNavBar;
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.authAccount,
    }),
  },
};
</script>

<style scoped>
.navbar-menu-position {
  position: absolute;
  width: 100%;
}

.is-border-bottom {
  border-bottom: 2px solid #F8F8F8;
}

.user-navbar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.user-navbar nav {
  margin-bottom: 0;
}

.user-navbar .image-circle {
  border-radius: 100%;
  overflow: hidden;
}

.user-navbar .icon-size {
  font-size: 20px;
}

.navbar-end-padding {
  padding: .5rem .7rem;
}
</style>
