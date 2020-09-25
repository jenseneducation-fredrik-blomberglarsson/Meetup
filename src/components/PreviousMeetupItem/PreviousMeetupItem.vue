<template>
  <div class="previousMeetupItem">
    <h3 class="previousMeetupCategory">{{previousMeetup.category}}</h3>
    <h2 class="previousMeetupTitle">{{previousMeetup.title}}</h2>
    <p class="previousMeetupDesc">{{previousMeetup.desc}}</p>
    <p class="previousMeetupDate">{{previousMeetup.date}}</p>
    <p class="previousMeetupLocation">{{previousMeetup.location}}</p>
    <p class="previousMeetupOrganizer">{{previousMeetup.organizer}}</p>
    <div class="createReview">
      <button class="createReviewBtn" @click="toggleReview()">Create a review!</button>
      <div class="createReviewForm" v-show="showReview">
        <section class="form-group">
          <h3 class="meetupTitle">Submit a review for {{previousMeetup.title}}</h3>
          <label for="name">Name</label>
          <input type="text" class="form-control" placeholder="Your name" v-model="reviewData.name" />
        </section>
        <section class="form-group">
          <label for="satisfaction">How did you experience this meetup? (10 for best, 1 for worst)</label>
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
          <label for="message">Your review</label>
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
            <b>{{ reviewData.message }}</b>
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
        message: "",
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
</style>