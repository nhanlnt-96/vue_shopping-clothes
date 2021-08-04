<template>
  <nav class="navbar is-border-bottom" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/imgs/logo-black.png" alt="tech-life-logo" width="112" height="28">
      </a>
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
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Men's clothing</a>
        <a class="navbar-item">Women's clothing</a>
        <a class="navbar-item">Jewelery</a>
        <a class="navbar-item">Electronics</a>
        <a class="navbar-item">About us</a>
      </div>

      <div class="navbar-end navbar-end-padding">
        <div class="user-navbar">
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class='bx bx-heart icon-size'></i></span>
              </a>
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
export default {
  name: 'Header',
  data() {
    return {
      showNavBar: false,
    };
  },
  methods: {
    onShowNavBarBtnClick() {
      this.showNavBar = !this.showNavBar;
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
