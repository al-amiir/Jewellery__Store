import { createProduct } from "../view/createProducts";
import {
  cartButtonDisplay,
  addedToCartButtonFunc,
} from "../view/button/cartButton";
import { showMeDisplay } from "../view/button/showMeButton";
import { nextButtonFunc, prevButtonFunc } from "../view/button/nextPrevButton";
import {
  createThumbnails,
  deletThumbnails,
  whichThumbnail,
} from "../view/button/thumbnails";
import { sidebarButtonFunc } from "../view/button/sideBarButton";
import { products } from "../data/getData";
import {
  paginitionNextFunc,
  paginitionPrevFunc,
} from "../view/button/paginition";
import anime from "animejs/lib/anime.es";
import hoverEffect from "hover-effect";

window.addEventListener("load", () => {
  anime({
    targets: ".pinkCloud-image",
    opacity: [1, 0],
    scale: [6.3, 1],
    duration: 0, // 2000
    easing: "linear",
  });
  setTimeout(() => {
    document.querySelector(".pinkCloud").innerHTML = "";
  }, 0); //2000
  for (let i = 0; i < 3; i++) {
    createProduct("row", i);
  }

  //////////////////////////////////////////////////////////////
  // Side bar Button
  //////////////////////////////////////////////////////////////

  let sidebarButton = document.querySelector(".button__sidebar");
  let overlay = document.querySelector(".overlay");
  let sideButtonCases = false;

  sidebarButton.addEventListener("click", () => {
    if (sideButtonCases === false) {
      sidebarButtonFunc("normal");
      sideButtonCases = true;
    } else {
      sidebarButtonFunc("reverse");
      sideButtonCases = false;
    }
  });
  overlay.addEventListener("click", () => {
    sidebarButtonFunc("reverse");
    sideButtonCases = false;
  });

  ///////////////////////////////////////////////////////////////////////////
  // Show me button (in product card)
  //////////////////////////////////////////////////////////////////////////
  let dataNumber;
  let thumbnailImgArray;
  function showMeButtonHelepr() {
    let showMeButtons = document.querySelectorAll(".button__showMe");
    let imageSource = document.querySelector(".singleProduct__left-image");
    let bigImage;
    if (showMeButtons) {
      showMeButtons.forEach((button, i) => {
        // 1) display transition
        // 2) get data-number from button clicked
        // 3) get thumbnail array
        // 4) get bigImage array
        // 5) create html img with new thumb img  sources
        // 6) add style to small thumbnails
        button.addEventListener("click", (e) => {
          // 1)
          showMeDisplay("normal");
          // 2)
          dataNumber = e.target.closest("div").getAttribute("data-number");
          // 3)
          thumbnailImgArray = products.rings[dataNumber].thumbnails;
          // 4)
          bigImage = products.rings[dataNumber].bigImages;
          imageSource.src = bigImage;
          // 5)
          createThumbnails("singleProduct__img-thumbnails", thumbnailImgArray);
          // 6)
          whichThumbnail(0, "singleProduct__img-thumbnails-elm");

          prevButtonFunc(next, prev, 0, thumbnailImgArray);
        });
      });
      let addedToCartButtons = document.querySelectorAll(".button__addToCart");
      addedToCartButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          let dataNumber = e.target.closest("div").getAttribute("data-number");
          thumbnailImgArray = products.rings[dataNumber].thumbnails;
          addedToCartButtonFunc(dataNumber, products, thumbnailImgArray);
        });
      });
    }
  }
  showMeButtonHelepr();

  //////////////////////////////////////////////////////////////
  // Display cart Button
  //////////////////////////////////////////////////////////////

  let cartButton = document.querySelector(".button__cart");
  let cartButtonCases = false;
  cartButton.addEventListener("click", () => {
    if (cartButtonCases === false) {
      cartButtonDisplay("normal");
      cartButtonCases = true;
    } else {
      cartButtonDisplay("reverse");
      cartButtonCases = false;
    }
  });
  ///////////////////////////////////////////////////////////
  //  Added to cart button
  //////////////////////////////////////////////////////////

  // this button display  when click on show me button
  let addToCartButton = document.querySelector(
    ".singleProduct__right-part1-addToCart"
  );

  addToCartButton.addEventListener("click", () => {
    addedToCartButtonFunc(dataNumber, products, thumbnailImgArray);
  });

  ///////////////////////////////////////////////////////////
  //  singleProduct next And prev button
  //////////////////////////////////////////////////////////
  let next = document.querySelector(".singleProduct__next");
  let prev = document.querySelector(".singleProduct__prev");
  let thumbnailCounter = 0;

  next.addEventListener("click", () => {
    thumbnailCounter++;
    nextButtonFunc(next, prev, thumbnailCounter, thumbnailImgArray);
    document.querySelector(".singleProduct__left-image").src =
      thumbnailImgArray[thumbnailCounter];
    whichThumbnail(thumbnailCounter, "singleProduct__img-thumbnails-elm");
  });
  prev.addEventListener("click", () => {
    thumbnailCounter--;
    prevButtonFunc(next, prev, thumbnailCounter, thumbnailImgArray);
    document.querySelector(".singleProduct__left-image").src =
      thumbnailImgArray[thumbnailCounter];
    whichThumbnail(thumbnailCounter, "singleProduct__img-thumbnails-elm");
  });

  ///////////////////////////////////////////////////////////
  // Close singleProduct
  //////////////////////////////////////////////////////////

  let singleProductCloseButton = document.querySelector(
    ".singleProduct__close"
  );
  singleProductCloseButton.addEventListener("click", () => {
    showMeDisplay("reverse");
    thumbnailCounter = 0;
    setTimeout(() => {
      deletThumbnails("singleProduct__img-thumbnails");
    }, 1000);
  });

  //////////////////////////////////////////////////////////////
  // Pagnition
  //////////////////////////////////////////////////////////////

  let paginitionNext = document.querySelector(".button__paginition-next");
  let paginitionPrev = document.querySelector(".button__paginition-prev");
  let paginitionPage = document.querySelector(".paginition__page");
  let pagniCounter = 0;
  let page = 1;
  let perPage = 3;

  paginitionPage.textContent = `${page} / ${Math.ceil(
    products.rings.length / perPage
  )}`;
  paginitionNext.addEventListener("click", () => {
    if (page >= Math.ceil(products.rings.length / perPage)) return;
    paginitionNextFunc(pagniCounter, perPage, products, "rings");
    pagniCounter += perPage;
    page++;
    paginitionPage.textContent = `${page} / ${Math.ceil(
      products["rings"].length / perPage
    )}`;
    showMeButtonHelepr();
  });
  paginitionPrev.addEventListener("click", () => {
    if (page == 1) return;
    pagniCounter -= perPage;
    paginitionPrevFunc(pagniCounter, perPage, products, "rings");
    page--;
    paginitionPage.textContent = `${page} / ${Math.ceil(
      products["rings"].length / perPage
    )}`;
    showMeButtonHelepr();
  });
});
