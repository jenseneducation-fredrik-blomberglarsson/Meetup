<template>
  <div class="meetupItem">
    <h3 class="meetupCategory">{{meetup.category}}</h3>
    <h2 class="meetupTitle">{{meetup.title}}</h2>
    <p class="meetupDesc">{{meetup.desc}}</p>
    <p class="meetupDate">{{meetup.date}}</p>
    <p class="meetupLocation">{{meetup.location}}</p>
    <p class="meetupOrganizer">{{meetup.organizer}}</p>
    <section v-if="!getMeetupToggle" class="meetupListComponent">
      <div class="addMeetup" v-show="isOn" v-on:click="addThisMeetup(meetup); toggle(meetup);">
        <button class="joinMeetupBtn">Attend</button>
      </div>
    </section>
    <section v-if="getMeetupToggle" class="myMeetupListComponent">
      <div class="removeMeetup" v-on:click="removeThisMeetup(meetup);">
        <button class="removeMeetupBtn">Leave Meetup</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MeetupItem",
  props: { meetup: Object },
  // Have to make toggle locally instead of store,
  //because otherwise every item gets toggled on click
  data() {
    return {
      isOn: true,
    };
  },
  computed: {
    ...mapGetters(["getMeetupToggle"]),
  },

  methods: {
    toggle() {
      this.isOn = !this.isOn;
    },
    ...mapActions(["addThisMeetup", "removeThisMeetup"]),
  },
};
</script>

<style>
</style>