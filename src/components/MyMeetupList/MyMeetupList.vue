<template>
  <div class="myMeetupList">
    <p>{{getJoinedMeetups.length}} Meetups</p>
    <MeetupItem v-for="meetup in getJoinedMeetups" v-bind:key="meetup.id" v-bind:meetup="meetup" />
  </div>
</template>

<script>
import MeetupItem from "../MeetupItem/MeetupItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MyMeetupList",
  components: {
    MeetupItem,
  },
  computed: {
    ...mapGetters(["getJoinedMeetups"]),
  },
  methods: {
    ...mapActions(["switchThisMeetupToggle"]),
  },
  mounted() {
    this.switchThisMeetupToggle(true);
  },
};
</script>

<style>
</style>