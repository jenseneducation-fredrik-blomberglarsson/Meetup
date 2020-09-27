<template>
  <div class="home">
    <hr class="hr" />
    <section class="heroContainer">
      <h1 class="descHeader">Meetups of every kind</h1>
      <router-link to="/meetups">
        <button class="joinMeetupBtn">Join Meetup</button>
      </router-link>
    </section>
    <section class="informationContainer">
      <p class="infoParagraph">
        Meetups is a platform for finding and building local communities.
        <br />People use Meetups to meet new people,
        <br />learn new things, find support,
        <br />get out of their comfort zones,
        <br />and pursue their passions, together.
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.home {
  width: 100%;
  height: 120vh;
}
.hr {
  width: 100%;
  opacity: 0.5;
}
.heroContainer {
  margin-top: 4%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../assets/meetup-home.jpeg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
}
.descHeader {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 3px solid #fff;
  margin-top: 5%;
  align-self: center;
  color: #fff;
  text-align: center;
}
.joinMeetupBtn {
  font-family: "Permanent Marker", cursive;
  color: #fff;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  z-index: 1;
  cursor: pointer;
}
.joinMeetupBtn:hover {
  animation: animate 8s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
.joinMeetupBtn:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5s;
}
.joinMeetupBtn:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
.infoParagraph {
  margin-top: 5%;
  font-size: 1.5rem;
}
</style>
