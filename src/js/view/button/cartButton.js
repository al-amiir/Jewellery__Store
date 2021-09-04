import anime from "animejs/lib/anime.es";

///////////////////////////////////////////////////////////////////////////
// Display cart button
//////////////////////////////////////////////////////////////////////////

export let cartButtonDisplay = function (direction) {
  anime({
    targets: ".cart",
    translateX: ["0px", "-288px"],
    duration: 1000,
    easing: "easeOutCubic",
    direction: `${direction}`,
  });
};

export let addedToCartButtonFunc = function (dataNumber, products, img) {
  // If it is first time to add product to cart
  if (!products.cart.id.includes(dataNumber)) {
    // Push data number to id array
    // in same time push 1 to count array
    products.cart.id.push(dataNumber);
    products.cart.count.push(1);
    // insert html to body
    document.querySelector(".cart").innerHTML += `
          <div class="cart__box cart__box-${dataNumber}" data-number = ${dataNumber}>
          <img
          class="cart__box--img"
          src=${img[0]}
          alt=""
          />
          <div>
          <button class="button__cart-plus button__cart-plus-${dataNumber}" data-number = ${dataNumber}>+</button>
          <span>1</span>
          <button class="button__cart-minus button__cart-minus-${dataNumber}" data-number = ${dataNumber}>-</button>
          </div>
          </div>
          `;
    plusFunction(products);
    minusFunction(products);
    alertMessages("Added Successfully To cart");
  } else {
    let index = products.cart.id.indexOf(dataNumber);
    products.cart.count[index] += 1;
    // Increase product number
    document.querySelector(`.cart__box-${dataNumber} span`).innerHTML =
      products.cart.count[index];
  }
};
function plusFunction(products) {
  document.querySelectorAll(".button__cart-plus").forEach((button) => {
    button.addEventListener("click", (e) => {
      let dataNumber = e.target.dataset.number;
      let index = products.cart.id.indexOf(dataNumber);
      products.cart.count[index] += 1;
      // Increase product number
      document.querySelector(`.cart__box-${dataNumber} span`).innerHTML =
        products.cart.count[index];

      alertMessages("More Of This Product + ");
    });
  });
}
function minusFunction(products) {
  document.querySelectorAll(".button__cart-minus").forEach((button) => {
    button.addEventListener("click", (e) => {
      let dataNumber = e.target.dataset.number;
      let index = products.cart.id.indexOf(dataNumber);
      if (products.cart.count[index] == 0) {
        alertMessages("Clear Cart From This Product");
        return;
      } else {
        products.cart.count[index] -= 1;
        // Increase product number
        document.querySelector(`.cart__box-${dataNumber} span`).innerHTML =
          products.cart.count[index];
        alertMessages("Less Of This Product - ");
      }
    });
  });
}
function alertMessages(message) {
  anime({
    targets: ".cart_alert_message",
    opacity: [0, 1],
    duration: 1500,
    easing: "linear",
  });
  document.querySelector(".cart_alert_message").textContent = `${message}`;
  setTimeout(() => {
    anime({
      targets: ".cart_alert_message",
      opacity: [1, 0],
      duration: 1000,
      easing: "linear",
    });
    document.querySelector(".cart_alert_message").textContent = ``;
  }, 2500);
}
