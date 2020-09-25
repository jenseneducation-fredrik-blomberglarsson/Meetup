<template>
  <div class="hamburgerIcon">
    <nav class="burgerBtn">
      <img
        class="burgerIconImg"
        src="../../assets/navicon.svg"
        alt="burgerIconImg"
        @click="changeThisBurgerToggle"
      />
      <HamburgerMenu />
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu.vue";
export default {
  name: "HamburgerIcon",
  components: {
    HamburgerMenu,
  },
  methods: {
    ...mapActions(["changeThisBurgerToggle"]),
  },
};
</script>

<style>
</style>