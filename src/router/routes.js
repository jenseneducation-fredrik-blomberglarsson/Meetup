import Home from '../views/Home/Home.vue';
import Meetups from '../views/Meetups/Meetups.vue';
import MyMeetups from '../views/MyMeetups/MyMeetups.vue'
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
  },
  {
    path: '/mymeetups',
    name: 'MyMeetups',
    component: MyMeetups
  }
];

export default routes;
