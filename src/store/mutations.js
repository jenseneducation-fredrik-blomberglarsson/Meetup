const mutations = {
  setMeetups(state, meetups) {
    state.meetups = meetups;
  },
  addMeetup(state, meetup) {
    let meetupAmount = state.joinedMeetups.filter(item => item.id == meetup.id);
    if (meetupAmount.length >= 1) {
      return false
    } else {
      state.joinedMeetups.push({
        id: meetup.id,
        category: meetup.category,
        title: meetup.title,
        desc: meetup.desc,
        date: meetup.date,
        location: meetup.location,
        organizer: meetup.organizer
      })
    }
  },

  removeMeetup(state, id) {
    let findIndex = state.joinedMeetups.find(item => item.id == id);
    let index = state.joinedMeetups.indexOf(findIndex);
    state.joinedMeetups.splice(index, 1);
  },





  switchMeetupToggle(state, boolean) {
    state.meetupToggle = boolean;
  }
}

export default mutations;