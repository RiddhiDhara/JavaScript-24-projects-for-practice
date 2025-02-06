const categories = ["All", "Men", "Women", "Kids"];
const content = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 2",
  },
  {
    id: "Men",
    label: "Men Shirt 3",
  },
  {
    id: "Men",
    label: "Men Shirt 4",
  },
  {
    id: "Men",
    label: "Men Shirt 5",
  },
  {
    id: "Women",
    label: "Women Shirt 1",
  },
  {
    id: "Women",
    label: "Women Shirt 2",
  },
  {
    id: "Women",
    label: "Women Shirt 3",
  },
  {
    id: "Women",
    label: "Women Shirt 4",
  },
  {
    id: "Women",
    label: "Women Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 3",
  },
  {
    id: "Kids",
    label: "Kids Shirt 4",
  },
  {
    id: "Kids",
    label: "Kids Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 10",
  },
  {
    id: "Kids",
    label: "Kids Shirt 20",
  },
];

const filterButtons = document.querySelector(".filter-buttons-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");

function createCategories() {
  categories.forEach((category) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("filter-button");
    buttonElement.innerText = category;
    buttonElement.setAttribute("data-filter", category);

    filterButtons.appendChild(buttonElement);
  });
}

function createContent() {
  content.forEach((contentItem) => {
    const wrapperItem = document.createElement("span");
    wrapperItem.classList.add("card", contentItem.id);
    wrapperItem.textContent = contentItem.label;

    contentWrapper.appendChild(wrapperItem);
  });
}

function getFiltered(categoryName, allContentItem) {
  allContentItem.forEach((items) => {
    if (items.classList.contains(categoryName) || categoryName == "All") {
      items.classList.remove("hide");
    } else {
      items.classList.add("hide");
    }
  });
}

createCategories();
createContent();

const allcategories = document.querySelectorAll(".filter-button");
const allContentItem = document.querySelectorAll(".card");

allcategories.forEach((categoryitem) => {
  categoryitem.addEventListener("click", () => {
    const categoryName = categoryitem.dataset.filter;
    console.log(categoryName);
    getFiltered(categoryName, allContentItem);
  });
});
