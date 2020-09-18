import Home from '../views/Home/Home.vue';
import Meetups from '../views/Meetups/Meetups.vue';
//import store from '@/store/index.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  }
];

export default routes;
