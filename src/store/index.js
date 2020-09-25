import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

Vue.use(Vuex)

//Global state
export default new Vuex.Store({
  state: {
    meetups: [],
    joinedMeetups: [],
    previousMeetups: [],
    meetupToggle: false,
  },

  actions: actions,
  mutations: mutations,
  getters: getters
});