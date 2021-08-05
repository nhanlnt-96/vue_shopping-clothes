<template>
  <div class="container is-fluid p-0">
    <div v-if="isAuth.isLogged" :class="['header',!isAuth && 'hide']">
      <Header />
    </div>
    <div class="container is-fluid p-0 container-height">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.auth.authAccount,
    }),
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container-height {
  height: calc(100vh - 54px);
}

.hide {
  display: none;
}
</style>
