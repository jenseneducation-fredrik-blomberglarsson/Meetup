<template>
  <nav class="hamburgerMenu" v-if="getBurgerToggle">
    <img class="closeBtn" src="../../assets/close.svg" alt="close" @click="changeThisBurgerToggle" />
    <router-link v-on:click.native="changeThisBurgerToggle" to="/" class="router-link">Home</router-link>
    <hr class="hr" />
    <router-link
      v-on:click.native="changeThisBurgerToggle"
      to="/meetups"
      class="router-link"
    >Upcoming Meetups</router-link>
    <hr class="hr" />
    <router-link
      v-on:click.native="changeThisBurgerToggle"
      to="/mymeetups"
      class="router-link"
    >My Meetups</router-link>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HamburgerMenu",
  methods: {
    ...mapActions(["changeThisBurgerToggle"]),
  },
  computed: {
    ...mapGetters(["getBurgerToggle"]),
  },
};
//-webkit-linear-gradient(#03a9f4, #f441a5, #ffeb3b, #03a9f4);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.hamburgerMenu {
  font-family: "Permanent Marker", cursive;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  background: linear-gradient(#03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400% 400%;
  animation: change 10s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9999;
  cursor: default;
}
@keyframes change {
  0% {
    background-position: 0 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 100%;
  }
}
.router-link {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  text-decoration: none;
  color: white;
}
.hr {
  width: 20%;
}
.closeBtn {
  position: absolute;
  top: 1em;
  right: 2em;
  cursor: pointer;
  background: white;
  width: 1.5em;
  padding: 1rem;
  border-radius: 50px;
}
</style>