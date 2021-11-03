const changeView = document.querySelector("#viewSwitch");
const sortAlphabetically = document.querySelector("#sort_alphabetically");
const sortNormal = document.querySelector("#sort_normal");

const productCardWrapper = document.querySelector(".product-cards");
const productCards = document.querySelectorAll(".product-card");

changeView.addEventListener("click", (event) => {
  if (changeView.checked == true) {
    productCardWrapper.classList.add("product-cards--list");
    productCards.forEach((card) => {
      card.classList.add("product-card--list");
    });
  } else {
    if (productCardWrapper.classList.contains("product-cards--list")) {
      productCardWrapper.classList.remove("product-cards--list");
    }
    productCards.forEach((card) => {
      if (card.classList.contains("product-card--list")) {
        card.classList.remove("product-card--list");
      }
    });
  }
});

sortAlphabetically.addEventListener("click", (event) => {
  sortAlphabetically.style.display = "none";
  sortNormal.style.display = "block";
  names = [];
  productCards.forEach((card) => {
    names.push(card.id);
  });
  names.sort();

  names.forEach((element) => {
    card = document.querySelector("#" + element);
    productCardWrapper.appendChild(card);
  });
});

sortNormal.addEventListener("click", (event) => {
  sortAlphabetically.style.display = "block";
  sortNormal.style.display = "none";
  productCards.forEach((card) => {
    productCardWrapper.appendChild(card);
  });
});
