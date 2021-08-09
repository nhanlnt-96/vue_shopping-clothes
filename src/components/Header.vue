<template>
  <nav v-if="getCurrentRoute" class="navbar is-border-bottom header-hide" role="navigation"
       aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/imgs/logo-black.png" alt="tech-life-logo" width="112" height="28">
      </router-link>
      <!--      navbar toggle-->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample" @click="onHideUnHideNavBarBtnClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample"
         :class="['navbar-menu navbar-menu-position', showNavBar && 'is-active']">
      <div class="navbar-start">
        <router-link :to="item.url" :key="item.title" v-for="item in navigation"
                     class="navbar-item" @click="onHideUnHideNavBarBtnClick">
          {{ item.title }}
        </router-link>
      </div>

      <div class="navbar-end navbar-end-padding">
        <div v-if="!isAuth.isLogged" class="navbar-item">
          <div class="buttons">
            <router-link to="/auth/sign-up"
                         class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/auth/sign-in"
                         class="button is-light">
              Sign in
            </router-link>
          </div>
        </div>
        <div v-if="isAuth.isLogged" class="user-navbar">
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" @click="$store.commit('showModal/showCart');">
                <span class="icon is-small">
                  <i class='bx bx-shopping-bag icon-size'></i>
                  <p>{{ allProductInCart.length }}</p>
                </span>
              </a>
              <div class="dropdown is-active ml-2">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu"
                          @click="onShowAccountBtnClick">
                    <span>{{ isAuth.fullName }}</span>
                    <span class="icon is-small">
                      <i class='bx bx-chevron-down'></i>
                    </span>
                  </button>
                </div>
                <div v-if="showAccountOption"
                     class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item" @click="onLogoutBtnClick">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import navigation from '@/configs/navigation.config';
import store from '../store';

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      showNavBar: false,
      showAccountOption: false,
      navigation,
    };
  },
  methods: {
    onHideUnHideNavBarBtnClick() {
      this.showNavBar = !this.showNavBar;
    },
    onShowAccountBtnClick() {
      this.showAccountOption = !this.showAccountOption;
    },
    onLogoutBtnClick() {
      const confirm = window.confirm(`Hi, ${this.isAuth.fullName}. Are you sure you want to logout?`); // eslint-disable-line no-alert
      if (confirm) {
        store.commit('auth/logOutAccount');
      }
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.authAccount,
      allProductInCart: (state) => state.product.products,
    }),
    getCurrentRoute() {
      const routeName = this.$route.name;
      if (routeName === 'SignUpPage' || routeName === 'SignInPage' || routeName === 'PageNotFound') {
        return false;
      }
      return true;
    },
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
