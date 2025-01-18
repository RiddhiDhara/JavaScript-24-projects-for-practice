const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshButton = document.querySelector(".refresh-button");
const loaderText = document.querySelector(".loader");
const limit = 1000;

function showLoader() {
  loaderText.classList.add("show");
  quoteWrapper.classList.add("hide");
}

function removeLoader() {
  loaderText.classList.remove("show");
  quoteWrapper.classList.remove("hide");
}

function fetchRandomQuotes() {
  showLoader();
  fetch(`https://dummyjson.com/quotes/?limit=${limit}`)
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        removeLoader();
        displayQuotes(result.quotes);
      }
    })
    .catch((error) => console.log(error));
}

function displayQuotes(quoteItem) {
  console.log(quoteItem);
  let randomNO = generateRandomNum(limit);
  quoteWrapper.innerHTML = `
    <div class="quote-item">
      <div class = "quote">${quoteItem[randomNO].quote}</div>     
      <div class = "author">Quoted by - ${quoteItem[randomNO].author}</div>  
    </div>   
    `;
}

function generateRandomNum(val) {
  const randomNumber = Math.floor(Math.random() * val);
  console.log(randomNumber);
  return randomNumber;
}

refreshButton.addEventListener("click", () => {
  fetchRandomQuotes();
});

fetchRandomQuotes();
