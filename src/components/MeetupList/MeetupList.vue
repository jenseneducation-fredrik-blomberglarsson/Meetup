<template>
  <div class="meetupList">
    <MeetupItem class="meetupItems" v-for="item in getMeetups" :key="item.id" :item="item" />
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
    ...mapActions(["fetchMeetups"]),
  },
  mounted() {
    this.fetchMeetups();
  },
};
</script>

<style>
</style>