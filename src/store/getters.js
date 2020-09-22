const getters = {
  getMeetups: state => {
    return state.meetups;
  },
  getJoinedMeetups: state => {
    return state.joinedMeetups;
  },
  getMeetupToggle: state => {
    return state.meetupToggle;
  }
}


export default getters;