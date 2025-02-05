const openModalBtn = document.querySelector(".openModal");
const modalBackground = document.querySelector(".modal-background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submit");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");

openModalBtn.addEventListener("click", () => {
  modalBackground.style.display = "block";
  modal.style.animationName = "animateModalDown";
});

closeIcon.addEventListener("click", () => {
  modal.style.animationName = "animateModalUp";
  setTimeout(() => (modalBackground.style.display = "none"), 500);
});

closeBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

submitBtn.addEventListener("click", () => {  
  modalText.innerHTML = "You have Submitted"
});


window.addEventListener("click", (event) => {
  if (event.target === modalBackground) {
    modal.style.animationName = "animateModalUp";
    setTimeout(() => (modalBackground.style.display = "none"), 500);
  }
});
