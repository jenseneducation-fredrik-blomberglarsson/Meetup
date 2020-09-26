<template>
  <div id="app">
    <Header />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>