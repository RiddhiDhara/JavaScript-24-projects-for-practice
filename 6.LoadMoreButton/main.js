const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");

let skipContentCount = 0;
const loadItemLimit = 8;

async function fetchListOfProducts(getCurrentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${loadItemLimit}&skip=${
        getCurrentStep === 0 ? 0 : getCurrentStep * loadItemLimit
      }`,
      {
        method: "GET",
      }
    );

    const result = await response.json();
    // console.log(result);
    if (response && result.products) {
      displayProducts(result.products);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(productList) {
  console.log(productList);
  const newProductItems = productList
    .map(
      (productItem) =>
        `
    <div class="product-item-wrapper">
       <img class="product-img" src="${productItem.thumbnail}" alt="${productItem.title}" />
       <p class="product-title">${productItem.title}</p>
       <p class="product-price">$${productItem.price}</p>
       <p class="product-desc">${productItem.description}</p>
    </div>
        `
    )
    .join(" ");
  productsContainer.innerHTML += newProductItems;

  if (productsContainer.children.length > 100) {
    loadMoreBtn.setAttribute("disabled", "true");
  }

  console.log(productsContainer.children.length);
}

loadMoreBtn.addEventListener("click", () => {
  console.log(skipContentCount);
  fetchListOfProducts((skipContentCount += 1));
});

fetchListOfProducts(skipContentCount);
































// ===================in the display function we can also write this :
//  this can be done in this way also

// productList.forEach((productItem) => {
//     const productItemWrapper = document.createElement("div");
//     const productTitle = document.createElement("p");
//     const productThumbnail = document.createElement("img");
//     const productDescription = document.createElement("p");
//     const productPrice = document.createElement("p");

//     productTitle.textContent = productItem.title;
//     productDescription.textContent = productItem.description;
//     productThumbnail.src = productItem.thumbnail;
//     productPrice.textContent = productItem.price;

//     productItemWrapper.classList.add("product-item-wrapper");
//     productTitle.classList.add("product-title");
//     productThumbnail.classList.add("product-img");
//     productPrice.classList.add("product-price");
//     productDescription.classList.add("product-desc");

//     productItemWrapper.appendChild(productThumbnail);
//     productItemWrapper.appendChild(productTitle);
//     productItemWrapper.appendChild(productPrice);
//     productItemWrapper.appendChild(productDescription);

//     productsContainer.appendChild(productItemWrapper);
//   });
// ------------------------------------------------------------------
