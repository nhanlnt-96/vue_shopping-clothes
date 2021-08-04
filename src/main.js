import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';
import App from './App.vue';

require('@/assets/main.scss');

createApp(App).use(store).use(router).mount('#app');
