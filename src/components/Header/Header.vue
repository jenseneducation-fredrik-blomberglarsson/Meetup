<template>
  <div class="header">
    <router-link class="router-link" to="/">
      <img class="meetupLogo" src="@/assets/meetuplogo.jpg" />
    </router-link>
    <router-link class="router-link" to="/">
      <h1 class="meetupsHeader">Meetups</h1>
    </router-link>
    <HamburgerIcon />
  </div>
</template>

<script>
import HamburgerIcon from "@/components/HamburgerIcon/HamburgerIcon.vue";
export default {
  name: "Header",
  components: {
    HamburgerIcon,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.router-link {
  text-decoration: none;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.meetupLogo {
  width: 80px;
}
.meetupsHeader {
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: #03a9f4;
}
</style>