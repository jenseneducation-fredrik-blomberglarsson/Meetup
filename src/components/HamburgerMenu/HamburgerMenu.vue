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
</script>

<style>
.hamburgerMenu {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  background: rgb(36, 8, 8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9999;
  cursor: default;
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
  position: fixed;
  top: 1em;
  left: 1em;
  cursor: pointer;
  background: white;
  width: 1.5em;
  padding: 1rem;
  border-radius: 50px;
}
</style>