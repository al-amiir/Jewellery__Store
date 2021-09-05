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
});
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

/////////////////////////////////////////////////////////////////
// Logo Button
/////////////////////////////////////////////////////////////////

document
  .querySelector(".button__logo")
  .addEventListener("click", function () {});

/////////////////////////////////////////////////////////////////
// Menu Button
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
// Home Button
/////////////////////////////////////////////////////////////////
let menuButtonList = document.querySelectorAll(".button__menu--list");
let collection = document.querySelector(".collection");

menuButtonList.forEach((button, i) => {
  button.addEventListener("click", () => {
    menuAnimation("reverse", "none", 600);
  });
});
menuButtonList[0].addEventListener("click", () => {
  if (collection.style.clipPath == "circle(100% at 50% 50%)") {
    setTimeout(() => {
      collectionSection("reverse");
    }, 600);
  } else {
    window.location.href = "https://al-amiir.github.io/Jewellery__Store/";
  }
});

menuButtonList[1].addEventListener("click", () => {
  if (collection.style.clipPath == "" || "circle(0% at 50% 50%)") {
    setTimeout(() => {
      collectionSection("normal");
    }, 600);
  } else return;
});
/////////////////////////////////////////////////////////////////
// Category
/////////////////////////////////////////////////////////////////

document.querySelectorAll(".button__collection").forEach((b) => {
  b.addEventListener("click", function () {
    collectionSection("normal");
  });
});

/////////////////////////////////////////////////////////////////
// Collection Buttons
/////////////////////////////////////////////////////////////////

let collectionListButton = document.querySelectorAll(
  ".collection__box-list--button"
);
collectionListButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    anime({
      targets: ".collection__background",
      scale: [1, 8],
      duration: 4000,
      easing: "easeOutQuad",
    });
    anime({
      targets: ".collection__box",
      opacity: [1, 0],
      duration: 1000,
      easing: "linear",
    });
    setTimeout(() => {
      window.location.href = "#";
    }, 2000);
  });
});
