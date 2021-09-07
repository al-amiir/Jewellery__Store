import anime from "animejs/lib/anime.es.js";

/**
 * Text Animation
 * @param {number} sectionNumber
 */

export let typing = function (sectionNumber) {
  anime({
    targets: [
      `.section${sectionNumber} .text__container .text__main`,
      `.section${sectionNumber} .text__container .text__address`,
    ],
    translateY: [100, 0],
    duration: 1000,
    opacity: [0, 1],
    easing: "easeOutQuart",
    delay: function (el, i) {
      return i * 250;
    },
  });
};
