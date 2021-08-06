<template>
  <main-layout></main-layout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
