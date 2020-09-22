<template>
  <div class="myMeetups">
    <h1>Attending meetups</h1>
    <MyMeetupList />
  </div>
</template>

<script>
import MyMeetupList from "@/components/MyMeetupList/MyMeetupList.vue";
export default {
  name: "MyMeetups",
  components: { MyMeetupList },
};
</script>

<style>
</style>