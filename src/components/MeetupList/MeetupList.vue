<template>
  <div class="meetupList">
    <MeetupItem class="meetupItems" v-for="meetup in getMeetups" :key="meetup.id" :meetup="meetup" />
  </div>
</template>

<script>
import MeetupItem from "../MeetupItem/MeetupItem.vue";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "MeetupList",
  components: { MeetupItem },
  computed: mapGetters(["getMeetups"]),
  methods: {
    ...mapActions(["fetchMeetups", "switchThisMeetupToggle"]),
  },
  mounted() {
    this.fetchMeetups();
    this.switchThisMeetupToggle(false);
  },
};
</script>

<style>
</style>