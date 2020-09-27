<template>
  <div class="previousMeetupItem">
    <div class="previousMeetupItemContainer">
      <div class="previousMeetupCard">
        <div class="headerContainer">
          <h3 class="previousMeetupCategory">{{previousMeetup.category}}</h3>
          <h2 class="previousMeetupTitle">{{previousMeetup.title}}</h2>
        </div>
        <div class="content">
          <p class="previousMeetupDesc">{{previousMeetup.desc}}</p>
          <p class="previousMeetupDate">{{previousMeetup.date}}</p>
          <p class="previousMeetupLocation">{{previousMeetup.location}}</p>
          <p class="previousMeetupOrganizer">{{previousMeetup.organizer}}</p>
          <div class="createReview">
            <button
              class="createReviewBtn"
              @click="toggleReview()"
              v-if="!isSubmitted"
            >Create a review!</button>
          </div>
        </div>
      </div>
      <div class="createReviewForm" v-show="showReview">
        <section class="form-group">
          <h3 class="meetupTitle">Submit a review for {{previousMeetup.title}}</h3>
          <input type="text" class="form-control" placeholder="Name..." v-model="reviewData.name" />
        </section>
        <section class="form-group">
          <label for="satisfaction">
            How did you experience this meetup?
            <br />(10 for best, 1 for worst)
          </label>
          <input
            placeholder="1-10"
            min="1"
            max="10"
            type="number"
            id="satisfaction"
            class="form-control"
            v-model.number="reviewData.satisfaction"
          />
        </section>
        <section class="form-group">
          <textarea
            placeholder="Describe your review..."
            id="message"
            rows="5"
            class="form-control"
            v-model="reviewData.message"
          ></textarea>
        </section>
        <button class="submitReview" @click.prevent="submitted(); toggleReview();">Submit!</button>
      </div>
      <div class="displayReview" v-if="isSubmitted">
        <div class="displayReviewBody">
          <p class="reviewName">
            Name:
            <b>{{ reviewData.name }}</b>
          </p>
          <p class="reviewSatisfaction">
            Satisfaction:
            <b>{{ reviewData.satisfaction }}</b>
          </p>
          <p class="reviewMessage" style="white-space: pre">
            Message:
            <b>{{ reviewData.review }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviousMeetupItem",
  props: { previousMeetup: Object },

  // Have to make locally instead of global in store
  data() {
    return {
      showReview: false,
      reviewData: {
        name: "",
        satisfaction: "",
        review: "",
      },
      isSubmitted: false,
    };
  },
  methods: {
    toggleReview() {
      this.showReview = !this.showReview;
    },
    submitted() {
      this.isSubmitted = true;
    },
  },
};
</script>

<style scoped>
.createReviewForm {
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

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

.previousMeetupDate {
  text-decoration: line-through;
}

.previousMeetupItemContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}

.previousMeetupItemContainer .previousMeetupCard {
  max-width: 300px;
  height: 150px;
  background: #ffeb3b;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}

.previousMeetupItemContainer .previousMeetupCard:hover {
  height: 350px;
  background: linear-gradient(#03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400% 400%;
  animation: change 10s ease-in-out infinite;
}

.previousMeetupItemContainer .previousMeetupCard .content {
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.previousMeetupItemContainer .previousMeetupCard:hover .content {
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
</style>