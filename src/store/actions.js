import { getMeetups } from "../data/meetupData";

const actions = {
  async fetchMeetups(context) {
    const data = await getMeetups();
    context.commit("setMeetups", data);
  },
  addThisMeetup(context, meetup) {
    context.commit('addMeetup', meetup);
  },
  removeThisMeetup(context, id) {
    context.commit('removeMeetup', id)
  },
  switchThisMeetupToggle(context, boolean) {
    context.commit('switchMeetupToggle', boolean);
  }



  /*   isBtnVisible(context) {
      context.commit('isVisible');
    } */
}

export default actions;