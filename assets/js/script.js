const changeView = document.querySelector("#viewSwitch");
const sortAlphabetically = document.querySelector("#sort_alphabetically");
const sortNormal = document.querySelector("#sort_normal");

const productCardWrapper = document.querySelector(".product-cards");
const productCards = document.querySelectorAll(".product-card");

changeView.addEventListener("click", (event) => {
  if (changeView.checked == false) {
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
  productCardWrapper.classList.add("product-cards--alphabetically");
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
  if (productCardWrapper.classList.contains("product-cards--alphabetically")) {
    productCardWrapper.classList.remove("product-cards--alphabetically");
  }
  sortAlphabetically.style.display = "block";
  sortNormal.style.display = "none";
  productCards.forEach((card) => {
    productCardWrapper.appendChild(card);
  });
});

window.addEventListener(
  "resize",
  function (event) {
    if (window.innerWidth <= 992) {
      if (changeView.checked == true) {
        changeView.click();
      }
    }
  },
  true
);
