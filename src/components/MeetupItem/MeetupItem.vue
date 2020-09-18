<template>
  <div class="meetupItem">
    <h3 class="meetupCategory">{{item.category}}</h3>
    <h2 class="meetupTitle">{{item.title}}</h2>
    <p class="meetupDesc">{{item.desc}}</p>
    <p class="meetupDate">{{item.date}}</p>
    <p class="meetupLocation">{{item.location}}</p>
    <p class="meetupOrganizer">{{item.organizer}}</p>
  </div>
</template>

<script>
export default {
  props: { item: Object },
};
</script>

<style>
</style>