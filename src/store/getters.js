const getters = {
  getMeetups: state => {
    return state.meetups;
  },
  getJoinedMeetups: state => {
    return state.joinedMeetups;
  },
  getPreviousMeetups: state => {
    return state.previousMeetups;
  },
  getMeetupToggle: state => {
    return state.meetupToggle;
  },
  getBurgerToggle: state => {
    return state.burgerToggle;
  }
}


export default getters;