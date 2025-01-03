const stars = document.querySelectorAll(".fa-star-o");
const selectedRatingValueText = document.querySelector(
  ".selected-rating-value"
);

let countCurrentRating = -1;

stars.forEach((item, index) => {
  item.dataset.rating = index + 1;
  item.addEventListener("mouseover", onMouseOver);
  item.addEventListener("click", onMouseClick);
  item.addEventListener("mouseleave", onMouseLeave);
});

function onMouseOver(event) {
  const currentMouseOverStarValue = event.target.dataset.rating;
  if (!currentMouseOverStarValue) return;
  else handleUpdateStar(currentMouseOverStarValue);
}

function handleUpdateStar(value) {
  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function onMouseClick(event) {
  const currentMouseClickStarValue = event.target.dataset.rating;
  countCurrentRating = currentMouseClickStarValue;
  handleUpdateStar(countCurrentRating);
  selectedRatingValueText.textContent = countCurrentRating;
}

function onMouseLeave() {
  handleUpdateStar(countCurrentRating);
}
