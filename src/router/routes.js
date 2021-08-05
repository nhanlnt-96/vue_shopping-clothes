import Homepage from '@/views/Homepage.vue';
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
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage,
    children: [
      {
        path: 'sign-up',
        component: SignUpForm,
      },
      {
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
