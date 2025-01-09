<template>
    <div class="star-rating">
      <!-- Displaying the stars -->
      <span 
        v-for="star in totalStars" 
        :key="star"
        :class="{
          'filled': star <= currentRating,
          'empty': star > currentRating,
          'star': true
        }"
        @click="setRating(star)"
        @mouseover="hoverRating(star)"
        @mouseleave="resetHover"
      >
        ★
      </span>
  
      <!-- Display the numeric rating below the stars -->
      <div v-if="currentRating > 0" class="rating-value">
        Rating: {{ currentRating }} / {{ totalStars }}
      </div>
    </div>
</template>
  
<script>
export default {
data() {
    return {
    totalStars: 5, // Total number of stars
    currentRating: 0, // Current rating the user has selected
    hoverRatingValue: 0, // Store the rating value when hovering over stars
    };
},
methods: {
    // Set the current rating when a star is clicked
    setRating(star) {
    this.currentRating = star;
    },
    // Handle mouseover event to show the rating as the user hovers over stars
    hoverRating(star) {
    this.hoverRatingValue = star;
    },
    // Reset the hover state when the mouse leaves the stars
    resetHover() {
    this.hoverRatingValue = 0;
    }
},
computed: {
    // Dynamically calculate the filled or empty class for stars
    starClasses() {
    return (star) => ({
        filled: star <= (this.hoverRatingValue || this.currentRating),
        empty: star > (this.hoverRatingValue || this.currentRating),
    });
    }
}
};
</script>

<style scoped>
.star-rating {
font-size: 30px;
cursor: pointer;
}

.star {
color: gray;
transition: color 0.2s;
}

.star.filled {
color: gold;
}

.star.empty {
color: lightgray;
}

.rating-value {
margin-top: 10px;
font-size: 16px;
}
</style>
