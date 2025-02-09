const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const iconsWrapper = document.querySelectorAll(".icon-wrapper");

countStep = 1;

nextBtn.addEventListener("click", () => {
  if (countStep < iconsWrapper.length) {
    countStep++;
  }
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  if (countStep > 1) {
    countStep--;
  }
  updateProgress();
});

function updateProgress() {
  iconsWrapper.forEach((item, index) => {
    if (countStep > index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  progress.style.width =
    ((countStep - 1) / (iconsWrapper.length - 1)) * 100 + "%";

  if (countStep === 1) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  } else if (countStep === iconsWrapper.length) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
