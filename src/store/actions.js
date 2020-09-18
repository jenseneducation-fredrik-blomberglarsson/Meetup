import { getMeetups } from "../data/meetupData";

const actions = {
  async fetchMeetups(context) {
    const data = await getMeetups();
    context.commit("setMeetups", data);
    console.log(data);
  }
}

export default actions;