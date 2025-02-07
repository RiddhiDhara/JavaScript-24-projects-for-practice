const usersList = document.querySelector(".users-list");
const loader = document.querySelector(".loader");
const scrollToTopButton = document.querySelector(".scroll-to-top-button");
const scrollToBottomButton = document.querySelector(".scroll-to-bottom-button");

function showloader() {
  loader.style.display = "block";
}
function hideloader() {
  loader.style.display = "none";
}

function loadData(data) {
  console.log(data);
  showloader();
  data.forEach((element) => {
    usersList.innerHTML += `
     <details class="user ${element.id}">
        <summary>${element.firstName} ${element.lastName}</summary>
        <ul>
           <li>Age : ${element.age}</li>
           <li>Gender : ${element.gender}</li>
           <li>E-mail : ${element.email}</li>
           <li>Phone no. : ${element.phone}</li>
        </ul>
    </details>
    `;
  });
  hideloader();
}

async function fetchApiData() {
  const response = await fetch("https://dummyjson.com/users?limit=100", {
    method: "get",
  });
  const result = await response.json();
  const data = result.users;

  if (result && data) {
    loadData(data);
  } else {
    hideloader();
    usersList.innerHTML = "Data not found!!";
  }
}

fetchApiData();

// button click

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToBottomButton.addEventListener("click", () => {
  console.log(document.body.scrollHeight);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
