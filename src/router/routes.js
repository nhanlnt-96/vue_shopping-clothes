import Electronics from '@/views/Electronics.vue';
import Homepage from '@/views/Homepage.vue';
import Jewelery from '@/views/Jewelery.vue';
import MenClothes from '@/views/MenClothes.vue';
import WomenClothes from '@/views/WomenClothes.vue';
import AuthPage from '../views/AuthPage.vue';
import SignUpForm from '../components/SignUpForm.vue';
import SignInForm from '../components/SignInForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/men-clothing',
    name: 'MenClothing',
    component: MenClothes,
  },
  {
    path: '/women-clothing',
    name: 'WomenClothing',
    component: WomenClothes,
  },
  {
    path: '/jewelery',
    name: 'Jewelery',
    component: Jewelery,
  },
  {
    path: '/electronics',
    name: 'Electronics',
    component: Electronics,
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage,
    children: [
      {
        name: 'SignUpPage',
        path: 'sign-up',
        component: SignUpForm,
      },
      {
        name: 'SignInPage',
        path: 'sign-in',
        component: SignInForm,
      },
    ],
  },
  // {
  //   path: "/:catchAll(.*)*",
  //   name: 'PageNotFound',
  //   component:
  // }
];

export default routes;
