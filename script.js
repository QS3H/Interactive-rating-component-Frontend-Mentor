// Get DOM elements
const ratingForm = document.getElementById("rating-form");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const ratingValue = document.getElementById("rating-value");

ratingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedRating = document.querySelector('input[name="rating"]:checked');

  if (selectedRating) {
    ratingValue.textContent = selectedRating.value;
    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");
  } else {
    // Add error feedback
    const submitButton = document.getElementById("submit-button");
    submitButton.classList.add("error");
    submitButton.textContent = "Please select a rating";

    // Reset button after 2 seconds
    setTimeout(() => {
      submitButton.classList.remove("error");
      submitButton.textContent = "Submit";
    }, 2000);
  }
});
