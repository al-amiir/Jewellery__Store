import { products } from "../data/getData";

export function createProduct(parent, dataNumber) {
  let box = document.createElement("div");
  box.innerHTML = `
        <div class="product" data-number=${dataNumber}>
        <span class="product__box">
        <div class="product__box-image">
        <img src="${products.rings[dataNumber].bigImages[0]}" alt="" />
        </div>
        <h1 class="product__box-header">Ring1</h1>
        <p class="product__box-p">Lorem ipsum dolor sit.</p>
        <div class="product__box-buttons" data-number=${dataNumber} >
        <button class="button__showMe">Show Me...</button>
        <button class="button__addToCart">
            <span class="material-icons"> add_shopping_cart </span> ADD TO CART
        </button>
        </div>
        </span>
        </div>
        `;
  document.querySelector(`.${parent}`).appendChild(box);
}
