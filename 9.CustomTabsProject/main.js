const tabContainer = document.querySelector(".container");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".content");

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.dataset);
    const currentId = event.target.dataset.id;

    if (currentId) {
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
    }

    event.target.classList.add("active");

    if (currentId) {
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
    }

    const currentTab = document.getElementById(currentId);
    currentTab.classList.add("active");
  });
});
