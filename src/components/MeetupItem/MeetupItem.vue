<template>
  <div class="meetupItem">
    <div class="meetupItemContainer">
      <div class="meetupCard">
        <div class="headerContainer">
          <h3 class="meetupCategory">{{meetup.category}}</h3>
          <h2 class="meetupTitle">{{meetup.title}}</h2>
        </div>
        <div class="content">
          <p class="meetupDesc">{{meetup.desc}}</p>
          <p class="meetupDate">{{meetup.date}}</p>
          <p class="meetupLocation">{{meetup.location}}</p>
          <p class="meetupOrganizer">{{meetup.organizer}}</p>
          <section v-if="!getMeetupToggle" class="meetupListComponent">
            <div
              class="addMeetup"
              v-show="isOn"
              v-on:click="addThisMeetup(meetup); toggle(meetup);"
            >
              <button class="joinMeetupBtn">Attend</button>
            </div>
          </section>
          <section v-if="getMeetupToggle" class="myMeetupListComponent">
            <div class="removeMeetup" v-on:click="removeThisMeetup(meetup);">
              <button class="removeMeetupBtn">Leave</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MeetupItem",
  props: { meetup: Object },
  // Have to make toggle locally instead of store,
  //because otherwise every item gets toggled on click
  data() {
    return {
      isOn: true,
    };
  },
  computed: {
    ...mapGetters(["getMeetupToggle"]),
  },

  methods: {
    toggle() {
      this.isOn = !this.isOn;
    },
    ...mapActions(["addThisMeetup", "removeThisMeetup"]),
  },
};
</script>

<style scoped>
div {
  display: inline-block;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.meetupItemContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}

.meetupItemContainer .meetupCard {
  max-width: 300px;
  height: 150px;
  background: #03a9f4;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}

.meetupItemContainer .meetupCard:hover {
  height: 350px;
  background: linear-gradient(#03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400% 400%;
  animation: change 10s ease-in-out infinite;
}

.meetupItemContainer .meetupCard .content {
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.meetupItemContainer .meetupCard:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -5px;
  transition-delay: 0.2s;
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

.joinMeetupBtn {
  font-family: "Permanent Marker", cursive;
  color: #03a9f4;
  background-color: #d6d2d2;
  width: 100px;
  height: 30px;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  box-sizing: border-box;
  cursor: pointer;
}

.removeMeetupBtn {
  font-family: "Permanent Marker", cursive;
  color: #03a9f4;
  background-color: #d6d2d2;
  width: 100px;
  height: 30px;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>