import anime from "animejs/lib/anime.es.js";

/**
 * Animation of up down buttons
 */
export let upDowButtonAnimation = function () {
  anime({
    targets: ".button__parallex",
    translateY: [0, 3],
    duration: 800,
    direction: "alternate",
    easing: "easeInSine",
    loop: true,
  });
};
