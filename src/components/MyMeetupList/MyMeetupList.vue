<template>
  <div class="myMeetupList">
    <p>{{getJoinedMeetups.length}} Meetups</p>
    <MeetupItem v-for="meetup in getJoinedMeetups" v-bind:key="meetup.id" v-bind:meetup="meetup" />
    <hr class="hr" />
    <h1>Previous Meetups</h1>
    <PreviousMeetupItem
      v-for="previousMeetup in getPreviousMeetups"
      v-bind:key="previousMeetup.id"
      v-bind:previousMeetup="previousMeetup"
    />
  </div>
</template>

<script>
import MeetupItem from "../MeetupItem/MeetupItem.vue";
import PreviousMeetupItem from "../PreviousMeetupItem/PreviousMeetupItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MyMeetupList",
  components: {
    MeetupItem,
    PreviousMeetupItem,
  },
  computed: {
    ...mapGetters(["getJoinedMeetups", "getPreviousMeetups"]),
  },
  methods: {
    ...mapActions(["switchThisMeetupToggle", "fetchPreviousMeetups"]),
  },
  mounted() {
    this.switchThisMeetupToggle(true);
    this.fetchPreviousMeetups();
  },
};
</script>

<style scoped>
.hr {
  width: 40%;
}
</style>