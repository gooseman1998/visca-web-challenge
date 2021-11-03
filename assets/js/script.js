changeView = document.querySelector("#viewSwitch");
productCardWrapper = document.querySelector(".product-cards");
productCards = document.querySelectorAll(".product-card");

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
