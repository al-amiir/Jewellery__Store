import anime from "animejs/lib/anime.es.js";

/**
  section down animation 
 * @param {string class name} firstSction
 * @param {string class name} secondSection
 */
export let sectionDown = function (firstSction, secondSection) {
  let firstSec = document.querySelector(`.${firstSction}`);
  let secSec = document.querySelector(`.${secondSection}`);
  document.querySelectorAll(".text__main").forEach((t) => {
    t.style.transform = "translateY(100px)";
  });
  document.querySelectorAll(".text__address").forEach((t) => {
    t.style.transform = "translateY(100px)";
  });
  anime({
    targets: `.${firstSction}`,
    translateY: "-104vh",
    duration: 1000,
    easing: "easeOutQuad",
  });
  anime({
    targets: `.${firstSction}__img`,
    translateY: [0, "100vh"],
    duration: 1000,
    easing: "easeOutQuad",
  });
  anime({
    targets: `.${secondSection}`,
    translateY: "-104vh",
    duration: 1000,
    easing: "easeOutQuad",
    complete: function (anim) {
      secSec.style.gridRow = "1/2";
      secSec.style.transform = "translateY(0)";
    },
  });
  anime({
    targets: `.${secondSection}__img`,
    translateY: ["-100vh", 0],
    duration: 990,
    easing: "easeOutQuad",
  });
};

/**
    section up animation 
   * @param {string class name} firstSction
   * @param {string class name} secondSection
   */
export let sectionUp = function (firstSction, secondSection) {
  let firstSec = document.querySelector(`.${firstSction}`);
  let secSec = document.querySelector(`.${secondSection}`);
  document.querySelectorAll(".text__main").forEach((t) => {
    t.style.transform = "translateY(100px)";
  });
  anime({
    targets: `.${firstSction}`,
    translateY: "0vh",
    duration: 1000,
    easing: "easeOutQuad",
    complete: function (anim) {
      firstSec.style.gridRow = "1/2";
    },
  });
  anime({
    targets: `.${firstSction}__img`,
    translateY: ["100vh", 0],
    duration: 990,
    easing: "easeOutQuad",
  });
  anime({
    targets: `.${secondSection}`,
    translateY: "104vh",
    duration: 1100,
    easing: "easeOutQuad",
    complete: function (anim) {
      secSec.style.gridRow = "2/3";
      secSec.style.transform = "translateY(0)";
    },
  });
  anime({
    targets: `.${secondSection}__img`,
    translateY: [0, "-100vh"],
    duration: 1000,
    easing: "easeOutQuad",
  });
};
