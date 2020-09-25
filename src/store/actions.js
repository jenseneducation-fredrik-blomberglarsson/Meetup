import { getMeetups, getPreviousMeetups } from "../data/meetupData";

const actions = {
  async fetchMeetups(context) {
    const data = await getMeetups();
    context.commit("setMeetups", data);
  },
  async fetchPreviousMeetups(context) {
    const data = await getPreviousMeetups();
    context.commit("setPreviousMeetups", data)
  },
  addThisMeetup(context, meetup) {
    context.commit('addMeetup', meetup);
  },
  removeThisMeetup(context, id) {
    context.commit('removeMeetup', id)
  },
  switchThisMeetupToggle(context, boolean) {
    context.commit('switchMeetupToggle', boolean);
  },
  changeThisBurgerToggle(context) {
    context.commit('toggleBurger');
  }

}

export default actions;