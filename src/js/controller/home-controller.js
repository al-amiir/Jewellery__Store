import anime from "animejs/lib/anime.es.js";
import { section0Animation } from "../view/sections/section-0";
import { upDowButtonAnimation } from "../view/button/upDowButtonAnimation";
import { typing } from "../view/typing";
import { menuAnimation } from "../view/menu";
import { collectionSection } from "../view/collection";
import { sectionDown, sectionUp } from "../view/sections/sectionUpDownLogic";

window.addEventListener("load", function () {
  // Animation occured in section 0
  section0Animation();

  // Animation of up and down buttons
  // upDowButtonAnimation();

  // typing("1");
  /**
   * a Controller function , for up and down section buttons
   * Every section has two button
   * For example for section 1 there are, button__parallex-1-up, button__parallex-1-down
   * For button__parallex-1-up , sectioUp Function occured
   * For button__parallex-1-down , sectionDown Function occured
   *
   * @param {string} btnNumber
   * @param {string} upTo
   * @param {string} section
   * @param {string} downTo
   */

  const buttonParallex = function (btnNumber, upTo, section, downTo) {
    // 1) Select both buttons
    document
      .querySelectorAll(`.button__parallex-${btnNumber}`)
      .forEach((button) => {
        // 2) add Event Listner on click
        button.addEventListener("click", (e) => {
          // 3) Check if it up button
          if (e.target.closest(`.button__parallex-${+btnNumber}-up`)) {
            sectionUp(upTo, section);
            setTimeout(() => {
              typing(`${+btnNumber - 1}`);
            }, 500);
            // 4) Check if it down button
          } else if (e.target.closest(`.button__parallex-${+btnNumber}-down`)) {
            sectionDown(section, downTo);
            setTimeout(() => {
              typing(`${+btnNumber + 1}`);
            }, 500);
          }
        });
      });
  };

  // Procced Function form section 1 to 5
  for (let i = 1; i <= 5; i++) {
    buttonParallex(`${i}`, `section${i - 1}`, `section${i}`, `section${i + 1}`);
  }
});

/////////////////////////////////////////////////////////////////
// Logo Button
/////////////////////////////////////////////////////////////////

document.querySelector(".button__logo").addEventListener("click", function () {
  anime({
    targets: ".category",
    clipPath: ["circle(100%)", "circle(0%)"],
    easing: "easeOutQuart",
    duration: 2000,
  });
});

/////////////////////////////////////////////////////////////////
// Menu
/////////////////////////////////////////////////////////////////

document.querySelector(".button__menu").addEventListener("click", function () {
  menuAnimation("normal", "flex", 0);
});
document
  .querySelector(".button__menu--back")
  .addEventListener("click", function () {
    menuAnimation("reverse", "none", 600);
  });

/////////////////////////////////////////////////////////////////
// Category
/////////////////////////////////////////////////////////////////

document.querySelectorAll(".button__collection").forEach((b) => {
  b.addEventListener("click", function () {
    collectionSection();
  });
});

/////////////////////////////////////////////////////////////////
// Collection Buttons
/////////////////////////////////////////////////////////////////

// let collectionImageList = [
//   "./material /collection/ring.jpg",
//   "./material /collection/necklace.jpg",
//   "./material /collection/earing.jpg",
//   "./material /collection/nose.jpg",
// ];
let collectionListButton = document.querySelectorAll(
  ".collection__box-list--button"
);
collectionListButton.forEach((button, i) => {
  // button.addEventListener("mouseover", () => {
  //   document.querySelector(
  //     ".collection__box-image"
  //   ).src = `${collectionImageList[i]}`;
  // });
  button.addEventListener("click", () => {
    // anime({
    //   targets: ".collection__background",
    //   scale: [1, 8],
    //   duration: 4000,
    //   easing: "easeOutQuad",
    // });
    anime({
      targets: ".collection__box",
      opacity: [1, 0],
      duration: 1000,
      easing: "linear",
    });
    setTimeout(() => {
      window.location.href =
        "http://127.0.0.1:5500/assets/collection-pages/ringPage.html";
    }, 2000);
  });
});
