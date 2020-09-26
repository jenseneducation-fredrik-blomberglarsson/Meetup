<template>
  <div class="meetups">
    <h1>Upcoming Meetups</h1>
    <MeetupList />
  </div>
</template>

<script>
import MeetupList from "@/components/MeetupList/MeetupList.vue";
export default {
  name: "Meetups",
  components: {
    MeetupList,
  },
};
</script>

<style>
body {
}
.meetups {
  width: 100%;
}
</style>